function isPalindromeNumber(number) {
if (number < 0) {
return false;
}

let originalNumber = number;
let reversed = 0;

while (number > 0) {
let lastDigit = number % 10;

reversed = reversed * 10 + lastDigit;

number = (number - lastDigit) / 10;
}

if (reversed === originalNumber) {
return true;
} 
else {
return false;
}
}

console.log(isPalindromeNumber(121));

console.log(" ");
