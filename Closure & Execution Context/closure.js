//  Closure-Based Counter Implementation

function createCounter() {
  let count = 0; // Private variable (not accessible outside function)

  return {
    increment: function () {
      count++;
      console.log("Current count:", count);
    },
    decrement: function () {
      count--;
      console.log("Current count:", count);
    },
    getCount: function () {
      console.log("Current count:", count);
    }
  };
}


const counter = createCounter();
counter.increment();   //  Current count: 1
counter.increment();   //  Current count: 2
counter.decrement();   //  Current count: 1
counter.getCount();    //  Current count: 1

// Multiple counters demonstration
const counter1 = createCounter();
const counter2 = createCounter();

counter1.increment();  //Current count: 1
counter1.increment();  // Current count: 2

counter2.increment();  // Current count: 1 (independent of counter1)
counter2.decrement();  // Current count: 0
