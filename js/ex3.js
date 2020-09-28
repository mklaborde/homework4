const values = [3, 11, 7, 2, 9, 10];
total=0;
for(i=0;i<values.length;i++)
{
    total=total+values[i];
}
console.log(`The total of values is ${total}`);
console.log(`The min of values is ${Math.min(...values)}`);
console.log(`The max of values is ${Math.max(...values)}`);