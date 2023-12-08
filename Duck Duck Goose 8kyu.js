// The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.

function duckDuckGoose(players, goose) {
    return players[(goose-1)%players.length].name
  }

  