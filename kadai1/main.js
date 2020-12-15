'use strict'

const Fizz = 3;
const Buzz = 5;

for (let i = 1; i < 100; i++) {
  if (i % Fizz === 0 && i % Buzz === 0) {
    console.log(`FizzBuzz ${i}`);
  } else if (i % Fizz === 0 && i % Buzz !== 0) {
    console.log(`Fizz ${i}`);
  } else if (i % Fizz !== 0 && i % Buzz === 0) {
    console.log(`Buzz ${i}`);
  }
}