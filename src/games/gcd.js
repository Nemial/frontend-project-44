import getRandomNumber from '../getRandomNumber.js';
import startGame from '../index.js';

const GAME_DESCRIPTION = 'Find the greatest common divisor of given numbers.';

const getGcd = (firstNumber, secondNumber) => {
  let biggestNumber;
  let smallestNumber;

  if (firstNumber < secondNumber) {
    biggestNumber = secondNumber;
    smallestNumber = firstNumber;
  } else {
    biggestNumber = firstNumber;
    smallestNumber = secondNumber;
  }

  let result;

  for (let i = 1; i <= biggestNumber / 2; i += 1) {
    const canDivideBiggestNumber = biggestNumber % i === 0;
    const canDivideSmallestNumber = smallestNumber % i === 0;
    if (canDivideBiggestNumber && canDivideSmallestNumber) {
      result = i;
    }
  }

  return result;
};

export default () => {
  startGame(GAME_DESCRIPTION, () => {
    const firstNumber = getRandomNumber();
    const secondNumber = getRandomNumber();
    const answer = getGcd(firstNumber, secondNumber);

    return [`${firstNumber} ${secondNumber}`, answer];
  });
};
