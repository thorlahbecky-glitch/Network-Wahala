function countPrimes(upperLimit) {
let primeCount = 0;

let number = 2;

while (number < upperLimit) {
let isPrime = true;
let divisor = 2;

while (divisor < number) {
if (number % divisor === 0) {
isPrime = false;
}
divisor = divisor + 1;
}


if (isPrime === true) {
primeCount += 1;
}

number += 1;
}

return primeCount;
}

console.log(countPrimes(10));

console.log(" ");

