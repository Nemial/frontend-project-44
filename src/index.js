import readlineSync from 'readline-sync';

const GAME_ROUND = 3;

const startGame = (gameDescription, getQuestionAndAnswer, getUserAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log(gameDescription);

  for (let i = 0; i < GAME_ROUND; i += 1) {
    const [question, answer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = getUserAnswer('Your answer: ');

    if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

const getRandomNumber = (min = 0, max = 1000) => Math.floor(Math.random() * (max - min + 1))
  + min;

export default startGame;
export { getRandomNumber };
