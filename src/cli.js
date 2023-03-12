import { question as questionLine } from 'readline-sync';

const greet = () => {
  console.log('Welcome to the Brain Games!');
  const userName = questionLine('May I have your name? ');
  console.log(`Hello, ${userName}`);
};

export default greet;
