//Faça um sistema que leia a idade de uma pessoa expressa em dias e mostre-a expressa em anos, meses e dias.
const prompt = require('prompt-sync')();
const ageText = prompt('Digite sua idade: ')

const age = Number(ageText);
const years = age/365;
const months =(age%365)/30;
const days =(age%365)%30;

console.log(`You lived ${Math.floor(years)} years ${Math.floor(months)} months ${days} days`);