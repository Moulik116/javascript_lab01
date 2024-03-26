//Write a program to print table of 3 like below.

for (let i = 1; i <= 10; i++) {
    let result = '';
    let sum = 0;
    for (let j = 1; j <= i; j++) {
      sum += 3;
      result += j === 1 ? '3' : '+3';
    }
    result += '=' + sum;
    console.log(`3*${i}=${result}`);
  }