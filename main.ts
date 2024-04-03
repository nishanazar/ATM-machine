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

if (pinAnswer.pin === myPin) {
  console.log("Correct pin code!!");
}

let operationAns = await inquirer.prompt([
  {
    name: "operation",
    message: "please select option",
    type: "list",
    choices: ["withdraw", "check balance", "fast cash"],
  },
]);
if (operationAns.operation === "withdraw") {
  let amountAns = await inquirer.prompt([
    {
      name: "amount",
      message: "enter your amount: ",
      type: "number",
    },
  ]);
  if (amountAns.amount <= myBalance) {
    myBalance -= amountAns.amount;
    console.log(`your remaining balance is: ${myBalance}`);
  } else {
    console.log("Insufficient Balance!");
  }
} else if (operationAns.operation === "check balance") {
  console.log(`your balance is: ${myBalance}`);
} else if (operationAns.operation === "fast cash") {
  let fastCashAns = await inquirer.prompt([
    {
      name: "fastCash",
      message: "How much amounts you want to fast cash:",
      type: "list",
      choices: [1000, 2000, 5000, 10000],
    },
  ]);
  myBalance -= fastCashAns.fastCash;
  console.log(`your remaining amount is: ${myBalance}`);
} else {
  console.log("Incorrect pin number");
}
