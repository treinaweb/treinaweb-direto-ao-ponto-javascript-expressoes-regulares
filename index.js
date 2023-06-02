const data = "2023-05-22";

const novaData = data.replace(/(\d{4})-(\d{2})-(\d{2})/, (match, ano, mes, dia, offset) => {
    console.log(match, ano, mes, dia, offset);
    return `${dia}/${mes}/${ano}`;
});

console.log(novaData);