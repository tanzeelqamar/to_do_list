import inquirer from "inquirer"
let toDo =[]
let condition="true"
while (condition)
{
let toDoQuestions = await inquirer.prompt(
    [{
        name: "firstQuestion",
        type: "input",
        message: "what would you like to add  in your to dos?",
    },
    {
        name: "secondQuestion",
        type: "confirm",
        message: "would you like to add more to dos?",
        default: "true",
    }
]);
toDo.push (toDoQuestions.firstQuestion);
console.log(toDo);
condition = toDoQuestions.secondQuestion;
}
