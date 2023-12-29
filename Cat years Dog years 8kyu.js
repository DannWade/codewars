// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

var humanYearsCatYearsDogYears = function(humanYears) {
    let cat = humanYears == 1 ? 15 : humanYears == 2 ? 24 : 24 + (4* (humanYears -2))
    let dog = humanYears == 1 ? 15 : humanYears == 2 ? 24 : 24 + (5* (humanYears -2))
    return [humanYears,cat,dog];
  }