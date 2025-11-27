

console.log("Begin");

Promise.resolve().then(() => {
  console.log("Promise Task"); 
});

setTimeout(() => {
  console.log("Timeout Task"); 
}, 0);

console.log("End");
