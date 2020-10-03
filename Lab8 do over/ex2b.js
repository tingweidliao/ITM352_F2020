var number = 1; // counter for age
var myAge = 26; // my age

console.log("Silly counting program for ex2");
while (number++ < myAge) {
    if (number > (myAge/2) && (number < myAge*3/4)) {
        console.log("No age zone!!");
        continue;
    }
console.log(number);
}