// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

const rps = (p1, p2) => {
    return (p1=="scissors" && p2=="paper") || 
      (p1=="paper" && p2=="rock") || 
      (p1=="rock" && p2=="scissors")? "Player 1 won!" : 
    (p2=="scissors" && p1=="paper") || 
      (p2=="paper" && p1=="rock") || 
      (p2=="rock" && p1=="scissors") ? "Player 2 won!" : 
    "Draw!"
  };