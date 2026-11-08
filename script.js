/**
 * TO'Y TAKLIFNOMASI — EXACT REPLICA FROM VIDEO (taklifchi.online)
 * Groom & Bride: Maqsadjon & Maftunaxon
 * Wedding Date: 14-Noyabr 2026, Shanba, soat 17:00
 * Animations:
 *  - Fiery laser cut & 3D wax seal split (M & M)
 *  - Scroll unroll & IntersectionObserver card reveal
 *  - 3D Bank Card Flip & metallic shimmer
 *  - Live fountain & lantern pulsations
 *  - Live countdown & calendar pulse
 *  - Full physics falling rose petals & golden sparkles
 *  - Interactive RSVP confetti blast
 */

// ==========================================================================
// 1. BILINGUAL DICTIONARY (LOTIN <-> КИРИЛЛ)
// ==========================================================================
const translations = {
  uz_lat: {
    nav_music_on: "Musiqa",
    nav_music_off: "O'chirilgan",
    seal_badge: "Maxsus taklifnoma",
    seal_title: "To'yga tayyorgarlik ko'rayotganlar uchun",
    seal_subtitle: "Kelin va kuyovning baxt to'yiga marhamat!",
    open_btn: "Muhrni bosing",
    open_hint: "Taklifnomani ochish uchun bosing",
    ceremony_badge: "Nikoh to'yi",
    couple_groom: "Maqsadjon",
    couple_and: "va",
    couple_bride: "Maftunaxon",
    greeting_title: "Hurmatli mehmonimiz!",
    greeting_text: "Sizni farzandlarimiz Maqsadjon va Maftunaxonlarning nikoh to'yi marosimiga lutfan taklif etamiz. Quvonchli kunimizni siz bilan birga nishonlashdan mamnun bo'lamiz.",
    tag_date: "To'y kuni",
    day_name: "Shanba",
    month_year: "Noyabr 2026",
    wedding_time: "soat 17:00 da",
    countdown_title: "To'yga qadar:",
    label_days: "Kun",
    label_hours: "Soat",
    label_mins: "Daqiqa",
    label_secs: "Soniya",
    btn_add_calendar: "📅 Taqvimga qo'shish",
    tag_program: "To'y dasturi",
    prog_1_time: "11:00",
    prog_1_title: "Nikoh marosimi",
    prog_1_desc: "Faqat yaqinlar va qarindoshlar uchun",
    prog_2_time: "17:00",
    prog_2_title: "Mehmonlarni kutib olish",
    prog_2_desc: "Jonli musiqa sadolari ostida mehmonlarni kutib olish",
    prog_3_time: "18:00",
    prog_3_title: "Kelin-kuyovning kirib kelishi",
    prog_3_desc: "Milliy navolar va karnay-surnay sadolari ostida kelin-kuyovning tantanali kirib kelishi",
    prog_4_time: "18:30",
    prog_4_title: "Ziyofat va tabriklar",
    prog_4_desc: "Milliy taomlar va samimiy tilaklar",
    prog_5_time: "19:30",
    prog_5_title: "Raqslar va musiqa",
    prog_5_desc: "Estrada xonandalari ijrosidagi fayzli kuy-qo'shiqlar",
    prog_6_time: "21:00",
    prog_6_title: "To'y torti",
    prog_6_desc: "Kelin-kuyovning to'y tortini kesish marosimi",
    tag_venue: "To'yxona",
    venue_hall: "KATTA ZAL",
    venue_name: "Guliston to'yxonasi",
    venue_address: "Toshkent sh., Chilonzor tumani, Bunyodkor shoh ko'chasi, 15-uy.",
    venue_landmark: "Mo'ljal: Chilonzor metro bekati yonida",
    btn_yandex: "📍 Yandex Xaritalar",
    btn_google: "🗺️ Google Maps",
    tag_gift: "To'yona",
    gift_intro: "Sizning tashrifingiz biz uchun eng katta sovga. Agar to'yona yubormoqchi bo'lsangiz, quyidagi kartalardan foydalanishingiz mumkin:",
    tab_groom: "KUYOV",
    tab_bride: "KELIN",
    btn_copy_card: "Karta raqamini nusxalash",
    tag_rsvp: "Javob berish",
    rsvp_note: "Iltimos, to'y kunigacha javob bering",
    lbl_name: "Ismingiz:",
    ph_name: "Masalan: Aziz Rahimov",
    lbl_attendance: "Kelishingiz:",
    opt_coming: "Albatta kelaman",
    opt_not_coming: "Afsuski, kela olmayman",
    lbl_guests: "Necha kishi?",
    lbl_wishes: "Tilaklaringiz:",
    ph_wishes: "Kelin-kuyovga ezgu tilaklar...",
    btn_submit_rsvp: "Javobni yuborish",
    outro_title: "Sizni kutamiz!",
    outro_names: "Maqsadjon va Maftunaxon",
    outro_poem: "Sen bilan ko'rindi bu hayotim borligi,\nBaxtimning bag'rida sevgi ifori...\nQadamingizga hasanot!",
    toast_copied: "Karta raqami nusxalandi!",
    toast_submitted: "Rahmat! Javobingiz muvaffaqiyatli qabul qilindi. Sizni to'yimizda kutamiz!"
  },
  uz_cyr: {
    nav_music_on: "Мусиқа",
    nav_music_off: "Ўчирилган",
    seal_badge: "Махсус таклифнома",
    seal_title: "Тўйга тайёргарлик кўраётганлар учун",
    seal_subtitle: "Келин ва куёвнинг бахт тўйига марҳамат!",
    open_btn: "Муҳрни босинг",
    open_hint: "Таклифномани очиш учун босинг",
    ceremony_badge: "Никоҳ тўйи",
    couple_groom: "Мақсаджон",
    couple_and: "ва",
    couple_bride: "Мафтунахон",
    greeting_title: "Ҳурматли меҳмонимиз!",
    greeting_text: "Сизни фарзандларимиз Мақсаджон ва Мафтунахонларнинг никоҳ тўйи маросимига лутфан таклиф этамиз. Қувончли кунимизни сиз билан бирга нишонлашдан мамнун бўламиз.",
    tag_date: "Тўй куни",
    day_name: "Шанба",
    month_year: "Ноябр 2026",
    wedding_time: "соат 17:00 да",
    countdown_title: "Тўйга қадар:",
    label_days: "Кун",
    label_hours: "Соат",
    label_mins: "Дақиқа",
    label_secs: "Сония",
    btn_add_calendar: "📅 Тақвимга қўшиш",
    tag_program: "Тўй дастури",
    prog_1_time: "11:00",
    prog_1_title: "Никоҳ маросими",
    prog_1_desc: "Фақат яқинлар ва қариндошлар учун",
    prog_2_time: "17:00",
    prog_2_title: "Меҳмонларни кутиб олиш",
    prog_2_desc: "Жонли мусиқа садолари остида меҳмонларни кутиб олиш",
    prog_3_time: "18:00",
    prog_3_title: "Келин-куёвнинг кириб келиши",
    prog_3_desc: "Миллий наволар ва карнай-сурнай садолари остида келин-куёвнинг тантанали кириб келиши",
    prog_4_time: "18:30",
    prog_4_title: "Зиёфат ва табриклар",
    prog_4_desc: "Миллий таомлар ва самимий тилаклар",
    prog_5_time: "19:30",
    prog_5_title: "Рақслар ва мусиқа",
    prog_5_desc: "Эстрада хонандалари ижросидаги файзли куй-қўшиқлар",
    prog_6_time: "21:00",
    prog_6_title: "Тўй торти",
    prog_6_desc: "Келин-куёвнинг тўй тортини кесиш маросими",
    tag_venue: "Тўйхона",
    venue_hall: "КАТТА ЗАЛ",
    venue_name: "Гулистон тўйхонаси",
    venue_address: "Тошкент ш., Чилонзор тумани, Бунёдкор шоҳ кўчаси, 15-уй.",
    venue_landmark: "Мўлжал: Чилонзор метро бекати ёнида",
    btn_yandex: "📍 Яндекс Хариталар",
    btn_google: "🗺️ Google Хариталар",
    tag_gift: "Тўёна",
    gift_intro: "Сизнинг ташрифингиз биз учун энг катта совға. Агар тўёна юбормоқчи бўлсангиз, қуйидаги карталардан фойдаланишингиз мумкин:",
    tab_groom: "КУЁВ",
    tab_bride: "КЕЛИН",
    btn_copy_card: "Карта рақамини нусхалаш",
    tag_rsvp: "Жавоб бериш",
    rsvp_note: "Илтимос, тўй кунигача жавоб беринг",
    lbl_name: "Исмингиз:",
    ph_name: "Масалан: Азиз Раҳимов",
    lbl_attendance: "Келишингиз:",
    opt_coming: "Албатта келаман",
    opt_not_coming: "Афсуски, кела олмайман",
    lbl_guests: "Неча киши?",
    lbl_wishes: "Тилакларингиз:",
    ph_wishes: "Келин-куёвга эзгу тилаклар...",
    btn_submit_rsvp: "Жавобни юбориш",
    outro_title: "Сизни кутамиз!",
    outro_names: "Мақсаджон ва Мафтунахон",
    outro_poem: "Сен билан кўринди бу ҳаётим борлиги,\nБахтимнинг бағрида севги ифори...\nҚадамингизга ҳасанот!",
    toast_copied: "Карта рақами нусхаланди!",
    toast_submitted: "Раҳмат! Жавобингиз муваффақиятли қабул қилинди. Сизни тўйимизда кутамиз!"
  }
};

