num1=parseInt(((Math.random())*100)+1);
guess=0;
guesscount=0;
console.log(`Testing: ${num1}`);
while (guess!=num1)
{
    guesscount++;
    guess=Number(prompt("Guess a number between 1 and 100:"));
    if (num1==guess)
    {
        console.log(`Congrats, you guessed it after ${guesscount} attempts!`);
    }
    else if (guess>num1)
    {
        console.log(`Nope, guess lower`);
    }
    else
    {
        console.log (`Nope, guess higher`);
    }
}