// Your task is to create userlinks for the url, you will be given a username and must return a valid link.

function generateLink(user) {
    let ending = encodeURIComponent(user)
    return `http://www.codewars.com/users/${ending}`
  }