var number = 1; // counter for age
var myAge = 26; // my age

console.log("Silly counting program for ex2");
while (number++ < myAge) {
    if (number > (myAge/2)) {
        process.exit()
        console.log("Don't you dare ask me how old I am!");
    }
console.log(number);
}