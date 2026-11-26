fconst isPowerOfTwo = function(number) {
if (number < 1) {
return false;
}
while (number % 2 === 0) {

number = number / 2;

}
if (number === 1) {

return "true"
}
return false;
}

console.log(isPowerOfTwo (8));
