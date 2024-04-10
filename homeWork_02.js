// -------------Задание 1-------------------

let counter = {};
let counter2 = new Object();
let counter3 = Object.create({});

// -------------Задание 2-------------------

const counterCopy = Object.assign({}, counter);
const counterCopy2 = { ...counter };
const counterCopy3 = Object.create(counter);
const counterCopy4 = JSON.parse(JSON.stringify(counter));
const counterCopy5 = structuredClone(counter);

function makeCopy(obj) {
	let objCopy = {};
	for (let key in obj) {
		objCopy[key] = obj[key] instanceof Object ? makeCopy(obj[key]) : obj[key];
	}
	return objCopy;
}

// -------------Задание 3-------------------

// functiond declaration
function makeCounter() {}
// function expression
const makeCounter = function () {};
// arrow function
const makeCounter = () => {};
// named function expression
const makeCounter = function makeCounterIt() {};

// -------------Задание 4-------------------

// Глобальный метод structuredClone создает глубокую копию объектов, используя алгоритм структурированного клонирования.
// Этот метод позволяет переносить объекты в исходном значении, а не клонировать их в новый объект. Перенесенные объекты отделяются от исходного и более не доступны в нем.

// ---------------Бонус---------------------

// -------------Задание 1-------------------

const obj1 = { here: { is: 'on', other: '3' }, object: 'Y' };
const obj2 = { here: { is: 'on', other: '2' }, object: 'Y' };
const obj3 = { here: { is: 'on', other: '2' }, object: 'Y' };

function compareObjects(obj, obj2) {
	console.log(JSON.stringify(obj) === JSON.stringify(obj2));
}

compareObjects(obj1, obj2);
// false
compareObjects(obj2, obj3);
// true

// Так же стоит отметить что данный метод при равных ключах и значениях, но при разной последовательности, будет выдавать false.

// -------------Задание 2-------------------

function reverseStr(str) {
	return str.split('').reverse().join('');
}
