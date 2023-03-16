import getRandomNumber from '../helpers.js';
import startGame from '../index.js';

const GAME_DESCRIPTION = 'What number is missing in the progression?';

const generateProgression = () => {
  const startNumber = getRandomNumber();

  const step = getRandomNumber(1, 5);

  const length = getRandomNumber(5, 10);

  const result = [];

  for (let i = 0; i < length; i += 1) {
    result[i] = startNumber + (i * step);
  }

  return result;
};

const getAnswerAndQuestion = () => {
  const progression = generateProgression();
  const hiddenItemIndex = getRandomNumber(0, progression.length - 1);
  const hiddenChar = '..';
  const [answer] = progression.splice(hiddenItemIndex, 1, hiddenChar);
  return [progression.join(' '), answer];
};

export default () => {
  startGame(GAME_DESCRIPTION, getAnswerAndQuestion);
};