let currentLang = 'uz_lat';

function switchLanguage(lang) {
  currentLang = lang;
  const dict = translations[lang];

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key]) {
      el.innerText = dict[key];
    }
  });

  const nameInput = document.getElementById('guest-name');
  if (nameInput && dict['ph_name']) nameInput.placeholder = dict['ph_name'];

  const wishInput = document.getElementById('guest-wishes');
  if (wishInput && dict['ph_wishes']) wishInput.placeholder = dict['ph_wishes'];

  updateBankCardDisplay();
}

// ==========================================================================
// 2. AUDIO ENGINE (PLAYING THE EXACT VIDEO SONG WITH SYNTH FALLBACK)
// ==========================================================================
class WeddingAudioPlayer {
  constructor() {
    this.isPlaying = false;
    this.audioElement = null;
    this.synthCtx = null;
    this.synthTimer = null;
  }

  init() {
    this.audioElement = document.getElementById('bg-music-audio');
  }

  play() {
    this.init();
    this.isPlaying = true;
    this.updateUI(true);

    if (this.audioElement) {
      this.audioElement.currentTime = 0;
      const playPromise = this.audioElement.play();
      if (playPromise !== undefined) {
        playPromise.catch(err => {
          console.log("Audio autoplay restricted, running Web Audio synth:", err);
          this.playSynth();
        });
      }
    } else {
      this.playSynth();
    }
  }

