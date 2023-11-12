let someString = "Text";

console.log(someString.charAt(3)) // pega a letra do índice especificado.
console.log(someString.concat("o")) // concat básico.
console.log(someString.indexOf("Tex")) // retorna o índice onde começa determinado texto.
console.log(someString.indexOf("x", 3)) // mesmo que o anterior porém especificando onde começar na procurar.

console.log(someString.split("x"))