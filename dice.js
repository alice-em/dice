module.exports = (numberOfDice, numberOfSides) => {
  numberOfDice = Number(numberOfDice);
  sides = Number(numberOfSides);
  var total = 0;
  function dice(sides) {
    return Math.floor(Math.random() * sides + 1);
  }
  for (var i = 0; i < numberOfDice; i++) {
    total += dice(numberOfSides);
  }
  return total;
}
