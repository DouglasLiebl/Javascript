const number = Number(prompt("Enter a number:"));
const title = document.getElementById("numero-titulo");
const text = document.getElementById("texto")

title.innerHTML = number;

text.innerHTML = ''
text.innerHTML += `<p>Raiz quadrada: ${Math.sqrt(number)}</p>`;
text.innerHTML += `<p>${number} é inteiro: ${Number.isInteger(number)}</p>`;
text.innerHTML += `<p> É NaN: ${Number.isNaN(number)}</p>`;
text.innerHTML += `<p>Arredondado para baixo: ${Math.floor(number)}</p>`;
text.innerHTML += `<p>Arredondado para cima: ${Math.ceil(number)}</p>`;