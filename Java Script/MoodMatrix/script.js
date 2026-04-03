const quotes = {
  happy: ["Stay positive!", "Smile more 😄"],
  sad: ["Tough times don’t last", "You are stronger than you think 💪"],
  focus: ["Stay focused!", "Discipline beats motivation"],
  chill: ["Relax and breathe 🌿", "Enjoy the moment"]
};

const music = {
  happy: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  sad: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  focus: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  chill: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
};

function changeMood() {
  const mood = document.getElementById("moodSelect").value;
  const body = document.body;
  const quoteBox = document.getElementById("quoteBox");
  const musicPlayer = document.getElementById("bgMusic");

  body.className = mood;

  // Random quote
  const randomQuote = quotes[mood][Math.floor(Math.random() * quotes[mood].length)];
  quoteBox.innerText = randomQuote;

  // Play music
  musicPlayer.src = music[mood];
  musicPlayer.play();
}