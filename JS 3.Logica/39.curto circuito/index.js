/*FALSY o que for diferente de FALSY e um valor verdadeiro.

- false
- 0
- '',"",``
- null/undefined
- NaN

*/

const usuarioClient = 'preto';
const corPadrao = usuarioClient || null;
console.log(corPadrao);

const a = 0;
const b = null;
const c = false;
const d = 'false' // avalidado em verdadeiro valor real - String
const e = NaN

console.log(a||b||c||d||e);