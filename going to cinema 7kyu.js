// John wants to know how many times he must go to the cinema so that the final result of System B, when rounded up to the next dollar, will be cheaper than System A.

// The function movie has 3 parameters: card (price of the card), ticket (normal price of a ticket), perc (fraction of what he paid for the previous ticket) and returns the first n such that

// ceil(price of System B) < price of System A.

//answer

function movie(card, ticket, perc) {
    let prevTicket = ticket*perc
    let a = ticket
    let b = card
    let ticketNums = 0
    while (a<Math.ceil(b)){
      a = ticketNums * ticket
      b += prevTicket
      prevTicket = prevTicket *perc
      ticketNums+=1
    }
  return ticketNums-1
};