// Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0


//answer





function mostFrequentItemCount(collection) {
    let count = 0
    let newarr = collection.sort((a,b)=>a-b)
    if (collection.length != 0){
      let firstCount = 1
      newarr.forEach((x,i)=>{
        if(x === newarr[i+1]){
          firstCount++
        } else{
          if(firstCount > count){
            count = firstCount
          }
          firstCount = 1
        }
    })
      } else{
        count = 0
      }
    return count
  }