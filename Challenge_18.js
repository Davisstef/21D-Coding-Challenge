const chooseLunchWinner = (listOfChoices) => {
  var winner = {};
  for (let i = 0; i < listOfChoices.length; i++) {
    if (winner.hasOwnProperty(listOfChoices[i])) {
      winner[listOfChoices[i]] = winner[listOfChoices[i]] + 1;
    } else {
      winner[listOfChoices[i]] = 1;
    }
  }
  var Key = "";
  var Value = 0;
    for (const [key, value] of Object.entries(winner)) {
      if (value > Value) {
        Value = value;
        Key = key;
      }
    }
    return Key;
  };