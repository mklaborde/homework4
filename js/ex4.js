input="";
temp="";
values=[];
i=0;
while (temp!="stop")
{
    input=prompt("Please enter a word:");
    temp=input.toLowerCase();
    if (temp!="stop")
    {
        values[i]=input;
        i++;
    }
}
if (values.length < 1)
{
    console.log("No words to display, stop was the first word entered");
}
else
{
    console.log("You entered the following words:");
    for (i=0; i<values.length; i++)
    {
        console.log(`${values[i]}`);
    }
}
