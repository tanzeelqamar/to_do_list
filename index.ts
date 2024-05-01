import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() *6+1);
const answer = await inquirer.prompt([
    {name : "userguessednumber",
    type: "number",
    message : "please guess a number between 1-6",
}]);
if(
    answer.userguessednumber===randomNumber
) {
console.log("Congratulations you guessed right number")}
else{
    console.log("Sorry! wrong guess");
}