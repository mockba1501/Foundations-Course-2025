let grades = [50,89,75,84,99];
let sum = 0;

for(let i = 0; i<5; i++)
{
    sum += grades[i];
}

console.log(sum);
let result = sum / 5;
console.log(result);
/*
//Grade Calculater
const grade = prompt("Enter the grade");
console.log(grade);
// Grade 100 - 90 A, 89 - 80 B, else 60

// Use if () 
if(grade >= 90)
{
    console.log("A");
} else if (grade >= 80)
{
    console.log("B");
} else if (grade >= 70)
{
    console.log("C");
} else 
{
     console.log("F");
}
*/