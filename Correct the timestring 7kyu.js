// A new task for you!

// You have to create a method, that corrects a given time string.
// There was a problem in addition, so many of the time strings are broken.
// Time is formatted using the 24-hour clock, so from 00:00:00 to 23:59:59.
// Examples
// "09:10:01" -> "09:10:01"  
// "11:70:10" -> "12:10:10"  
// "19:99:99" -> "20:40:39"  
// "24:01:01" -> "00:01:01"  
// If the input-string is null or empty return exactly this value! (empty string for C++) If the time-string-format is invalid, return null. (empty string for C++)

//PREP
//P: string
//R: string with time in 24 hour format
//E: "11:70:10" -> "12:10:10"
//P: handle the null and empty string cases 
  //split the string with delimiter ":"
  //create a function that converts the seconds and minutes
  //create a function that converts the hours
  //join the new array and return

  function timeCorrect(timestring) {
    if (timestring == ''){return""}
    if (timestring == null || timestring.split(':').length != 3 || !Number.isInteger(+timestring.split(':').reduce((accum,x)=>accum += +x,0))){return null}
    let arr = timestring.split(':').map((x,i)=> x = +x)
    function minSec(index){
      if(arr[index]/60 >= 1){
          arr[index] -= 60
          arr[index-1] +=1
        } else if(arr[index] < 0){
          arr[index] +=60
        }
      }
    function hours(index){
      if (arr[index]/24 >=1){
        arr[index] = arr[index]%24
      }
    } 
    minSec(2)
    minSec(1)
    hours(0)
    return arr.map((x,i)=>x = String(x).padStart(2,'0')).join(':')
  }