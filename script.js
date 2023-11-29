function atm() {
  // Här används funktionen parseFloat, varför då?
  // Vad gör prompt?

  let choice = parseFloat(
    prompt(
      "Welcome to the ATM. 1. Get balance 2. Deposit 3. Withdrawal 4. Get name of the account 5. Exit"
    )
  );

  switch (choice) {
    case 1:
      account.getBalance();
      break;

    case 2:
      account.deposit();
      break;

    case 3:
      account.withdrawal();
      break;

    case 4:
      account.getAccountName();
      break;

    case 5:
      account.exitAccount();
      break;

    default:
      alert("Invalid choice, please try again");
  }
}

atm();
