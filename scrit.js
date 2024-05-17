//1 Funciones flecha
function greetings() {
    return "hola";
}
console.log(greetings());

const greetings() => "Hola";
//Convierte la siguiente función en una función flecha en 

function division(a, b) {
    return a / b;
}
console.log(division(10, 2));
const division = (a, b) => a / b;

//Convierte la siguiente función en una función flecha en

function myName(Vi) {
    return `my name is ${Vi}`;
}
console.log(myName("Vi"));
const myName = name => `Mi nombre es ${name}`;

//Convierte la siguiente función en una función flecha en

function test2() {
    console.log("Función test 2 ejecutada.");
}
function test1(callback) {
    callback();
}
const test2 = () => console.log("Función test 2 ejecutada.");

const test1 = callback => callback();

//2
let olderThan25 = [];
people.forEach(person => {
    if (person.age > 25) {
        olderThan25.push(person);
    }
});
console.log(olderThan25);

let startsWithJ = [];
people.forEach(person => {
    if (person.name.startsWith('J')) {
        startsWithJ.push(person);
    }
});
console.log(startsWithJ);
//3
let olderThan25 = people.filter(person => person.age > 25);

const numbers = [4, 5, 6, 7, 8, 9, 10];
const poweredNumbers = numbers.map(number => Math.pow(number, number));
console.log(poweredNumbers);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = numbers.filter(number => number % 2 !== 0);
console.log(oddNumbers);

///vegan

const foodList = [
    { name: 'Tempeh', isVeggie: true },
    { name: 'Cheesbacon burguer', isVeggie: false },
    { name: 'Tofu burguer', isVeggie: true },
    { name: 'Entrecot', isVeggie: false }
];
const veggieMessages = foodList
    .filter(food => food.isVeggie)
    .map(food => `Que rico ${food.name} me voy a comer!`);
console.log(veggieMessages);

const foodList = [
    { name: 'Tempeh', isVeggie: true },
    { name: 'Cheesbacon burguer', isVeggie: false },
    { name: 'Tofu burguer', isVeggie: true },
    { name: 'Entrecot', isVeggie: false }
];

const veggieMessages = foodList
    .filter(food => food.isVeggie)
    .map(food => {
        const gender = food.name.endsWith('a') ? 'rica' : 'rico';
        return `Que ${gender} ${food.name} me voy a comer!`;
    });

console.log(veggieMessages);


//483600
const numbers = [39, 2, 4, 25, 62];
const product = numbers.reduce((acc, number) => acc * number, 1);
console.log(product);

//extra
const staff = [
    { name: "Pepe", role: "The Boss", hobbies: ["leer", "ver pelis"] },
    { name: "Ana", role: "becaria", hobbies: ["nadar", "bailar"] },
    { name: "Luis", role: "programador", hobbies: ["dormir", "comprar"] },
    { name: "Carlos", role: "secretario", hobbies: ["futbol", "queso"] }
];

const staffPhrases = staff.map(person => {
    return `${person.name} es ${person.role} y le gusta ${person.hobbies.join(" y ")}`;
});
console.log(staffPhrases);

//2
const foodList = ["Pizza", "Ramen", "Paella", "Entrecot"];
const foodPhrases = foodList.map(food => {
    switch (food) {
        case "Pizza":
            return "Como soy de Italia, amo comer Pizza";
        case "Ramen":
            return "Como soy de Japón, amo comer Ramen";
        case "Paella":
            return "Como soy de Valencia, amo comer Paella";
        case "Entrecot":
            return "Aunque no como carne, el Entrecot es sabroso";
    }
});
console.log(foodPhrases);

//3
const inventory = [
    { name: 'Mobile phone', price: 199 },
    { name: 'TV Samsung', price: 459 },
    { name: 'Viaje a cancún', price: 600 },
    { name: 'Mascarilla', price: 1 }
];

const expensiveItems = inventory
    .filter(item => item.price > 300)
    .map(item => item.name);
console.log(expensiveItems);
//4

const sentenceElements = [
    'Me', 'llamo', 'XX', 'y', 'quiero', 'sentir', 'la', 'fuerza', 'con', 'javascript'
];

const sentence = sentenceElements.reduce((acc, word) => `${acc} ${word}`);
console.log(sentence);
