// countdown.js
function countdown(seconds) {
  let interval = setInterval(() => {
    console.log(seconds);
    seconds--;
    if (seconds < 0) {
      clearInterval(interval);
      console.log("⏰ Time's up!");
    }
  }, 1000);
}

countdown(5); // counts down from 5 to 0
