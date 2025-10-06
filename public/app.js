/* QuickHire Single Script (public/app.js) */
// ---- Config (EDIT HERE) ---- //
const firebaseConfig = {
  apiKey: "REPLACE_API_KEY",
  authDomain: "quickhire-9df90.firebaseapp.com",
  projectId: "quickhire-9df90",
  storageBucket: "quickhire-9df90.appspot.com",
  messagingSenderId: "REPLACE_SENDER_ID",
  appId: "REPLACE_APP_ID",
};
const PLAN_JOBSEEKER = "P-8AF53156WM20433KND5BGZQ";
const PLAN_EMPLOYER  = "P-50PZ57320D270111MNDR7CSA";
const CONTACT_EMAIL  = "servicesquickhire@gmail.com";

// ---- i18n ---- //
const I18N = {
  he: {
    nav_home:"ראשי", nav_jobs:"משרות", nav_employers:"מעסיקים", nav_pricing:"מנוי", nav_contact:"צור קשר",
    hero_title:"מציאת עבודה מהירה, חכמה ובינלאומית",
    hero_sub:"פרסום משרות לפי מדינה/גלובלי, דירוג עובדים ומעסיקים ותשלום מנוי מאובטח בפייפאל.",
    cta_start:"צא לדרך", cta_find:"חפש משרה",
    jobs_title:"חיפוש משרות", label_country:"מדינה", label_city:"עיר", btn_search:"חפש",
    emp_title:"למעסיקים", emp_text:"פרסם משרה בקלות והגדל חשיפה מקומית או גלובלית.",
    label_job:"תפקיד", label_desc:"תיאור", btn_post:"פרסם",
    pricing_title:"מנויים", plan_seeker:"מחפש עבודה", plan_employer:"מעסיק",
    contact_title:"צור קשר", label_name:"שם", label_email:"אימייל", label_message:"הודעה", btn_send:"שלח",
    footer_all:"כל הזכויות שמורות"
  },
  en: {
    nav_home:"Home", nav_jobs:"Jobs", nav_employers:"Employers", nav_pricing:"Pricing", nav_contact:"Contact",
    hero_title:"Find jobs fast — locally & globally",
    hero_sub:"Post jobs by country or globally, rate workers & employers, and pay securely via PayPal.",
    cta_start:"Get started", cta_find:"Find a job",
    jobs_title:"Job search", label_country:"Country", label_city:"City", btn_search:"Search",
    emp_title:"For employers", emp_text:"Post a job easily and gain local or global reach.",
    label_job:"Role", label_desc:"Description", btn_post:"Publish",
    pricing_title:"Plans", plan_seeker:"Job Seeker", plan_employer:"Employer",
    contact_title:"Contact", label_name:"Name", label_email:"Email", label_message:"Message", btn_send:"Send",
    footer_all:"All rights reserved"
  },
  ru: { nav_home:"Главная", nav_jobs:"Вакансии", nav_employers:"Работодатели", nav_pricing:"Подписка", nav_contact:"Контакты",
    hero_title:"Работа быстро — локально и по всему миру",
    hero_sub:"Публикация вакансий по странам или глобально, рейтинги и безопасные платежи PayPal.",
    cta_start:"Начать", cta_find:"Найти работу", jobs_title:"Поиск вакансий", label_country:"Страна", label_city:"Город", btn_search:"Искать",
    emp_title:"Для работодателей", emp_text:"Публикуйте вакансии и расширяйте охват.",
    label_job:"Должность", label_desc:"Описание", btn_post:"Опубликовать",
    pricing_title:"Тарифы", plan_seeker:"Соискатель", plan_employer:"Работодатель",
    contact_title:"Связаться", label_name:"Имя", label_email:"Email", label_message:"Сообщение", btn_send:"Отправить",
    footer_all:"Все права защищены"
  },
  ka: { nav_home:"მთავარი", nav_jobs:"ვაკანსიები", nav_employers:"დამსაქმებლები", nav_pricing:"გეგმა", nav_contact:"კონტაქტი",
    hero_title:"იპოვე სამსახური სწრაფად — ადგილობრივად და გლობალურად",
    hero_sub:"გამოაქვეყნე ვაკანსია ქვეყანით ან გლობალურად, რეიტინგები და უსაფრთხო PayPal.",
    cta_start:"დაიწყე", cta_find:"მოძებნე სამსახური", jobs_title:"ვაკანსიების ძიება", label_country:"ქვეყანა", label_city:"ქალაქი", btn_search:"ძებნა",
    emp_title:"დამსაქმებლებისთვის", emp_text:"გამოაქვეყნე ვაკანსია და გაზარდე მიღწევა.",
    label_job:"პოზიცია", label_desc:"აღწერა", btn_post:"გამოქვეყნება",
    pricing_title:"პლანები", plan_seeker:"მოსაძებნი", plan_employer:"დამსაქმებელი",
    contact_title:"კონტაქტი", label_name:"სახელი", label_email:"ელფოსტა", label_message:"შეტყობინება", btn_send:"გაგზავნა",
    footer_all:"ყველა უფლება დაცულია"
  },
  hi: { nav_home:"होम", nav_jobs:"नौकरियां", nav_employers:"नियोक्ता", nav_pricing:"प्लान", nav_contact:"संपर्क",
    hero_title:"तेज़ जॉब खोज — स्थानीय और वैश्विक",
    hero_sub:"देश/ग्लोबल के हिसाब से जॉब पोस्टिंग, रेटिंग और सुरक्षित PayPal भुगतान।",
    cta_start:"शुरू करें", cta_find:"नौकरी खोजें", jobs_title:"जॉब सर्च", label_country:"देश", label_city:"शहर", btn_search:"खोज",
    emp_title:"नियोक्ताओं के लिए", emp_text:"आसान पोस्टिंग और व्यापक पहुंच।",
    label_job:"पद", label_desc:"विवरण", btn_post:"प्रकाशित करें",
    pricing_title:"प्लान", plan_seeker:"जॉब सीकर", plan_employer:"नियोक्ता",
    contact_title:"संपर्क", label_name:"नाम", label_email:"ईमेल", label_message:"संदेश", btn_send:"भेजें",
    footer_all:"सर्वाधिकार सुरक्षित"
  },
};

