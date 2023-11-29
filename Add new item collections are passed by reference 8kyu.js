// Add an item to the list:

// AddExtra method adds a new item to the list and returns the list. The new item can be any object, and it does not matter. (lets say you add an integer value, like 13)

// In our test case we check to assure that the returned list has one more item than the input list. However the method needs some modification to pass this test.

//PREP
//Parameter: array
//Return: augmented new array
//Examples: [1,2] =>[1,2,3]
//Psudo: create new array, add to that array and return it
function addExtra( listOfNumbers ){
    return listOfNumbers.map((x)=>x=x).push(1)
}