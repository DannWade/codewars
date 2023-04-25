// You need to create a function, helloWorld, that will return the String Hello, World! without actually using raw strings. This includes quotes, double quotes and template strings. You can, however, use the String constructor and any related functions.

// You cannot use the following:

// "Hello, World!"
// 'Hello, World!'
// `Hello, World!`


//PREP
//P: no parameters
//R: string 'Hello! World'
//E: function  executes and returns 'Hello! World'
//P: hold the unicode value of each character in 'Hello World' within an array
    // use the reduce method to iterate through each unicode,adding the text value to the accumulator
    //return the value produced from the reduce method

    const helloWorld = () => {
        let c = String.fromCharCode(parseInt(43,16))
        let f = String.fromCharCode(parseInt(46,16))
        let r = [65,6+c,6+c,6+f,2+c,20,57,6+f,72,6+c,64,21]
        return r.reduce((acc,x)=>acc += (String.fromCharCode(parseInt(x,16))),String.fromCharCode(parseInt(48,16)))
      };