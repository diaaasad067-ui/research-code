const workouts = {
  chest: {
    kicker: "DAY 01", title: "تمارين الصدر", icon: "01",
    desc: "ابدأ بمقاومة خفيفة وركّز على التحكم في الحركة والتنفس.",
    exercises: [
      ["ضغط صدر على جهاز (Chest Press)", "حافظ على الظهر ثابتًا وادفع بسلاسة.", "2 مجموعات × 8–12 تكرار"],
      ["ضغط مائل بوزن الجسم", "استخدم سطحًا ثابتًا وارتفاعًا مناسبًا لمستواك.", "2 مجموعات × 6–10 تكرارات"],
      ["تفتيح صدر بالكابل أو الجهاز", "حركة هادئة ومدى مريح للكتف.", "1–2 مجموعة × 10–12 تكرار"],
      ["ضغط حائط", "اختيار سهل للتدريب على وضعية الضغط.", "2 مجموعات × 8–12 تكرار"]
    ],
    note: "اترك يوم راحة على الأقل قبل تدريب الصدر مرة أخرى، ولا تكمل أي حركة تسبب ألمًا."
  },
  back: {
    kicker: "DAY 02", title: "تمارين الظهر", icon: "02",
    desc: "حافظ على وضعية مستقرة، وتجنب سحب الوزن بعنف أو تقويس الظهر.",
    exercises: [
      ["سحب أمامي (Lat Pulldown)", "اسحب باتجاه أعلى الصدر من غير تأرجح.", "2 مجموعات × 8–12 تكرار"],
      ["سحب جالس (Seated Row)", "قرّب لوحي الكتف بهدوء مع ظهر محايد.", "2 مجموعات × 8–12 تكرار"],
      ["Bird Dog", "مدّ الذراع والرجل العكسية مع ثبات الجذع.", "2 مجموعات × 6 لكل جانب"],
      ["سحب مطاط مقاومة", "اختَر شريطًا خفيفًا وتحكم في الرجوع.", "1–2 مجموعة × 10 تكرارات"]
    ],
    note: "لا تستخدم اندفاع الجسم لمساعدة السحب. اطلب من المدرب مراجعة وضعية ظهرك."
  },
  shoulders: {
    kicker: "DAY 03", title: "تمارين الكتف", icon: "03",
    desc: "استخدم مدى حركة مريحًا ومقاومة خفيفة، خصوصًا في تمارين الرفع.",
    exercises: [
      ["ضغط كتف على جهاز", "لا تقفل المرفقين بقوة، وحافظ على حركة مريحة.", "2 مجموعات × 8–10 تكرارات"],
      ["رفع جانبي خفيف", "ارفع الذراعين بتحكم ومن غير تأرجح.", "1–2 مجموعة × 10 تكرارات"],
      ["سحب مطاط للوجه", "اسحب الشريط باتجاه الوجه مع تحكم.", "2 مجموعات × 10 تكرارات"],
      ["دوائر كتف خفيفة", "حركة صغيرة ولطيفة كجزء من الإحماء.", "30 ثانية"]
    ],
    note: "لو شعرت بألم في مفصل الكتف، أوقف الحركة واستشر مدربًا مؤهلًا."
  },
  arms: {
    kicker: "DAY 04", title: "تمارين الذراع", icon: "04",
    desc: "الهدف هو تعلم الحركة الصحيحة؛ لا تحتاج إلى أوزان ثقيلة.",
    exercises: [
      ["ثني بايسبس بالدمبل الخفيف", "ثبّت المرفق بجانب الجسم وارفع ببطء.", "2 مجموعات × 8–12 تكرار"],
      ["مد ترايسبس بالكابل", "حافظ على المرفقين قريبين من الجسم.", "2 مجموعات × 8–12 تكرار"],
      ["ثني المطرقة", "اجعل راحة اليدين متقابلتين طوال الحركة.", "1–2 مجموعة × 10 تكرارات"],
      ["ضغط ترايسبس على الحائط", "قرّب الجسم وادفع بسلاسة.", "2 مجموعات × 8–10 تكرارات"]
    ],
    note: "اترك وقتًا للتعافي، ولا تتمرن على نفس العضلات بقوة في أيام متتالية."
  }
};

const tabs = document.querySelectorAll(".tab");
const list = document.getElementById("exercise-list");

function showWorkout(day) {
  const data = workouts[day];
  document.getElementById("day-kicker").textContent = data.kicker;
  document.getElementById("day-title").textContent = data.title;
  document.getElementById("day-icon").textContent = data.icon;
  document.getElementById("day-desc").textContent = data.desc;
  document.getElementById("day-note").textContent = data.note;
  list.innerHTML = data.exercises.map((item, index) => `
    <div class="exercise">
      <h4>${index + 1}. ${item[0]}</h4>
      <p>${item[1]}</p>
      <span class="dose">${item[2]}</span>
    </div>
  `).join("");
  tabs.forEach(tab => {
    const active = tab.dataset.day === day;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", active ? "true" : "false");
  });
}

tabs.forEach(tab => tab.addEventListener("click", () => showWorkout(tab.dataset.day)));
showWorkout("chest");
