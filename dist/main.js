(()=>{"use strict";function e(){const e=document.createElement("hr");document.body.appendChild(e)}function n(e){const n=document.createElement("h3");n.innerText=e,document.body.appendChild(n)}function t(e){const n=document.createElement("p");n.innerText=e,document.body.appendChild(n)}function o(e,n){return parseInt(Math.random()*(n-e)+e)}function r(e){return Math.floor(Math.random()*e)}function u(){const e=o(5,10);return Array.from({length:e},(()=>r(30)))}function c(e){if(null==e)return;const n=e.length,t=document.createElement("div"),o=Array.from({length:n},(()=>"auto")).join(" ");t.style=`\n    display: grid;\n    grid-template-columns: ${o};\n    padding: 10px;\n    max-width: 309px;`;for(let o=0;o<n;o++){const n=e[o].length;for(let r=0;r<n;r++){const n=e[o][r],u=document.createElement("div");u.innerText=n,t.appendChild(u)}}document.body.appendChild(t)}!function(){n("Ejercicio 1: Suma de todos los números dentro de la lista ");const o=u();t(`[${o.join(", ")}] = ?`),t(function(e){let n=0;for(let t=0;t<e.length;t++)n+=e[t];return n}(o)),e()}(),function(){n("Ejercicio 2: El primero número es mayor, menor o igual al segundo número.");const o=r(30),u=r(30),c=function(e,n){return e<n?"el primero es menor":e>n?"el primero es mayor":"son iguales"}(o,u);t(`${o} and ${u}`),t(c),e()}(),function(){n("Ejercicio 3: Encuentra el número más grande");const o=u(),r=function(e){let n=e[0];for(let t=1;t<e.length;t++)e[t]>n&&(n=e[t]);return n}(o);t(`[${o.join(", ")}] = ?`),t(r),e()}(),function(){n("Ejercicio 4: Encuentre cuantos hay de Red y cuantos hay de Blue.");const r=function(){const e=o(3,6);let n=[];for(let t=0;t<e;t++){let t=[];for(let n=0;n<e;n++)1===o(1,3)?t.push("Red"):t.push("Blue");n.push(t)}return n}();c(r);t(function(e){let n=0,t=0;for(let o=0;o<e.length;o++){const r=e[o];for(let e=0;e<r.length;e++)"Red"===r[e]?n+=1:t+=1;console.log(r)}return`Red: ${n}, Blue: ${t}`}(r)),e()}(),n("Ejercicio 5: Matrix 1 - Primera fila con unos"),c(function(){let e=[];for(let n=0;n<3;n++){let t=[];for(let e=0;e<3;e++)0===n?t.push("1"):t.push("0");e.push(t)}return e}()),e(),n("Ejercicio 6: Matrix 2 - Primer fila con unos"),c(function(){let e=[];for(let n=0;n<3;n++){let t=[];for(let e=0;e<3;e++)1===n?t.push("1"):t.push("0");e.push(t)}return e}()),e(),n("Ejercicio 6: Matrix 3 - Ultima fila con unos"),c(function(){let e=[];for(let n=0;n<3;n++){let t=[];for(let e=0;e<3;e++)2===n?t.push("1"):t.push("0");e.push(t)}return e}()),e(),n("Ejercicio 8: Matrix 4 - Primer columna con unos"),c(function(){let e=[];for(let n=0;n<3;n++){let n=[];for(let e=0;e<3;e++)0===e?n.push("1"):n.push("0");e.push(n)}return e}()),e(),n("Ejercicio 9: Matrix 5 - Segunda columna con unos"),c(function(){let e=[];for(let n=0;n<3;n++){let n=[];for(let e=0;e<3;e++)1===e?n.push("1"):n.push("0");e.push(n)}return e}()),e(),n("Ejercicio 10: Matrix 6 - Ultima columna con unos"),c(function(){let e=[];for(let n=0;n<3;n++){let n=[];for(let e=0;e<3;e++)2===e?n.push("1"):n.push("0");e.push(n)}return e}()),e(),n("Ejercicio 11: Matrix 7 - Diagonal descendiente con unos"),c(function(){let e=[];for(let n=0;n<3;n++){let t=[];for(let e=0;e<3;e++)n===e?t.push("1"):t.push("0");e.push(t)}return e}()),e(),n("Ejercicio 12: Matrix 8 - Diagonal ascendiente con unos"),c(function(){const e=[];for(let n=0;n<3;n++){const t=[];for(let e=0;e<3;e++)n--==e++?t.push("1"):t.push("0");e.push(t)}return e}()),e()})();