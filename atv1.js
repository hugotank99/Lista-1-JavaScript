//Faça um sistema que leia a idade de uma pessoa expressa em anos, meses e dias e mostre-a expressa apenas em dias.
const prompt = require("prompt-sync")();

const years = prompt('\nEntre com os anos: ');
const months = prompt('\nEntre com os meses: ');
const days = prompt ('\nEntre com os dias: ');

const yearsT = Number(years);
const monthsT = Number(months);
const daysT = Number(days);

totalDays = yearsT*365+monthsT*30+daysT;

console.log (`você viveu o total de dias: ${totalDays}`);