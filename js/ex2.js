const r = Number(prompt("Enter the circle radius:"));
const circle ={
    radius: r,
    circumference(){
        return (circle.radius * 2 * 3.14);
    },
    area(){
        return (circle.radius * circle.radius * 3.14);
    }
};

circle.radius=r;
console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);