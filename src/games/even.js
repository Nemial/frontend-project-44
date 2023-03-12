import startGame from '../index.js';
import getRandomNumber from './getRandomNumber.js';

const GAME_DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

export default () => {
  startGame(GAME_DESCRIPTION, () => {
    const question = getRandomNumber();
    const answer = isEven(question) ? 'yes' : 'no';
    return [question, answer];
  });
};