  pause() {
    this.isPlaying = false;
    this.updateUI(false);
    if (this.audioElement) {
      this.audioElement.pause();
    }
    if (this.synthTimer) {
      clearTimeout(this.synthTimer);
      this.synthTimer = null;
    }
  }

  toggle() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  updateUI(playing) {
    const bars = document.getElementById('sound-bars');
    const label = document.getElementById('music-state-label');
    if (bars) {
      bars.classList.toggle('playing', playing);
      bars.classList.toggle('muted', !playing);
    }
    if (label) {
      label.innerText = playing 
        ? translations[currentLang].nav_music_on 
        : translations[currentLang].nav_music_off;
    }
  }

  playCrackSound() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(170, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(30, ctx.currentTime + 0.18);

      gain.gain.setValueAtTime(0.4, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.22);
    } catch(e) {}
  }

  playSynth() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!this.synthCtx) this.synthCtx = new AudioContext();
      if (this.synthCtx.state === 'suspended') this.synthCtx.resume();

      const notes = [293.66, 349.23, 392.00, 440.00, 392.00, 349.23, 293.66, 349.23, 440.00, 523.25, 587.33, 440.00, 392.00, 293.66];
      let i = 0;

      const step = () => {
        if (!this.isPlaying) return;
        const ctx = this.synthCtx;
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(notes[i], now);

        gain.gain.setValueAtTime(0.01, now);
        gain.gain.exponentialRampToValueAtTime(0.12, now + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.9);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 1.0);

        i = (i + 1) % notes.length;
        this.synthTimer = setTimeout(step, 650);
      };
      step();
    } catch(e) {}
  }
}

const audioPlayer = new WeddingAudioPlayer();

