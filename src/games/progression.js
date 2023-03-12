import getRandomNumber from '../getRandomNumber.js';
import startGame from '../index.js';

const GAME_DESCRIPTION = 'What number is missing in the progression?';

const generateProgression = () => {
  const startNumber = getRandomNumber();

  const minStep = 1;
  const maxStep = 5;
  const step = getRandomNumber(minStep, maxStep);

  const minLength = 5;
  const maxLength = 10;
  const length = getRandomNumber(minLength, maxLength);

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
