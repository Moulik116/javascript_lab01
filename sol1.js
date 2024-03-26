//Write a program to find max number among two numbers passed in to a function, use ternary operator to find max number.

function findMax(n1,n2){
    return n1>n2?n1:n2;
}

let max=findMax(2,4);
console.log("The maximum number is: "+max);