// ==========================================================================
// 3. WAX SEAL OPENING & SCROLL ANIMATION
// ==========================================================================
function openInvitation() {
  audioPlayer.playCrackSound();

  const seal = document.getElementById('wax-seal');
  const cutLine = document.getElementById('seal-cut-line');
  const cord = document.getElementById('golden-cord');
  const burst = document.getElementById('sparkle-burst');
  const sealScreen = document.getElementById('seal-screen');
  const invitationScreen = document.getElementById('invitation-screen');
  const floatingSeal = document.getElementById('floating-seal');

  // 1. Ignite laser burning line
  if (cutLine) cutLine.classList.add('ignite');

  // 2. Split wax seal into A and M
  setTimeout(() => {
    if (seal) seal.classList.add('split');
    if (cord) cord.classList.add('cut');
    if (burst) burst.classList.add('active');
  }, 200);

  // 3. Start romantic wedding audio
  setTimeout(() => {
    audioPlayer.play();
  }, 400);

  // 4. Smooth scroll unroll
  setTimeout(() => {
    if (sealScreen) sealScreen.classList.add('hidden-screen');
    if (invitationScreen) {
      invitationScreen.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      initScrollReveal();
    }
    if (floatingSeal) floatingSeal.style.display = 'flex';
  }, 850);
}

function returnToSeal() {
  const sealScreen = document.getElementById('seal-screen');
  const invitationScreen = document.getElementById('invitation-screen');
  const seal = document.getElementById('wax-seal');
  const cutLine = document.getElementById('seal-cut-line');
  const cord = document.getElementById('golden-cord');
  const floatingSeal = document.getElementById('floating-seal');

  if (seal) seal.classList.remove('split');
  if (cutLine) cutLine.classList.remove('ignite');
  if (cord) cord.classList.remove('cut');
  if (invitationScreen) invitationScreen.classList.remove('active');
  if (sealScreen) sealScreen.classList.remove('hidden-screen');
  if (floatingSeal) floatingSeal.style.display = 'none';

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================================================
// 4. SCROLL REVEAL OBSERVER
// ==========================================================================
function initScrollReveal() {
  const cards = document.querySelectorAll('.reveal-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, {
    threshold: 0.15
  });

  cards.forEach(card => observer.observe(card));
}

// ==========================================================================
// 5. FALLING ROSE PETALS & CELEBRATION PARTICLES
// ==========================================================================
let confettiParticles = [];

