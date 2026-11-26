function mySqrt(number) {
for (let num = 0; num * num <= number; num++) {
 if ((num + num) * (num + 1) > number) {
  return num;
   }
  }
}

console.log(mySqrt(8));
