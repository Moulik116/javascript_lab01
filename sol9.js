//Write a program to create an array of 5 cities e.g. "Nagpur","Bhopal","Delhi","Udaipur" and accept user input into a variable and print the array index if input value exists in array else print "Not Found".

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const cities = ["Nagpur", "Bhopal", "Delhi", "Udaipur", "Mumbai"];

rl.question('Enter a city name: ', (userInput) => {
    const index = cities.indexOf(userInput);

    if(index==-1){
        console.log('Not Found');
    }
    else{
        console.log(`The city '${userInput}' is found at index ${index}.`)
    }

    rl.close();
});