//Write a program consisting of two files main.js and math.js. The math.js file should contain basic mathematics functions like add, substract, multiply, divide. In the main.js file make use of those functions and print the results by passing appropriate input values.

const math = require('./math');

const n1=10;
const n2=5;

console.log(`${n1} + ${n2} = ${math.add(n1,n2)}`);
console.log(`${n1} - ${n2} = ${math.subtract(n1,n2)}`);
console.log(`${n1} * ${n2} = ${math.multiply(n1,n2)}`);

if(math.divide(n1,n2)==-1){
    console.log('Cannot divide by zero');
}
else{
    console.log(`${n1} / ${n2} = ${math.divide(n1,n2)}`); 
}