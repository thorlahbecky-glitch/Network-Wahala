function climbStairs(totalSteps) {
  let first = 1;
  let second = 2;
  let count = 3;

 if (totalSteps === 1) return 1;
 if (totalSteps === 2) return 2;

 while (count <= totalSteps) {
 let next = first + second;
first = second;
 second = next;
    count++;
 }

 return second;
}

console.log(climbStairs(5));
