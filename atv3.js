//Faça um sistema que leia o tempo de duração de um evento em uma fábrica expressa em segundos e mostre-o expresso em horas, minutos e segundos

const prompt = require('prompt-sync')();
const secE = prompt ('quanto tempo levou o evento: ');

const evt = Number(secE);
const hrs = evt/3600;
const min = (evt%3600)/60;
const sec = (evt%3600)%60;


console.log (`\nThe event had ${Math.floor(hrs)} hours ${Math.floor(min)} minutes ${Math.floor(sec)} seconds`)

		