function applyI18n(lang){
  const dict = I18N[lang] || I18N.he;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
  document.documentElement.dir = (lang === "he") ? "rtl" : "ltr";
  localStorage.setItem("lang", lang);
}

// ---- Profanity filter (basic) ---- //
const BAD_WORDS = ["fuck","shit","חרא","זבל","מוות","სულელი","сука","идиот"];
const cleanText = t => BAD_WORDS.reduce((acc,w)=>acc.replace(new RegExp(w,"gi"),"***"), t);

// ---- Simple demo data in memory ---- //
let JOBS = [
  { title:"Full-Stack Developer", country:"Israel", city:"Tel Aviv", desc:"React + Node" },
  { title:"QA Engineer", country:"Georgia", city:"Tbilisi", desc:"Manual + Automation" },
  { title:"Data Analyst", country:"India", city:"Mumbai", desc:"SQL • Python" },
];

function renderJobs(list){
  const c = document.getElementById("jobsResults");
  c.innerHTML = "";
  list.forEach(j => {
    const div = document.createElement("div");
    div.className = "cardItem";
    div.innerHTML = `<b>${j.title}</b> • ${j.city}, ${j.country}<br><span class="muted">${j.desc}</span>`;
    c.appendChild(div);
  });
}

// ---- Events ---- //
document.getElementById("langSelect").addEventListener("change", (e)=>applyI18n(e.target.value));
document.getElementById("btnSearch").addEventListener("click", ()=>{
  const c = (document.getElementById("jobCountry").value||"").toLowerCase().trim();
  const s = (document.getElementById("jobCity").value||"").toLowerCase().trim();
  const out = JOBS.filter(j => (!c || j.country.toLowerCase().includes(c)) && (!s || j.city.toLowerCase().includes(s)));
  renderJobs(out);
});
document.getElementById("btnPostJob").addEventListener("click", ()=>{
  const title = cleanText(document.getElementById("postJobTitle").value.trim());
  const desc  = cleanText(document.getElementById("postJobDesc").value.trim());
  const country = document.getElementById("postCountry").value.trim();
  const city    = document.getElementById("postCity").value.trim();
  if(!title || !desc){ alert("נא למלא תפקיד ותיאור"); return; }
  JOBS.unshift({title, desc, country, city});
  renderJobs(JOBS);
  document.getElementById("postJobTitle").value = "";
  document.getElementById("postJobDesc").value = "";
});

document.getElementById("btnSend").addEventListener("click", ()=>{
  const name = cleanText(document.getElementById("c_name").value.trim());
  const email= document.getElementById("c_email").value.trim();
  const msg  = cleanText(document.getElementById("c_msg").value.trim());
  if(!name || !email || !msg){ alert("נא למלא את כל השדות"); return; }
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=QuickHire Contact - ${encodeURIComponent(name)}&body=${encodeURIComponent(msg + "\\n\\nFrom: " + email)}`;
});

document.getElementById("year").textContent = new Date().getFullYear();
applyI18n(localStorage.getItem("lang")||"he");
renderJobs(JOBS);

// ---- Firebase Safe Init ---- //
(function initFirebaseSafely(){
  try{
    if(!firebaseConfig.apiKey || firebaseConfig.apiKey.includes("REPLACE")){ console.warn("Firebase config not set yet. Skipping init."); return; }
    const app = firebase.initializeApp(firebaseConfig);
    console.log("Firebase ready", app?.name);
  }catch(e){ console.warn("Firebase init skipped", e); }
})();

// ---- PayPal Subscriptions ---- //
function renderPaypalButtons(){
  if (!window.paypal || !paypal.Buttons) return;
  paypal.Buttons({
    createSubscription: function(data, actions) {
      return actions.subscription.create({ plan_id: PLAN_JOBSEEKER });
    },
    onApprove: function(data, actions) {
      alert("Subscribed (Job Seeker): " + data.subscriptionID);
    }
  }).render('#paypal-jobseeker');

  paypal.Buttons({
    createSubscription: function(data, actions) {
      return actions.subscription.create({ plan_id: PLAN_EMPLOYER });
    },
    onApprove: function(data, actions) {
      alert("Subscribed (Employer): " + data.subscriptionID);
    }
  }).render('#paypal-employer');
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", renderPaypalButtons);
else renderPaypalButtons();
