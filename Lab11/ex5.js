var values = ["2", "-3", "asdf", "-3.1456", "5"];

function isNonNegInt(stringToCheck, returnErrors = false) {
    errors = []; // assume no errors at first
    if (Number(stringToCheck) != stringToCheck) errors.push('Not a number!'); // Check if string is a number value
    if (stringToCheck < 0) errors.push('Negative value!'); // Check if it is non-negative
    if (parseInt(stringToCheck) != stringToCheck) errors.push('Not an integer!'); // Check that it is an integer


       return returnErrors ? errors : (errors.length == 0) //ternary = if then else built into one line
    }


console.log("*************");
function callback(item, index) {
    errorsReturned = isNonNegInt(item, true).join("||")
    console.log("String \'" + item + "\' is " + isNonNegInt(item, true).join("||"));
    if (errorsReturned.length == 0) {
        console.log("String \" + item + "/' is valid');
    } else {
        console.log("String \" + item + " + errorsReturned);
    }
}

values.forEach(callback); 

// 5b

values.forEach(callback);

values.forEach(function (item, index) {
    errrorsReturned = isNonNegInt(item,true).join("||");
    if (errrorsReturned.length == 0) {
        console.log("String \'" + item + "\' is valid");
    } else {
        console.log("String \'" + item + "\' is " + errrorsReturned);
    }
}
);