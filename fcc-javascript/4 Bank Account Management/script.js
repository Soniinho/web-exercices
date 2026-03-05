class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(deposit_amount) {
    if (deposit_amount <= 0) {
      return "Deposit amount must be greater than zero.";
    }

    this.transactions.push({ type: "deposit", amount: deposit_amount });
    this.balance += deposit_amount;

    return `Successfully deposited $${deposit_amount}. New balance: $${this.balance}`;
  }

  withdraw(withdraw_amount) {
    if (withdraw_amount <= 0 || withdraw_amount > this.balance) {
      return "Insufficient balance or invalid amount.";
    }

    this.transactions.push({ type: "withdraw", amount: withdraw_amount });
    this.balance -= withdraw_amount;

    return `Successfully withdrew $${withdraw_amount}. New balance: $${this.balance}`;
  }

  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  listAllDeposits() {
    const values = this.transactions
      .filter((t) => t.type === "deposit")
      .map((t) => t.amount);

    return `Deposits: ${values.join(",")}`;
  }

  /* sem map
    listAllDeposits() {
    const deposit_array = this.transactions.filter(
      (_, index) => this.transactions[index].type == "deposit",
    );

    let lines = ["Deposits: "];

    for (let value of deposit_array) {
      if (deposit_array[0] == value) {
        lines[0] += value.amount;
      } else {
        lines.push(`${value.amount}`);
      }
    }

    return lines.join(",");
  }
  */

  listAllWithdrawals() {
    const values = this.transactions
      .filter((t) => t.type === "withdraw")
      .map((t) => t.amount);

    return `Withdrawals: ${values.join(",")}`;
  }
}

const myAccount = new BankAccount();
myAccount.deposit(1500);
myAccount.deposit(20);
myAccount.withdraw(5);
myAccount.deposit(30);
myAccount.withdraw(11);
myAccount.checkBalance();
myAccount.listAllDeposits();
myAccount.listAllWithdrawals();
