// Ronny the robot is watching someone perform the Cups and Balls magic trick. The magician has one ball and three cups, he shows Ronny which cup he hides the ball under (b), he then mixes all the cups around by performing multiple two-cup switches (arr). Ronny can record the switches but can't work out where the ball is. Write a programme to help him do this.

// Rules:

// There will only ever be three cups.
// Only two cups will be swapped at a time.
// The cups and their switches will be refered to by their index in a row of three, beginning at one. So [[1,2]] means the cup at position one, is swapped with the cup at position two.
// Arr will be an array of integers 1 - 3 organised in pairs.
// There won't be any empty sub-arrays.
// If arr is just an empty array b should be returned.
// Examples:

// (b) = 2, (arr) = [[1,2]]

// The ball is under cup number : 1

// (b) = 1, (arr) = [[2,3],[1,2],[1,2]]

// The ball is under cup number : 1


//PREP
//P: b is an integer that represents one of three cups that the ball can be under. Arr is an array of integers 1-3 in organized pairs
//R: retrun an integer that represents the final position of the ball
//E: b=2, arr = ([1,2],[1,3]), returns 3
//P: function ballPosition(b,arr){
//     define position variable
//     initiate a for loop for as many switches found in the switch Array
//     check if the balls position is found within the switch
//     if in the switch, update the position variable with the balls new position
//     after completing the loop, return the final position of the ball
// } 

//answer
function cupAndBalls(b, arr){
    let pos = b
    for (let i = 0; i<arr.length;i++){
      if(arr[i][0]==pos){
        pos = arr[i][1]
      }else if (arr[i][1]==pos){
        pos = arr[i][0]
      }
    }
    return pos
  };