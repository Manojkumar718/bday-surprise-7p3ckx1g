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
