const valor = 'O telefone é (11) 9999-9999';

const regex = /\((\d+)\) (\d+)-(\d+)/;

const match = valor.match(regex);
const numeroDoTelefone = match[0].replace(/\D/g, '');

console.log('numero completo: ', match[0]);
console.log('DDD: ', match[1]);
console.log(numeroDoTelefone);