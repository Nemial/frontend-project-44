import getRandomNumber from '../getRandomNumber.js';
import startGame from '../index.js';

const GAME_DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const getAnswerAndQuestion = () => {
  const question = getRandomNumber();
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  startGame(GAME_DESCRIPTION, getAnswerAndQuestion);
};
