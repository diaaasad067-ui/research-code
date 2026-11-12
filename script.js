const days = [
  {day:"اليوم الأول",name:"صدر + ظهر",tag:"CHEST / BACK",items:[["ضغط صدر بالدمبل","2 × 8–12"],["سحب أمامي للظهر","2 × 8–12"],["ضغط صدر على جهاز","2 × 10–12"],["تجديف جالس","2 × 10–12"]]},
  {day:"اليوم الثاني",name:"كتف + ذراع",tag:"SHOULDERS / ARMS",items:[["ضغط كتف خفيف","2 × 8–12"],["رفرفة جانبي","2 × 10–12"],["ثني بايسبس","2 × 10–12"],["تمديد ترايسبس بالكابل","2 × 10–12"]]},
  {day:"اليوم الثالث",name:"رجل",tag:"LEGS",items:[["سكوات وزن الجسم أو خفيف","2 × 8–12"],["ضغط رجل","2 × 10–12"],["ثني خلفية الرجل","2 × 10–12"],["رفع سمانة","2 × 12–15"]]},
  {day:"اليوم الرابع",name:"صدر + ظهر",tag:"CHEST / BACK",items:[["ضغط مائل بالدمبل","2 × 8–12"],["سحب أرضي بالكابل","2 × 10–12"],["تفتيح صدر على جهاز","2 × 10–12"],["سحب مستقيم للظهر","2 × 10–12"]]},
  {day:"اليوم الخامس",name:"كتف + ذراع",tag:"SHOULDERS / ARMS",items:[["رفرفة جانبي","2 × 10–12"],["رفرفة خلفي","2 × 10–12"],["بايسبس دمبل","2 × 10–12"],["ترايسبس بالحبل","2 × 10–12"]]},
  {day:"اليوم السادس",name:"رجل + حركة",tag:"LEGS / MOBILITY",items:[["اندفاع ثابت بوزن الجسم","2 × 8 لكل رجل"],["جسر الحوض","2 × 10–12"],["رفع سمانة","2 × 12–15"],["حركة ومرونة خفيفة","5–10 دقائق"]]},
  {day:"اليوم السابع",name:"راحة واستشفاء",tag:"REST DAY",items:[["راحة ونوم كفاية","—"],["مشي خفيف اختياري","حسب الراحة"],["وجبات متوازنة ومياه","طوال اليوم"]]}
];

const grid = document.getElementById("weekGrid");
const detail = document.getElementById("dayDetail");

function showDay(index) {
  const d = days[index];
  document.querySelectorAll(".day-card").forEach((card,i)=>card.classList.toggle("active",i===index));
  detail.innerHTML = `
    <div class="detail-head"><h3>${d.day} — ${d.name}</h3><span>${d.tag}</span></div>
    <div class="exercise-list">${d.items.map(item=>`<div class="exercise"><b>${item[0]}</b><small>${item[1]}</small></div>`).join("")}</div>`;
}

days.forEach((d,i)=>{
  const card=document.createElement("button");
  card.className="day-card";
  card.innerHTML=`<div class="day-num">0${i+1}</div><strong>${d.name}</strong><small>${d.day}</small>`;
  card.addEventListener("click",()=>showDay(i));
  grid.appendChild(card);
});
showDay(0);

document.getElementById("themeBtn").addEventListener("click",()=>{
  document.body.classList.toggle("light");
});
document.getElementById("year").textContent=new Date().getFullYear();
