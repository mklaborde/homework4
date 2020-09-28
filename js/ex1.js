num1=Number(prompt("Please enter the 1st number:"));
num2=Number(prompt("Please enter the 2nd number:"));
operator=prompt("Please enter an operator +, -, * or /");

switch (operator)
{
    case "+":
        console.log(`${num1} ${operator} ${num2} = ${num1 + num2}`);
        break;
    case "-":
        console.log(`${num1} ${operator} ${num2} = ${num1 - num2}`);
        break;
    case "*":
        console.log(`${num1} ${operator} ${num2} = ${num1 * num2}`);
        break;
    case "/":
        console.log(`${num1} ${operator} ${num2} = ${num1 / num2}`);
        break;
    default:
        console.log("Something went wrong, try again");
        break;
}