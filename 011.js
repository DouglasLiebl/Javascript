function greetings(name) {
    return console.log(`Hello ${name}!`);
}

greetings("James");

const sqrt = function (n) {
    return n ** 0.5;
};
console.log(sqrt(16));

const sqrtArrow = n => n ** 0.5;
console.log(sqrtArrow(9))