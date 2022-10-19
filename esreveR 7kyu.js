// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

// (the dedicated builtin(s) functionalities are deactivated)

//answer

function reverse(array) {
    let newarr = []
     for (let i = array.length-1;i>-1;i--){
       newarr.push(array[i])
     }
     return newarr
    }