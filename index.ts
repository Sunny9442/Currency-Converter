import inquirer from "inquirer";
import chalk from "chalk"

console.log(chalk . red . bold("\n Welcome Sunny World (CURRENCY CONVERTER) \n"))

let Exchange_Rate : any ={
    "USD" : 1 , //American Currency
    "EUR" : 0.9 , //European Currency
    "JYP" : 113 , //Japnese Currency
    "CAD" : 1.3 , //Canada Currency
    "AUD" : 1.65 , //Austrailia Currency
    "PKR" : 278.12 , //Pakistan Currency
}

let answer = await inquirer .prompt ([
    {
        message : "Select a currency to convert from" , 
        name : "from_currency",
        type : "list",
        choices : ["USD" , "EUR" , "JYP" , "CAD" , "AUD" , "PKR"]
    },
    {
        message : "Select a currency to convert into",
        name : "to_currency",
        type : "list", 
        choices : ["USD" , "EUR" , "JYP" , "CAD" , "AUD" , "PKR"]
    },
    {
        message : "Enter the amount to convert",
        name : "amount",
        type : "input",
    },
])

let from_amount = Exchange_Rate [answer.from_currency]
let to_amount = Exchange_Rate [answer.to_currency]
let Enter_amount = answer . amount

let base_converter = Enter_amount / from_amount
let Currency_Converter = base_converter * to_amount

console.log(`Currency Converter ${chalk.yellowBright.bold (Currency_Converter . toFixed (1))}`)