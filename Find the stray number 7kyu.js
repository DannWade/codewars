function stray(numbers) {
    //parameter: array
    //return: integer
    //example: [1, 1, 2] ==> 2
    //psudo: filter the list for the first item in the list. If the length of the list is greater than 1 then return a filtered list where the array is filtered with a parameter that is not that number
    return numbers.filter((x)=>x==numbers[0]).length == 1 ? numbers[0] : numbers.filter((x)=>x!=numbers[0])[0]
  }