const valor = "abc abc";

// console.log(valor.match(/abc/g));


const regex = /(\d{2})\/(\d{2})\/(\d{4})/g;

const frase = 'As datas são 22/05/2023 e 23/05/2023';

console.log(frase.match(regex));