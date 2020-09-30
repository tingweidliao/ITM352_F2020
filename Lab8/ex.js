// Sum the numbers up to a specified integer 
// Date: 30 Sep 2020
// Author: David Liao

var target = 5; // limit of the sum of numbers
var counter = 1; // counter for the loop
var sum = 0; // total of the numbers added together

console.log(`Welcome to the counting program!`);
while (counter <= target) {
    sum += counter;
    console.log(`Sum${sum}`);
    counter++;

}

console.log (`Final Sum=${sum}`);



sum=0;
console.log(`Second try with for loop`)
for (counter=5; counter >0; counter --) {
    sum += counter;
    console.log(`Sum${sum}`);
}
console.log (`Final Sum=${sum}`);