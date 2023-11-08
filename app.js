const elementos = 100;
const primos = [];
const criba = (new Array(elementos - 1)).fill(1);
let iteraciones = 0;

const maxDivisor = Math.floor(Math.sqrt(elementos));

for(let i = 2; i <= maxDivisor; i++) {
  if(criba[i - 2]) {
    for(let j = i; j <= Math.floor(elementos/i); j++){
      criba[(i*j) - 2] = 0;
      iteraciones++;
    }
  }
  iteraciones++;
}
criba.forEach((element, index) => {
  if(element) primos.push(index + 2);
});

console.log(`iteraciones: ${iteraciones}`);
console.log(primos);