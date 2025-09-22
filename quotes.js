// quotes.js
let quotes = [
  "Believe in yourself!",
  "Stay consistent and keep coding.",
  "Every expert was once a beginner.",
  "Push your limits every day.",
  "Code, Commit, Push, Repeat."
];

function getRandomQuote() {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

console.log("💡 Quote of the Day: " + getRandomQuote());
