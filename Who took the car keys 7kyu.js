// You woke up from a massive headache and can't seem to find your car key. You find a note with a clue that says:

// "If you're reading this then I have left the state and am well on my way to freedom. Just to make things interesting, I have also provided something for you to track me with. Let the chase begin..."

// Given an array of binary numbers, figure out and return the culprit's message to find out who took the missing car key.

function whoTookTheCarKey(message) {
    let dec = message.map((x,i)=> parseInt(x,2))
    let done = dec.map((j,k)=>String.fromCharCode(j))
    return done.join('')
  }