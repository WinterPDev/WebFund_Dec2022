
// // What is a Variable?
// // A variable is something to store information.

// var a = 25; // The = is an assignment operator!
// a = a - 13; // a - 13

// console.log(a / 2) // 6

// a = "hello";
// // When we use the addition operator with strings in Javascript, it concates the strings (Puts them together)
// console.log(a + " hello"); // "hello hello"

for (
    var i = 0; // Declared Variable for our Start
    i < 10;    // Declare when the loop should end.
    i++        // ++ operator, adds 1 and defines the variable i = i + 1
) {
    console.log(i);
    i = i + 3;
}

console.log("outside of the loop " + i);

