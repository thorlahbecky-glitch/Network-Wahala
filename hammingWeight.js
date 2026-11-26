function hammingWeight(number) {
  let count = 0;

while (number > 0) {
let rem = number % 2;
count += rem;
number = (number - rem) / 2;
 }

  return count;
}

console.log(hammingWeight(1001));


console.log(" ");
