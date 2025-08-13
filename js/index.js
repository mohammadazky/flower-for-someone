// ===== SCRIPT INDEX.JS FINAL =====
const title = document.querySelector('.title')
const text = `Hallo Amelia Puspita Sari Sang Pemilik Bunga Sejagat Raya`.split('')

// Animasi teks buatan kamu
title.style.display = 'flex'
title.style.flexWrap = 'wrap'
title.style.justifyContent = 'center'
title.style.gap = '0.5rem'

for (let index = 0; index < text.length; index++) {
  if (text[index] !== ' ') {
    title.innerHTML += `<span>${text[index]}</span>`
  } else {
    title.innerHTML += `<span style='width: 1rem'></span>`
  }
}

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3;
  element.style.animationDelay = `${randomDelay}s`;
});

// ===== Musik & Fade Out Tambahan =====
let audio;

function playMusic() {
  if (!audio) {
    audio = new Audio("lagu.mp3"); // ganti sama file musik kamu
    audio.loop = true;
    audio.volume = 0.6;
    audio.currentTime = sessionStorage.getItem("musicTime") || 0;
    audio.play();

    // Simpan posisi musik tiap detik
    audio.addEventListener("timeupdate", () => {
      sessionStorage.setItem("musicTime", audio.currentTime);
    });
  }
}

function startTransition(e) {
  e.preventDefault(); // biar link ga langsung pindah

  playMusic();
  document.body.style.transition = "opacity 1.5s ease";
  document.body.style.opacity = "0";

  setTimeout(() => {
    window.location.href = "flower.html";
  }, 1500);
}

// Klik tombol "Open"
document.querySelector(".btn").addEventListener("click", startTransition);
