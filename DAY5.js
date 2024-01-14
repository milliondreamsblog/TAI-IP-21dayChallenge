// day5.js


let favoriteColors = ["Blue", "Green", "Red", "Yellow", "Purple"];


console.log("Accessing element at index 2:", favoriteColors[2]);

favoriteColors.push("Orange"); // Adding at the end
favoriteColors.unshift("Pink"); // Adding at the beginning
console.log("Array after adding elements:", favoriteColors);

// • Removing elements from the array (using methods like pop, shift, or splice).
favoriteColors.pop(); // Removing the last element
favoriteColors.shift(); // Removing the first element
console.log("Array after removing elements:", favoriteColors);

// Displaying the modified array using console.log() after each operation
