alert("Alerta");
window.alert("Alerta 2")

let name = window.prompt("Say your name:")
const response = window.confirm(`Your name is ${name} \nConfirm?`)

if (response === true) {
    window.alert("Saved.")
}

// Ex
let n1 = window.prompt("Enter a number: ");
let n2 = window.prompt("Enter another number: ");

let sum = Number(n1) + Number(n2);

window.alert(`Result: ${sum}`);
