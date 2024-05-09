import {problem1Solution} from './problem1';
import {problem1BSolution} from './problem1b';
import {problem1CSolution} from './problem1c';
import {problem2Solution} from "./problem2";
import {problem3Solution} from './problem3';
import {problem3BSolution} from './problem3b';
import {problem3CSolution} from './problem3C';
import {problem4Solution} from './problem4';
import {problem5Solution} from './problem5';
import {problem6Solution} from './problem6';
import {problem7Solution} from './problem7';
import {problem8Solution} from './problem8';
import {problem9Solution} from './problem9';
import {problem10Solution} from './problem10';
import {problem11Solution} from './problem11';
import {problem12Solution} from './problem12';

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

function problem1B() {
  title("Ejercicio 1b: Suma de todos los números dentro de la lista; MAP ");
  const numList = getRandomNumberList();
  const numListText = `[${numList.join(", ")}] = ?`;
  paragraph(numListText);
  const answer = problem1BSolution(numList);
  paragraph(answer);
  breakLine();
}

function problem1C() {
  title("Ejercicio 1c: Suma de todos los números dentro de la lista; REDUCE ");
  const numList = getRandomNumberList();
  const numListText = `[${numList.join(", ")}] = ?`;
  paragraph(numListText);
  const answer = problem1CSolution(numList);
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

function problem3B() {
  title("Ejercicio 3b: Encuentra el número más grande; MAP");
  const numList = getRandomNumberList();
  const answer = problem3BSolution(numList);
  const numListText = `[${numList.join(", ")}] = ?`;
  paragraph(numListText);
  paragraph(answer);
  breakLine();
}

function problem3C() {
  title("Ejercicio 3c: Encuentra el número más grande; REDUCE");
  const numList = getRandomNumberList();
  const answer = problem3CSolution(numList);
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

function problem5() {
  title("Ejercicio 5: Matrix 1 - Primera fila con unos");
  const matrix = problem5Solution();
  createGrid(matrix);
  breakLine();
}

function problem6() {
  title("Ejercicio 6: Matrix 2 - Segunda fila con unos");
  const matrix = problem6Solution();
  createGrid(matrix);
  breakLine();
}

function problem7() {
  title("Ejercicio 7: Matrix 3 - Ultima fila con unos");
  const matrix = problem7Solution();
  createGrid(matrix);
  breakLine();
}

function problem8() {
  title("Ejercicio 8: Matrix 4 - Primer columna con unos");
  const matrix = problem8Solution();
  createGrid(matrix);
  breakLine();
}

function problem9() {
  title("Ejercicio 9: Matrix 5 - Segunda columna con unos");
  const matrix = problem9Solution();
  createGrid(matrix);
  breakLine();
}

function problem10() {
  title("Ejercicio 10: Matrix 6 - Ultima columna con unos");
  const matrix = problem10Solution();
  createGrid(matrix);
  breakLine();
}

function problem11() {
  title("Ejercicio 11: Matrix 7 - Diagonal descendiente con unos");
  const matrix = problem11Solution();
  createGrid(matrix);
  breakLine();
}

function problem12() {
  title("Ejercicio 12: Matrix 8 - Diagonal ascendiente con unos");
  const matrix = problem12Solution();
  createGrid(matrix);
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
  if (matrix == null) return;
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
  paragraph("Hello World");
  problem1();
  problem1B();
  problem1C();
  problem2();
  problem3();
  problem3B();
  problem3C();
  problem4();
  problem5();
  problem6();
  problem7();
  problem8();
  problem9();
  problem10();
  problem11();
  problem12();
}
render();