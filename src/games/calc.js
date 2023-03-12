import startGame from '../index.js';
import getRandomNumber from './getRandomNumber.js';

const GAME_DESCRIPTION = 'What is the result of the expression?';

const getExpressionData = () => {
  const operationSymbols = ['+', '-', '*'];
  const firstIndex = 0;
  const lastIndex = operationSymbols.length - 1;
  const operationIndex = getRandomNumber(firstIndex, lastIndex);
  const operationSymbol = operationSymbols[operationIndex];

  const minNumber = 0;
  const maxNumber = 450;
  const firstOperand = getRandomNumber(minNumber, maxNumber);
  const secondOperand = getRandomNumber(minNumber, maxNumber);

  let expressionResult = 0;

  switch (operationSymbol) {
    case '+':
      expressionResult = firstOperand + secondOperand;
      break;
    case '-':
      expressionResult = firstOperand - secondOperand;
      break;
    case '*':
      expressionResult = firstOperand * secondOperand;
      break;
    default:
      console.log(`Undefined operation symbol ${operationSymbol}`);
  }

  return [`${firstOperand} ${operationSymbol} ${secondOperand}`, expressionResult];
};

export default () => {
  startGame(GAME_DESCRIPTION, getExpressionData);
};
