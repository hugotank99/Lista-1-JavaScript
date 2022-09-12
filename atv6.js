//Construa um programa em c que, tendo como dados de entrada dois pontos quaisquer no plano
//P(x1, y1) e P(x2, y2), escreva a distância entre eles. A fórmula que efetua tal

const prompt = require("prompt-sync")();

const x1t = prompt('Digite o valor de x1 ');
    const x1 = Number (x1t);
const x2t = prompt('Digite o valor de y1 ');
    const x2 = Number (x2t);
const y1t = prompt('Digite o valor de x2 ');
    const y1 = Number (y1t);
const y2t = prompt('Digite o valor de y2 ');
    const y2 = Number (y2t);
// D = (x2-x1)2 + (y2-y1)2
const D = Math.sqrt(Math.pow((x2-x1), 2)+ Math.pow((y2-y1),2));

console.log(`A distância entre os pontos P1(${x1}, ${y1}) e P2(${x2}, ${y2}) é ${Math.round(D)}`);