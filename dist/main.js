(()=>{"use strict";function e(){const e=document.createElement("hr");document.body.appendChild(e)}function n(e){const n=document.createElement("h3");n.innerText=e,document.body.appendChild(n)}function t(e){const n=document.createElement("p");n.innerText=e,document.body.appendChild(n)}function o(e,n){return parseInt(Math.random()*(n-e)+e)}function r(e){return Math.floor(Math.random()*e)}function c(){const e=o(5,10);return Array.from({length:e},(()=>r(30)))}n("Ejercicio 1: Suma de todos los números dentro de la lista "),t(`[${c().join(", ")}] = ?`),t(0),e(),function(){n("Ejercicio 2: El primero número es mayor, menor o igual al segundo número.");t(`${r(30)} and ${r(30)}`),t("?"),e()}(),n("Ejercicio 3: Encuentra el número más grande"),t(`[${c().join(", ")}] = ?`),t(-1),e(),n("Ejercicio 4: Encuentre cuantos hay de Red y cuantos hay de Blue."),function(e){const n=e.length,t=document.createElement("div"),o=Array.from({length:n},(()=>"auto")).join(" ");t.style=`\n    display: grid;\n    grid-template-columns: ${o};\n    padding: 10px;\n    max-width: 309px;`;for(let o=0;o<n;o++){const n=e[o].length;for(let r=0;r<n;r++){const n=e[o][r],c=document.createElement("div");c.innerText=n,t.appendChild(c)}}document.body.appendChild(t)}(function(){const e=o(3,6);let n=[];for(let t=0;t<e;t++){let t=[];for(let n=0;n<e;n++)1===o(1,3)?t.push("Red"):t.push("Blue");n.push(t)}return n}()),t("Red: 0, Blue: 0"),e()})();