import getRandomNumber from '../helpers.js';
import startGame from '../index.js';

const GAME_DESCRIPTION = 'Find the greatest common divisor of given numbers.';

const getGcd = (firstNumber, secondNumber) => {
  const iterationCount = firstNumber < secondNumber ? secondNumber : firstNumber;

  let result;

  for (let i = 1; i <= iterationCount / 2; i += 1) {
    const canDivideFirstNumber = firstNumber % i === 0;
    const canDivideSecondNumber = secondNumber % i === 0;
    if (canDivideFirstNumber && canDivideSecondNumber) {
      result = i;
    }
  }

  return result;
};

const getAnswerAndQuestion = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const answer = getGcd(firstNumber, secondNumber);

  return [`${firstNumber} ${secondNumber}`, answer];
};

export default () => {
  startGame(GAME_DESCRIPTION, getAnswerAndQuestion);
};
