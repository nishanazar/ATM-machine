
import inquirer from "inquirer";

let myBalance = 10000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "enter your pin",
    type: "number",
  },
]);

if (pinAnswer.pin === 1234) {
  console.log("Correct pin code!!");

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "please select option",
      type: "list",
      choices: ["withdraw", "check balance", "funds transfer"],
    },
  ]);

  if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "enter your amount",
        type: "number",
      },
    ]);

    if (amountAns.amount < myBalance) {
      myBalance -= amountAns.amount;
      console.log(`your remaining balance is: ${myBalance}`);
    } else {
      console.log("Insufficient balance");
    }
  } else if (operationAns.operation === "check balance") {
    console.log(`your balance is: ${myBalance}`);
  } else if (operationAns.operation === "funds transfer") {
    let transfer = await inquirer.prompt([
      {
        name: "funds",
        message: "money transfer",
        type: "list",
        choices: ["to any MCB account", "to any other bank account"],
      },
    ]);   

    if (transfer.funds == "to any MCB account") {
      console.log("you sucessfuly login");
    }
    if (transfer.funds == "to any other bank account") {
      console.log("please input account passward");
    }
  }
} else {
  console.log("Incorrect pin number");
}
