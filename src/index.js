import {problem1Solution} from './problem1';
import {problem2Solution} from "./problem2";
import {problem3Solution} from './problem3';
import {problem4Solution} from './problem4'

function breakLine() {
  const hr = document.createElement("hr");
  document.body.appendChild(hr)
}

function title(text) {
  const h3 = document.createElement("h3");
  h3.innerText = text;
  document.body.appendChild(h3);
}

function paragraph(text) {
  const p = document.createElement("p");
  p.innerText = text;
  document.body.appendChild(p);
}

function getRandomArbitrary(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomNumberList() {
  const size = getRandomArbitrary(5, 10);
  const numList = Array.from({length: size}, () => getRandomInt(30));
  return numList;
}

function problem1() {
  title("Ejercicio 1: Suma de todos los números dentro de la lista ");
  const numList = getRandomNumberList();
  const numListText = `[${numList.join(", ")}] = ?`;
  paragraph(numListText);
  const answer = problem1Solution(numList);
  paragraph(answer);
  breakLine();
}


function problem2() {
  title("Ejercicio 2: El primero número es mayor, menor o igual al segundo número.");
  const num1 = getRandomInt(30);
  const num2 = getRandomInt(30);
  const answer = problem2Solution(num1, num2);
  paragraph(`${num1} and ${num2}`);
  paragraph(answer);
  breakLine();
}

function problem3() {
  title("Ejercicio 3: Encuentra el número más grande");
  const numList = getRandomNumberList();
  const answer = problem3Solution(numList);
  const numListText = `[${numList.join(", ")}] = ?`;
  paragraph(numListText);
  paragraph(answer);
  breakLine();
}

function problem4() {
  title("Ejercicio 4: Encuentre cuantos hay de Red y cuantos hay de Blue.");
  const matrix = createMatrix();
  createGrid(matrix);
  const answer = problem4Solution(matrix);
  paragraph(answer);
  breakLine();
}

function createMatrix(){
  const size = getRandomArbitrary(3, 6);
  let matrix = [];
  for (let i = 0; i < size; i++) {
    let aux = [];
    for (let j = 0; j < size; j++) {
      const colorNum =  getRandomArbitrary(1, 3);
      if (colorNum === 1) aux.push("Red");
      else aux.push("Blue");
    }
    matrix.push(aux);    
  }
  return matrix;
}

function createGrid(matrix) {
  const matrixSize = matrix.length;
  const grid = document.createElement("div");
  const autos = Array.from({length: matrixSize}, () => 'auto').join(" ");
  grid.style = `
    display: grid;
    grid-template-columns: ${autos};
    padding: 10px;
    max-width: 309px;`;
  for (let i = 0; i < matrixSize; i++) {
    const auxSize = matrix[i].length;
    for (let j = 0; j < auxSize; j++) {
      const color = matrix[i][j];
      const cell = document.createElement("div");
      cell.innerText = color;      
      grid.appendChild(cell);
    }
  }
  document.body.appendChild(grid);
}

function render(){
  problem1();
  problem2();
  problem3();
  problem4();
}

render();