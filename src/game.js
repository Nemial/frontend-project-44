import readlineSync from 'readline-sync';

const isEven = (number) => number % 2 === 0;

const getRandomNumber = (min = 0, max = 1000) => Math.floor(Math.random() * (max - min + 1))
  + min;

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const gameRound = 3;

  for (let i = 0; i < gameRound; i += 1) {
    const randomNumber = getRandomNumber();
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};