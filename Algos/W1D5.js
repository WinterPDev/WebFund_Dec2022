// var fruit1 = "apples";
// var fruit2 = "oranges";

// fruit2 = fruit1;

// console.log(fruit2 + " and " + fruit1);


// var fruit1 = "apples";
// var fruit2 = "oranges";

// var temp = fruit1; // temp is a common name for this
// fruit1 = fruit2; // Oranges and Oranges
// fruit2 = temp; // Fruit2 is now Apples

// console.log(fruit2 + " and " + fruit1);



// var fruitList =
//     [
//         'Pear',
//         'Strawberries',
//         'Peaches',
//         'Apricots'
//     ];

// console.log(fruitList[1])


// var start = 0;
// // Start of the Loop
// var end = 12;
// Value used to evaluate when it ends

// while (start < end) { // Runs the code below until it resolves to False

//     console.log("start: " + start + ", end: " + end);
//     // 0 12

//     start += 2; // 2 4 6
//     end -= 2;   // 10 8 6
// }

// While loops are used when we don't know how many loops we'll need.
// For loops are used when we know the start and end absolutely. 


function swap(arr) {

    for (var i = 0; i < arr.length / 2; i++) {
        var temp = arr[i];

        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - 1 - i] = temp
    }

    return arr
}

console.log(swap([1, 2, 3, 4, 5, 6]))