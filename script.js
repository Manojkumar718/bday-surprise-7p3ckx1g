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
