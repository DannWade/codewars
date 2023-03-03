// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

var greet = function(name) {
    let firstLet = name.split('')[0].toUpperCase()
    let restLet = name.split('').slice(1).join('').toLowerCase()
    return `Hello ${firstLet + restLet}!`
    };