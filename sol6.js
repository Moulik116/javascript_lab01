//Write a program to calculate sum of all even numbers from 1 to 100 using while loop.

let i=1;
sum=0;
while(i<=100){
    if(i%2==0){
        sum+=i;
    }
    i++;
}

console.log(`sum of all even numbers from 1 to 100 is ${sum}`);