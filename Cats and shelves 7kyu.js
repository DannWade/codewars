// An infinite number of shelves are arranged one above the other in a staggered fashion.
// The cat can jump up to 3 shelves at the same time: from shelf 1 to shelf 2 or 4 (the cat cannot climb on the shelf directly above its head), according to the illustration:

//                  ┌────────┐
//                  │-6------│
//                  └────────┘
// ┌────────┐       
// │------5-│        
// └────────┘  ┌─────► OK!
//             │    ┌────────┐
//             │    │-4------│
//             │    └────────┘
// ┌────────┐  │
// │------3-│  │     
// BANG!────┘  ├─────► OK! 
//   ▲  |\_/|  │    ┌────────┐
//   │ ("^-^)  │    │-2------│
//   │ )   (   │    └────────┘
// ┌─┴─┴───┴┬──┘
// │------1-│
// └────────┘
// Input
// Start and finish shelf numbers (always positive integers, finish no smaller than start)

// Task
// Find the minimum number of jumps to go from start to finish

// Example
// Start 1, finish 5, then answer is 2 (1 => 4 => 5 or 1 => 2 => 5)


//PREP
//P: two positive integers representing the start and finish
//R: positive integer that represents minimum number of jumps
//E: Start 1, finish 5, then answer is 2 (1 => 4 => 5 or 1 => 2 => 5)
//P: define a variable that represents the number of jumps
    // if the difference between finish and start is equal to or greater than 3...
    //jumps is equal to the quotient plut the remainder of (finish-start)/3
    //if difference between finish and start is not equal to or greater than 3 ...
    // jumps equals the difference between finish and start
    //return number of jumps

    let solution = (start, finish) => ((finish - start)>=3) ? (Math.floor((finish-start)/3) + ((finish-start)%3)): (finish - start)  


