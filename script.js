
// Flip 3D Card
const card = document.querySelector(".card");
card.addEventListener("click", () => {
  card.classList.toggle("is-flipped");
});

// Play birthday song
function playSong() {
  const song = document.getElementById("birthdaySong");
  song.play();
}