function initPetalsCanvas() {
  const canvas = document.getElementById('petals-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const petals = [];
  const petalCount = 26;

  for (let i = 0; i < petalCount; i++) {
    petals.push({
      x: Math.random() * width,
      y: Math.random() * height - height,
      size: Math.random() * 8 + 6,
      speedY: Math.random() * 1.1 + 0.6,
      speedX: Math.random() * 0.7 - 0.35,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 1.8,
      opacity: Math.random() * 0.45 + 0.35,
      isGold: Math.random() > 0.6
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    // Render regular falling rose petals & sparkles
    for (let p of petals) {
      p.y += p.speedY;
      p.x += Math.sin(p.y * 0.008) * 0.8 + p.speedX;
      p.rotation += p.rotSpeed;

      if (p.y > height + 20) {
        p.y = -20;
        p.x = Math.random() * width;
      }

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = p.opacity;

      if (p.isGold) {
        ctx.fillStyle = '#dfb76c';
        ctx.beginPath();
        ctx.arc(0, 0, p.size * 0.35, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.fillStyle = '#f8b4b4';
        ctx.beginPath();
        ctx.ellipse(0, 0, p.size * 0.6, p.size, Math.PI / 4, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    }

    // Render active confetti bursts (RSVP celebrations)
    for (let i = confettiParticles.length - 1; i >= 0; i--) {
      const c = confettiParticles[i];
      c.x += c.vx;
      c.y += c.vy;
      c.vy += 0.2; // gravity
      c.rotation += c.rotSpeed;
      c.opacity -= 0.012;

      if (c.opacity <= 0) {
        confettiParticles.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.translate(c.x, c.y);
      ctx.rotate((c.rotation * Math.PI) / 180);
      ctx.globalAlpha = c.opacity;
      ctx.fillStyle = c.color;
      ctx.fillRect(-c.size / 2, -c.size / 2, c.size, c.size * 0.6);
      ctx.restore();
    }

    requestAnimationFrame(render);
  }

  render();
}

function launchConfettiBurst() {
  const colors = ['#dfb76c', '#fbe6a2', '#ff5964', '#35a7ff', '#ffffff', '#38b000'];
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight * 0.7;

  for (let i = 0; i < 60; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 8 + 4;
    confettiParticles.push({
      x: centerX,
      y: centerY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 5,
      size: Math.random() * 9 + 5,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 15,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: 1
    });
  }
}

// ==========================================================================
// 6. COUNTDOWN TIMER (14-NOYABR 2026, 17:00)
// ==========================================================================
function initCountdown() {
  // Target: November 14, 2026 17:00 (Tashkent Time UTC+5)
  const weddingDate = new Date('2026-11-14T17:00:00+05:00').getTime();

  function update() {
    const now = new Date().getTime();
    let diff = weddingDate - now;
    if (diff < 0) diff = 0;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const dEl = document.getElementById('count-days');
    const hEl = document.getElementById('count-hours');
    const mEl = document.getElementById('count-mins');
    const sEl = document.getElementById('count-secs');

    if (dEl) dEl.innerText = String(days).padStart(2, '0');
    if (hEl) hEl.innerText = String(hours).padStart(2, '0');
    if (mEl) mEl.innerText = String(minutes).padStart(2, '0');
    if (sEl) sEl.innerText = String(seconds).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

// ==========================================================================
// 7. CALENDAR EXPORT (14-NOYABR 2026)
// ==========================================================================
function addToCalendar() {
  const title = "Maqsadjon va Maftunaxonlarning nikoh to'yi";
  const details = "Hurmatli mehmonimiz, sizni baxt to'yimizda kutamiz! Manzil: Guliston to'yxonasi (Katta zal), Toshkent.";
  const location = "Guliston to'yxonasi, Bunyodkor shoh ko'chasi 15-uy, Toshkent";
  const startIso = "20261114T120000Z"; // 17:00 Tashkent = 12:00 UTC
  const endIso = "20261114T180000Z";

  const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startIso}/${endIso}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;

  const icsContent = 
`BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Taklifchi//Wedding Invitation//UZ
CALSCALE:GREGORIAN
BEGIN:VEVENT
SUMMARY:${title}
DESCRIPTION:${details}
LOCATION:${location}
DTSTART:${startIso}
DTEND:${endIso}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute('download', 'Maqsadjon_va_Maftunaxon_14_Noyabr_toyi.ics');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  showToast("Taqvim yuklab olindi va Google Calendar ochilmoqda!");
  setTimeout(() => {
    window.open(googleCalUrl, '_blank');
  }, 600);
}

// ==========================================================================
// 8. TO'YONA (BANK CARDS WITH 3D FLIP)
// ==========================================================================
const cardData = {
  groom: {
    number: "9860 1234 5678 9012",
    holder: "MAQSADJON ALIMOV",
    bank: "IPAK YO'LI BANKI",
    system: "HUMO"
  },
  bride: {
    number: "8600 5432 1098 7654",
    holder: "MAFTUNAXON KARIMOVA",
    bank: "KAPITALBANK",
    system: "UZCARD"
  }
};

let currentCardType = 'groom';

function switchCard(type) {
  if (currentCardType === type) return;
  currentCardType = type;

  document.getElementById('tab-groom').classList.toggle('active', type === 'groom');
  document.getElementById('tab-bride').classList.toggle('active', type === 'bride');

  const cardElement = document.getElementById('active-bank-card');
  if (cardElement) {
    // Trigger 3D flip animation
    cardElement.classList.add('flip-anim');
    setTimeout(() => {
      cardElement.classList.toggle('groom-card', type === 'groom');
      cardElement.classList.toggle('bride-card', type === 'bride');
      updateBankCardDisplay();
    }, 250);

    setTimeout(() => {
      cardElement.classList.remove('flip-anim');
    }, 600);
  } else {
    updateBankCardDisplay();
  }
}

function updateBankCardDisplay() {
  const data = cardData[currentCardType];
  const numEl = document.getElementById('card-display-number');
  const holderEl = document.getElementById('card-display-holder');
  const bankEl = document.getElementById('card-display-bank');
  const systemEl = document.getElementById('card-display-system');

  if (numEl) numEl.innerText = data.number;
  if (holderEl) holderEl.innerText = data.holder;
  if (bankEl) bankEl.innerText = data.bank;
  if (systemEl) systemEl.innerText = data.system;
}

function copyCardNumber() {
  const number = cardData[currentCardType].number.replace(/\s+/g, '');
  const copyBtn = document.getElementById('copy-card-btn');

  navigator.clipboard.writeText(number).then(() => {
    showToast(translations[currentLang].toast_copied);
    if (copyBtn) {
      const origText = copyBtn.innerHTML;
      copyBtn.innerHTML = `✓ Nusxalandi!`;
      setTimeout(() => {
        copyBtn.innerHTML = origText;
      }, 2000);
    }
  }).catch(() => {
    const input = document.createElement('input');
    input.value = number;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    showToast(translations[currentLang].toast_copied);
  });
}

// ==========================================================================
// 9. RSVP (JAVOB BERISH)
// ==========================================================================
let guestCount = 1;

function adjustGuestCount(delta) {
  guestCount += delta;
  if (guestCount < 1) guestCount = 1;
  if (guestCount > 10) guestCount = 10;
  const countEl = document.getElementById('guest-count-display');
  if (countEl) countEl.innerText = guestCount;
}

function selectRadioCard(wrapper) {
  document.querySelectorAll('.radio-card').forEach(c => c.classList.remove('selected'));
  wrapper.classList.add('selected');
  const radio = wrapper.querySelector('input[type="radio"]');
  if (radio) radio.checked = true;
}

function submitRsvp(e) {
  e.preventDefault();
  const name = document.getElementById('guest-name').value.trim();
  const attendance = document.querySelector('input[name="attendance"]:checked').value;
  const wishes = document.getElementById('guest-wishes').value.trim();

  if (!name) {
    showToast(currentLang === 'uz_lat' ? "Iltimos, ismingizni kiriting" : "Илтимос, исмингизни киритинг");
    return;
  }

  const responseObj = {
    name,
    attendance,
    guests: guestCount,
    wishes,
    date: new Date().toISOString()
  };

  try {
    const list = JSON.parse(localStorage.getItem('wedding_rsvps') || '[]');
    list.push(responseObj);
    localStorage.setItem('wedding_rsvps', JSON.stringify(list));
  } catch (err) {}

  // Launch celebration confetti
  launchConfettiBurst();

  showToast(translations[currentLang].toast_submitted);
  document.getElementById('guest-name').value = '';
  document.getElementById('guest-wishes').value = '';
}

// ==========================================================================
// 10. TOAST NOTIFICATION
// ==========================================================================
let toastTimer = null;
function showToast(msg) {
  const toast = document.getElementById('toast-notice');
  if (!toast) return;

  toast.innerText = msg;
  toast.classList.add('show');

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

// ==========================================================================
// 11. INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initPetalsCanvas();
  initCountdown();
  updateBankCardDisplay();

  const audioBtn = document.getElementById('audio-toggle-btn');
  if (audioBtn) {
    audioBtn.addEventListener('click', () => {
      audioPlayer.toggle();
    });
  }

  const waxSeal = document.getElementById('wax-seal');
  if (waxSeal) {
    waxSeal.addEventListener('click', openInvitation);
  }

  const openBtn = document.getElementById('open-envelope-btn');
  if (openBtn) {
    openBtn.addEventListener('click', openInvitation);
  }

  const floatingSeal = document.getElementById('floating-seal');
  if (floatingSeal) {
    floatingSeal.addEventListener('click', returnToSeal);
  }

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      switchLanguage(btn.dataset.lang);
    });
  });

  const calBtn = document.getElementById('add-calendar-btn');
  if (calBtn) calBtn.addEventListener('click', addToCalendar);

  const tabGroom = document.getElementById('tab-groom');
  const tabBride = document.getElementById('tab-bride');
  if (tabGroom) tabGroom.addEventListener('click', () => switchCard('groom'));
  if (tabBride) tabBride.addEventListener('click', () => switchCard('bride'));

  const copyBtn = document.getElementById('copy-card-btn');
  if (copyBtn) copyBtn.addEventListener('click', copyCardNumber);

  const countMinus = document.getElementById('count-minus');
  const countPlus = document.getElementById('count-plus');
  if (countMinus) countMinus.addEventListener('click', () => adjustGuestCount(-1));
  if (countPlus) countPlus.addEventListener('click', () => adjustGuestCount(1));

  const rsvpForm = document.getElementById('rsvp-form');
  if (rsvpForm) rsvpForm.addEventListener('submit', submitRsvp);
});
