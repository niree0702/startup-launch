// Flip card on click
const card = document.querySelector(".card");
card.addEventListener("click", () => {
  card.classList.toggle("is-flipped");
});

// Play music
function playSong() {
  const song = document.getElementById("birthdaySong");
  song.play();
}
