word=prompt("Please enter a word:");
word=word.toLowerCase();
vowels=0;
palindrome=true;
for (i=0; i<word.length; i++)
{
    if (word[i] == "a" || word[i] == "e" || word[i] == "i" || word[i] == "o" || word[i] == "u" || word[i] == "y")
    {
        vowels++;
    }
}
if (word.length % 2 == 0)
{
    middle=(word.length)/2;    
}
else
{
    middle=(word.length-1)/2;
}
for(i=0; i<middle; i++)
{
    if (palindrome && word[i] == word[((word.length-1)-i)])
    {
        palindrome=true;
    }
    else
    {
        palindrome=false;
    }
}
if (palindrome==true)
{
    console.log(`${word} has ${vowels} vowels and is a palindrome`);
}
else
{
    console.log(`${word} has ${vowels} vowels and is not a palindrome`);
}
