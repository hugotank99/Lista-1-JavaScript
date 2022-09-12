//Escreva  um sistema que leia três números inteiros e positivos (A, B, C) e calcule a seguinte expressão:

const prompt = require ("prompt-sync")();

const aT = prompt ('digite sua nota A: ');
    const a = Number (aT);
const bT = prompt ('digite sua nota B: ');
    const b = Number (bT);
const cT = prompt ('digite sua nota C: ');
    const c = Number (cT);

const r = Math.pow ((a+b), 2);
const s = Math.pow ((b+c), 2);
const d = (r+s)/2;

console.log(`${d} = (${r}+${s}) /2`);