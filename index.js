const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const email = "email@treinaweb.com";

if (regex.test(email)) {
    console.log(`email ${email} é válido e foi enviado`);
} else {
    console.log("email inválido");
}