const regex = /abc/;

// console.log(regex.exec('abcd'));


const frase = 'A data de hoje é 22/05/2023';

const regex2 = /(\d{2})\/(\d{2})\/(\d{4})/;

const resultado = regex2.exec(frase);

if (resultado !== null) {
    console.log('Correspondência completa: ', resultado[0]);
    console.log('Primeiro grupo de captura (Dia): ', resultado[1]);
    console.log('Segundo grupo de captura (Mês): ', resultado[2]);
    console.log('Terceiro grupo de captura (Ano): ', resultado[3]);
    console.log('Índice da correspondência na string: ', resultado.index);
    console.log('String original: ', resultado.input);
}
