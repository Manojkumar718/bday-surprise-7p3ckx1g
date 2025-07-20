document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bg-music");
  const playButton = document.getElementById("play-music-btn");

  if (music) {
    music.volume = 0.3; // Set volume only if audio exists
  }

  if (playButton) {
    playButton.addEventListener("click", () => {
      if (music) {
        music.play().then(() => {
          console.log("✅ Music started playing.");
          playButton.style.display = "none";
        }).catch((err) => {
          alert("Music play failed. Please try again.");
          console.error("🚫 Playback error:", err);
        });
      }
    });
  }
});
// Falling strawberries
const NUM_STRAWBERRIES = 25;

for (let i = 0; i < NUM_STRAWBERRIES; i++) {
  const strawberry = document.createElement("img");
  strawberry.src = "images/strawberry.png";
  strawberry.classList.add("falling-strawberry");

  strawberry.style.left = Math.random() * 100 + "vw";
  strawberry.style.animationDelay = Math.random() * 5 + "s";
  document.body.appendChild(strawberry);
}
// 🎂 Cupcake Surprise
document.getElementById("cupcake").addEventListener("click", () => {
  const msg = document.getElementById("surprise-msg");
  msg.classList.remove("hidden");

  // Confetti burst (simple emoji confetti)
  for (let i = 0; i < 30; i++) {
    const confetti = document.createElement("div");
    confetti.textContent = ["🎉", "✨", "🎊", "🍬"][Math.floor(Math.random() * 5)];
    confetti.className = "confetti";
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.animationDelay = `${Math.random()}s`;
    document.body.appendChild(confetti);

    // Remove after animation
    setTimeout(() => confetti.remove(), 3000);
  }
});
