//Faça um sistema que leia as 3 notas de um aluno e calcule a média final deste aluno. 
//Considerar que a média é ponderada e que o peso das notas é: 2,3 e 5, respectivamente. 
const prompt = require ('prompt-sync')();

const n1T = prompt('Test grade 1: ');
    const n1 = Number(n1T);
const n2T = prompt('Test grade 2: ');
    const n2 = Number(n2T);
const n3T = prompt('Test grade 3: ');
    const n3 = Number(n3T);

const mediaT = (n1*2+n2*3+n3*5)/10;

console.log(`sua media foi ${mediaT.toFixed(1)}.`);