function switchItUp(number){
    //parameters: integer
    //return: string
    //example: 1 -> "One"
    //pseudo: create an object and insert key values pairs where the keys are the integers and the strings are the values. return the string by dynamically accessing the object via the key.
      let nums = {0:"Zero",1:"One",2:"Two",3:"Three",4:"Four",5:"Five",6:"Six",7:"Seven",8:"Eight",9:"Nine"}
      return nums[number]
    }