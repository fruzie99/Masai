function createBankAccount() {
  let balance = 0; // private variable

  return {
    deposit: function (amount) {
      balance += amount;
      console.log(`Deposited: ${amount}`);
    },
    withdraw: function (amount) {
      if (amount <= balance) {
        balance -= amount;
        console.log(`Withdrawn: ${amount}`);
      } else {
        console.log("Insufficient balance");
      }
    },
    checkBalance: function () {
      console.log(`Current Balance: ${balance}`);
    }
  };
}

// Example Usage
const account = createBankAccount();
account.deposit(500);     // Deposited: 500
account.withdraw(200);    // Withdraw: 200
account.withdraw(400);    // Insufficient balance
console.log(account.balance); // undefined (Privatee)
account.checkBalance();   // Current Balance: 300
