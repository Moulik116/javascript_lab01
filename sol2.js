//Write a program to accept a number from user input and print whether the number is even or odd.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number: ', (inputNumber) => {
    const Number = parseInt(inputNumber);
if(Number%2==0){
    console.log(Number+' is even');
}
else{
    console.log(Number+' is odd');
}
rl.close();
});
