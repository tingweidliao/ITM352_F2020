var number = 1; // counter for age
var myAge = 8; // my age

console.log("Silly counting program for ex2");
while (number <= myAge) {
    console.log("Age=" + number);
    if (number > myAge / 2){
        break;
    }
    number ++;
}
console.log("I'm outtaa here!");
