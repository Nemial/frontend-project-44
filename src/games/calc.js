import getRandomNumber from '../helpers.js';
import startGame from '../index.js';

const GAME_DESCRIPTION = 'What is the result of the expression?';

const getExpressionResult = (operator, firstOperand, secondOperand) => {
  let result;

  switch (operator) {
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
    case '*':
      result = firstOperand * secondOperand;
      break;
    default:
      result = 0;
      console.log(`Undefined operation symbol ${operator}`);
  }

  return result;
};

const getExpressionData = () => {
  const operationSymbols = ['+', '-', '*'];
  const operationIndex = getRandomNumber(0, operationSymbols.length - 1);
  const operationSymbol = operationSymbols[operationIndex];

  const firstOperand = getRandomNumber(0, 450);
  const secondOperand = getRandomNumber(0, 450);

  const expressionResult = getExpressionResult();

  return [`${firstOperand} ${operationSymbol} ${secondOperand}`, expressionResult];
};

export default () => {
  startGame(GAME_DESCRIPTION, getExpressionData);
};
