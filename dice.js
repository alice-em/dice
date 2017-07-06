module.exports = (numberOfDice, sides) => {
  numberOfDice = Number(numberOfDice);
  sides = Number(sides);
  var total = 0;
  function dice(sides) {
    return Math.floor(Math.random() * sides + 1);
  }
  for (var i = 0; i < numberOfDice; i++) {
    total += dice(sides);
  }
  return total;
}
