 checkPerfectNumber(number) {
 let sum = 0;

 for (let num = num; num < number; num++) {
  if (number % num === 0) {
            sum = sum + num;
        }
    }

    if (sum === number) {
        return true;
    } else {
        return false;
    }
}

console.log(checkPerfectNumber(28));
