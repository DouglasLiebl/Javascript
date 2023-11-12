const list = [1, 2, 3];

list.shift() // remove do começo
list.pop() // remove do fim

list.push(4) // adiciona ao fim
list.unshift(0) // adiciona ao começo

delete list[1] // remove e deixa um elemento vazio, os índices não se alteram

list.slice(0, 2) // onde começa e termina a partição da lista

console.log(typeof(list)) // vai retornar object
console.log(list instanceof Array) // vai retornar true

console.log(list);