var number = 0; // counter for age
var myAge = 8; // my age

console.log("Silly counting program for ex3");
while (number <= myAge) {
    number++;
    console.log("Age=" + number);
    if ((number >= myAge / 2) && (number <= myAge / 3/4)){
        number++;
        continue;
    }
    console.log("Age=" + number);
}
console.log("I'm outtaa here!");
