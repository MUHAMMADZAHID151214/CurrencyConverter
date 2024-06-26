#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    PKR: 278.42,
    AFG: 72.51,
    SINGPD: 1.36,
    IND: 83.44
};
let ques1 = await inquirer.prompt([{
        message: "Enter from currency : ",
        name: "from",
        type: "list",
        choices: ["USD", "PKR", "AFG", "SINGPD", "IND"]
    },
    {
        message: "Enter to currency : ",
        name: "to",
        type: "list",
        choices: ["USD", "PKR", "AFG", "SINGPD", "IND"]
    },
    {
        message: "Enter amount : ",
        name: "amount",
        type: "number"
    }]);
let fromamount = currency[ques1.from];
let toamount = currency[ques1.to];
let userinputamount = ques1.amount;
let baseamount = userinputamount / fromamount;
let convertedamount = baseamount * toamount;
console.log(Math.floor(convertedamount));
