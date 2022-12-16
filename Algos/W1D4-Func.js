
var x = 5;

// Functions ignore standard flow of code
// They run asynchronous, or "out of sync", and only run when called.

// Declaring a function data type, giving it a name, and then setting any parameters in the parenthesis.

function setX(newValue) {
    x = newValue; // x is set to 15
    // newValue ONLY EXISTS in this function's scope.
}

console.log(x); // 5
setX(15);
// When calling a function, we use it by name and end in parenthesis.


// When I execute the function, 
// newValue in that function will be equal to 15

console.log(x);


var x = 5;

function addToX(amount) {

    // console.log(x + amount);
    return x + amount;
    // Anything past a return line, does not execute.
    console.log("hello there");
}

console.log(x); // 5
var result = addToX(-10); // var result = -5
console.log(result);  // -5
console.log(x);   // 5


console.log(addToX(-10))  // -5

