<<<<<<< HEAD
(()=>{"use strict";function n(){const n=document.createElement("hr");document.body.appendChild(n)}function e(n){const e=document.createElement("h3");e.innerText=n,document.body.appendChild(e)}function t(n){const e=document.createElement("p");e.innerText=n,document.body.appendChild(e)}function o(n,e){return parseInt(Math.random()*(e-n)+n)}function r(n){return Math.floor(Math.random()*n)}function c(){const n=o(5,10);return Array.from({length:n},(()=>r(30)))}!function(){e("Ejercicio 1: Suma de todos los números dentro de la lista ");const o=c();t(`[${o.join(", ")}] = ?`),t(function(n){let e=0;for(let t=0;t<n.length;t++)e+=n[t];return e}(o)),n()}(),function(){e("Ejercicio 2: El primero número es mayor, menor o igual al segundo número.");const o=r(30),c=r(30),l=function(n,e){return n<e?"el primero es menor":n>e?"el primero es mayor":"son iguales"}(o,c);t(`${o} and ${c}`),t(l),n()}(),function(){e("Ejercicio 3: Encuentra el número más grande");const o=c(),r=function(n){let e=n[0];for(let t=1;t<n.length;t++)n[t]>e&&(e=n[t]);return e}(o);t(`[${o.join(", ")}] = ?`),t(r),n()}(),function(){e("Ejercicio 4: Encuentre cuantos hay de Red y cuantos hay de Blue.");const r=function(){const n=o(3,6);let e=[];for(let t=0;t<n;t++){let t=[];for(let e=0;e<n;e++)1===o(1,3)?t.push("Red"):t.push("Blue");e.push(t)}return e}();!function(n){const e=n.length,t=document.createElement("div"),o=Array.from({length:e},(()=>"auto")).join(" ");t.style=`\n    display: grid;\n    grid-template-columns: ${o};\n    padding: 10px;\n    max-width: 309px;`;for(let o=0;o<e;o++){const e=n[o].length;for(let r=0;r<e;r++){const e=n[o][r],c=document.createElement("div");c.innerText=e,t.appendChild(c)}}document.body.appendChild(t)}(r);t(function(n){let e=0,t=0;for(let o=0;o<n.length;o++){const r=n[o];for(let n=0;n<r.length;n++)"Red"===r[n]?e+=1:t+=1;console.log(r)}return`Red: ${e}, Blue: ${t}`}(r)),n()}()})();
=======
(()=>{"use strict";function e(){const e=document.createElement("hr");document.body.appendChild(e)}function n(e){const n=document.createElement("h3");n.innerText=e,document.body.appendChild(n)}function t(e){const n=document.createElement("p");n.innerText=e,document.body.appendChild(n)}function o(e,n){return parseInt(Math.random()*(n-e)+e)}function r(e){return Math.floor(Math.random()*e)}function c(){const e=o(5,10);return Array.from({length:e},(()=>r(30)))}function d(e){if(null==e)return;const n=e.length,t=document.createElement("div"),o=Array.from({length:n},(()=>"auto")).join(" ");t.style=`\n    display: grid;\n    grid-template-columns: ${o};\n    padding: 10px;\n    max-width: 309px;`;for(let o=0;o<n;o++){const n=e[o].length;for(let r=0;r<n;r++){const n=e[o][r],c=document.createElement("div");c.innerText=n,t.appendChild(c)}}document.body.appendChild(t)}n("Ejercicio 1: Suma de todos los números dentro de la lista "),t(`[${c().join(", ")}] = ?`),t(0),e(),function(){n("Ejercicio 2: El primero número es mayor, menor o igual al segundo número.");t(`${r(30)} and ${r(30)}`),t("?"),e()}(),n("Ejercicio 3: Encuentra el número más grande"),t(`[${c().join(", ")}] = ?`),t(-1),e(),n("Ejercicio 4: Encuentre cuantos hay de Red y cuantos hay de Blue."),d(function(){const e=o(3,6);let n=[];for(let t=0;t<e;t++){let t=[];for(let n=0;n<e;n++)1===o(1,3)?t.push("Red"):t.push("Blue");n.push(t)}return n}()),t("Red: 0, Blue: 0"),e(),n("Ejercicio 5: Matrix 1"),d(void 0),e()})();
>>>>>>> 346cc8ad5c94595df7d79a56a6a2906557633384
