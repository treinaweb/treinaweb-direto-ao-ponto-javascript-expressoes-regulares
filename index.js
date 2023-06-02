const frase = "Os gatos são fofos. Eu amo gatos!";

const regex = /(gatos)/g;

const novaFrase = frase.replace(regex, (match, g1, offset, valor) => {
    console.log(`Match: ${match} na posição ${offset}: ${g1}`);
    console.log(`Valor original: ${valor}`);
    return 'cachorros';
});

console.log(novaFrase);
