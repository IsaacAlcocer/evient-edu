import {problem1Solution} from './problem1';

function getRandomArbitrary(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function render(){
  const size = getRandomArbitrary(5, 10);
  const numList = Array.from({length: size}, () => getRandomInt(30));
  const numListText = `[${numList.join(", ")}] = ?`;
  const textDisplay = document.createElement('div');
  textDisplay.innerText = numListText;
  textDisplay.className = "text-display";
  const answerDisplay = document.createElement('div');
  answerDisplay.innerText = problem1Solution(numList);
  answerDisplay.className = "answer-display";
  document.body.appendChild(textDisplay);
  document.body.appendChild(answerDisplay);
}

render();