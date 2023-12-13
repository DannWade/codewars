// Write a simple regex to validate a username. Allowed characters are:

// lowercase letters,
// numbers,
// underscore
// Length should be between 4 and 16 characters (both included).

function validateUsr(username) { 
    if (username == ""){return false}
    let n = username.match(/([a-z]|[0-9]|[_])/g).length 
    return username.match(/\s/g) ? false :n >= 4 && n<=16 ? true : false
  }