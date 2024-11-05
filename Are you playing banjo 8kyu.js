function areYouPlayingBanjo(name) {
    // parameter: string
    //return: string
    //example: "Adam", "Adam does not play banjo"
    //pseudo: use a ternary operation where if the first letter of the name is r, then return a string indicating the name is playing the banjo, if not then return the name is not playing the banjo
    
    return name.toLowerCase().split('')[0] == 'r' ? `${name} plays banjo` : `${name} does not play banjo` 
  }