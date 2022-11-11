// To celebrate the start of the Rio Olympics (and the return of 'the Last Leg' on C4 tonight) this is an Olympic inspired kata.

// Given a string of random letters, you need to examine each. Some letters naturally have 'rings' in them. 'O' is an obvious example, but 'b', 'p', 'e', 'A', etc are all just as applicable. 'B' even has two!! Please note for this kata you can count lower case 'g' as only one ring.

// Your job is to count the 'rings' in each letter and divide the total number by 2. Round the answer down. Once you have your final score:

// if score is 1 or less, return 'Not even a medal!'; if score is 2, return 'Bronze!'; if score is 3, return 'Silver!'; if score is more than 3, return 'Gold!';

// Dots over i's and any other letters don't count as rings.

// answer

function olympicRing(a){
    let letters = {a:1,b:1,d:1,e:1,g:1,o:1,p:1,q:1,A:1,B:2,D:1,O:1,P:1,Q:1,R:1,T:0,}
    let score = a.match(/[abdegopqABDOPQR]/g)
    if(score== null){
      score = 0
    } else{
      score = score.reduce((accum,x)=> accum += letters[x],0)
    }
    let int = Math.floor(score/2) 
    if (int <= 1){
        return 'Not even a medal!'
      } else if(int == 2){
        return 'Bronze!'
      } else if (int ==3){
        return 'Silver!'
      }else{
        return 'Gold!'
      }