//O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem do distribuidor e dos impostos (aplicados ao custo de fábrica).
//Supondo que a porcentagem do distribuidor seja de 28% e os impostos de 45%, escrever um sistema que leia o custo de fábrica de um carro e escreva o custo ao consumidor

const prompt = require ('prompt-sync')();

const cstT = prompt ('digite o custo de frabicação do carro: ');
const cst = Number(cstT);

const preçoF = cst + (cst+0.28) + (cst+0.45)

console.log(`o preço do carro é:  ${preçoF.toFixed(2)}` )