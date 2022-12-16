// Given two Arrays in which values are the power of each soldier, return true if you survive the attack or false if you perish.

// CONDITIONS

// Each soldier attacks the opposing soldier in the same index of the array. The survivor is the number with the highest value.
// If the value is the same they both perish
// If one of the values is empty(different array lengths) the non-empty value soldier survives.
// To survive the defending side must have more survivors than the attacking side.
// In case there are the same number of survivors in both sides, the winner is the team with the highest initial attack power. If the total attack power of both sides is the same return true.
// The initial attack power is the sum of all the values in each array.


//PREP
//P: array of positive integers
//R: true if the defenders have more survivors than the attackers. false if not
//E: define variable holding attackers survivors
    // define variable holding defenders survivors
    // define longest array with number of longest array variable
    // initiate for loop that iterates through each array and compares which integer is larger between two arrays
    // add to respective varaible
    // return true if defenders survivors is larger than attackers

    //answer

    function hasSurvived(attackers, defenders){
        let defendersSur = 0
        let attackerSur = 0
        let arrayLength = 0
        if(attackers.length>defenders.length){
          arrayLength = attackers.length
        }else{
          arrayLength = defenders.length
        }
        for(let i=0; i<arrayLength;i++){
          if(attackers[i]>defenders[i]){
            attackerSur++
          }else if (defenders[i]>attackers[i]){
            defendersSur++
          }
        }
        if(attackerSur>defendersSur){
          return false
        } else if (defendersSur>attackerSur){
          return true
        }else{
          if(defenders.reduce((accum,x)=>accum+=x,0) > attackers.reduce((accum,x)=> accum+=x,0) || defenders.reduce((accum,x)=>accum+=x,0) == attackers.reduce((accum,x)=> accum+=x,0)){
            return true
          }else{
            return false
          }
        }
      }
      