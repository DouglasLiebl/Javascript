const user = {
    name: "James",
    surname: "Bond",
    age: 25
};

console.log(user.name)

function createUser(name, surname, age) {
    return {
        name: name,
        surname: surname,
        age: age,

        speak() {
            console.log("Hello!")
        }
    };
}

const user2 = createUser("Josef", "Joestar", 55);
user2.speak();