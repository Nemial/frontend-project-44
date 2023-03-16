import getRandomNumber from '../helpers.js';
import startGame from '../index.js';

const GAME_DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getAnswerAndQuestion = () => {
  const question = getRandomNumber();
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  startGame(GAME_DESCRIPTION, getAnswerAndQuestion);
};
