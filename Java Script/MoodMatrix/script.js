const quotes = {
 happy: [
  "Happiness is contagious 😊",
  "Choose joy every day",
  "Keep shining bright ✨",
  "Good vibes only 😄",
  "Find joy in little things",
  "Smile, it's your superpower",
  "Be happy, be you 💛",
  "Radiate positivity",
  "Life is better when you laugh",
  "Stay cheerful and kind"
],

sad: [
  "This too shall pass 🌈",
  "You are not alone",
  "Better days are coming",
  "It's okay to feel this way",
  "Every storm runs out of rain",
  "Healing takes time 💙",
  "You matter more than you know",
  "Take it one step at a time",
  "Your story isn't over",
  "Stay strong, brighter days ahead"
],

focus: [
  "Stay sharp and consistent",
  "Small steps lead to big success",
  "Focus creates results",
  "Do it now, not later",
  "Consistency is key 🔑",
  "Eliminate distractions",
  "Work hard in silence",
  "Stay committed to your goals",
  "Progress over perfection",
  "Keep pushing forward 🚀"
],

chill: [
  "Slow down and unwind 🌿",
  "Peace begins with a deep breath",
  "Take a break, you deserve it",
  "Let go and relax",
  "Enjoy the present moment",
  "Calm mind, happy life",
  "Breathe in peace, breathe out stress",
  "Rest and recharge ⚡",
  "Stay calm and centered",
  "Life is meant to be enjoyed"
]
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