function reverseInteger(number) {
let negativeNum = false;
if (number < 0) {
negativeNum = true;
number = number * -1;
}

let reversed = 0;

while (number > 0) {
let lastDigit = number % 10;

reversed = reversed * 10 + lastDigit;

number = (number - lastDigit) / 10;
}

if (negativeNum === true) {
return reversed * -1;
}

return reversed;
}

console.log(reverseInteger(123));
console.log(reverseInteger(-456));


console.log(" ");

