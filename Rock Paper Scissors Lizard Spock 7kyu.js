function rpsls(pl1,pl2){
    let sciLose = ['rock', 'spock'] 
    let rockLose = ['paper','spock']
    let paperLose = ['scissors','lizard']
    let spockLose = ['lizard', 'paper']
    let lizLose = ['rock','scissors']
  if (pl1 == pl2){
    return 'Draw!'
  } else if (
    (pl1 == 'rock' && !rockLose.includes(pl2)) ||
    (pl1 == 'scissors' && !sciLose.includes(pl2)) ||
    (pl1 == 'paper' && !paperLose.includes(pl2)) ||
    (pl1 == 'spock' && !spockLose.includes(pl2)) ||
     (pl1 == 'lizard' && !lizLose.includes(pl2)) 
      ){
    return 'Player 1 Won!'
    }else{
    return 'Player 2 Won!'
    }
  }