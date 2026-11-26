function isHappy(number) {
let tries = 0;


while (number !== 1 && tries < 20) {
let sum = 0;


while (number > 0) {
let lastDigit = number % 10;
sum = sum + (lastDigit * lastDigit);
number = (number - lastDigit) / 10;
}

number = sum;
tries = tries + 1;
}

if (number === 1) {
return true;
} 
else {
return false;
}
}

console.log(isHappy(19));
console.log(isHappy(2));
