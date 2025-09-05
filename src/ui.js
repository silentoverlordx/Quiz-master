// src/ui.js
// 🎨 Reusable UI utilities for Quiz Master Pro

// ✅ Confetti celebration
export function showConfetti(particleCount = 120) {
  if (typeof confetti !== "undefined") {
    confetti({
      particleCount,
      spread: 80,
      origin: { y: 0.6 }
    });
  }
}

// ✅ Play button click sound
const clickSound = new Audio("https://cdn.pixabay.com/download/audio/2022/03/15/audio_207876fb60.mp3?filename=button-124476.mp3");

export function playClick() {
  clickSound.currentTime = 0;
  clickSound.play();
}

// ✅ Fade-up animation on scroll
export function initScrollAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));
}

// ✅ Loading shimmer for placeholders
export function addShimmer(el) {
  el.classList.add("animate-pulse", "bg-gray-700", "rounded");
}

// ✅ Show toast message
export function showToast(message, type = "info") {
  const toast = document.createElement("div");
  toast.textContent = message;
  toast.className =
    "fixed bottom-5 right-5 px-4 py-2 rounded-lg shadow-lg text-white z-50 " +
    (type === "success"
      ? "bg-green-500"
      : type === "error"
      ? "bg-red-500"
      : "bg-indigo-500");

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 500);
  }, 3000);
}

