
const readline = require("readline");

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter number of seconds to countdown: ", (time) => {
  let counter = parseInt(time);

  console.log(`Countdown started for ${counter} seconds...`);
  
  let timer = setInterval(() => {
    console.log(`Remaining: ${counter} seconds`);
    counter--;

    if (counter < 0) {
      clearInterval(timer);
      console.log("Countdown Complete!");
      rl.close();
    }
  }, 1000);

  // CHECK STOP KEY using setTimeout repeatedly
  function checkKey() {
    rl.question("Press 's' to stop countdown: ", (key) => {
      if (key.toLowerCase() === 's') {
        clearInterval(timer);
        console.log("Countdown Stopped by User!");
        rl.close();
      } else {
        setTimeout(checkKey, 500);  
      }
    });
  }
  checkKey();
});
