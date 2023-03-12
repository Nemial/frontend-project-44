import { question as questionLine } from 'readline-sync';

const GAME_ROUND = 3;

const startGame = (gameDescription, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = questionLine('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log(gameDescription);

  for (let i = 0; i < GAME_ROUND; i += 1) {
    const [question, answer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = questionLine('Your answer: ');

    if (userAnswer !== String(answer)) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
