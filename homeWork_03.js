// -------------Задание 1-------------------
// Массивы в JavaScript являются "неправильными" и совмещают в себе функции сразу нескольких структур данных.
// По задумке длина массива должна быть неизменной. Для того чтобы добавить элемент в массив, нужно создать новый массив длиннее старого на 1 элемент,
// затем скопировать в него все значения старого массива и в качестве последнего элемента указать новое значение.

// -------------Задание 2-------------------

function logger() {
	console.log(`I output only external context: ${this.item}`);
}

const obj = { item: 'some value' };

logger.bind(obj)();
logger.call(obj);
logger.apply(obj);

// -------------Задание 3.1-------------------

// Создать массив чисел и найти его сумму
const numbersArray = [8, 11, 19, 5, 20];

const sumNum = numbersArray.reduce((acc, num) => acc + num, 0);
console.log(sumNum);

// Создать массив строк и объединить их в одну строку
const strArray = [
	'H',
	'e',
	'l',
	'l',
	'o',
	'V',
	'l',
	'a',
	'd',
	'i',
	'm',
	'i',
	'r',
];
const strHello = strArray.join('');
console.log(strHello);

// Найти максимальный и минимальный элемент в массиве чисел
const numArray = [17, 10, 11, 4, 25];

const minNumber = numArray.sort((a, b) => a - b);
console.log('min', minNumber[0]); // 4

const maxNumber = numArray.sort((a, b) => b - a);
console.log('max', maxNumber[0]); // 25

// -------------Задание 3.2-------------------
// LIFO (Last in - First out)

const stack = [5, 10, 25, 40, 4];

stack.push(35); // Добавление
stack.push(42); // Добавление
const deleteItem = stack.pop();
console.log('deleteItem', deleteItem); // 42 Последний удаленный элемент
console.log('lastItemInArr', stack.at(-1)); // 35 Последний элемент
console.log(stack.length === 0); // false Проверка на пустоту

// -------------Задание 3.3-------------------
// FIFO (First in - First out)

const queue = [];

queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
queue.shift(); // Удаление из начала очереди
console.log('first', queue[0]); // Получение первого элемента без удаления
queue.shift();
queue.shift();
queue.shift();
console.log(queue.length === 0); // true Проверка на пустоту

// -----------------Бонус----------------------

let person = {
	firstName: 'Vladimir',
	lastName: 'Sharikov',
};

function makePersonInfo(city) {
	console.log(`${this.firstName} ${this.lastName} ${city}`);
}

Function.prototype.binding = function (person, ...args) {
	let func = this;
	return function (...newArgs) {
		func.apply(person, [...args, newArgs]);
	};
};

makePersonInfo.binding(person, 'Rostov')();
