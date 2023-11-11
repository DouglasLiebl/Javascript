const name = "James Bond"
// Não se pode mudar o valor de uma constante.
// Deve ser inicializada sempre, nunca const name;.
// Pode ter seu valor atribuído a outra constante ou variável.

let ty = typeof(name);
console.log(name, ty);

// Ex
const nome = "James";
const sobrenome = "Bond";
const idade = 30;
const peso = 84;
const altura = 1.80;

let imc = peso / (altura * altura);
let anoNascimento = 2023 - idade;

console.log(`Nome Completo: ${nome} ${sobrenome} \nPeso: ${peso} Altura: ${altura} Idade: ${idade}`,
`\nIMC: ${imc} Ano de nascimento: ${anoNascimento}`);