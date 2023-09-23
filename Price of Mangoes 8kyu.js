// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

function mango(quantity, price){
    let total = 0
    for (let i =1; i<=quantity; i++){
      if(i%3==0){
        total+=0
      }else{
        total+=price
      }
    }
    return total
  }