
import inquirer from "inquirer";

const answer: {
    sentance: string
} = await inquirer.prompt([{
    name: "sentance",
    type: "input",
    message: "Enter paragragh for word count"
}])

const word= answer.sentance.trim().split(" ")
console.log(`Your paragraph word are ${word.length}`)