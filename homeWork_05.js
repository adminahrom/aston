// -------------Задание 1-------------------

let promiseTwo = new Promise((resolve, reject) => {
	resolve('a'); // resolve 'a'
});

promiseTwo
	.then(res => {
		return res + 'b'; // 'a' resolve 'b'
	})
	.then(res => {
		return res + 'с'; // 'ab' resolve 'c'
	})
	.finally(res => {
		return res + '!!!!!!!'; // не отработает - undefined
	})
	.catch(res => {
		return res + 'd'; // т.к resolve - пропускаем этот момент
	})
	.then(res => {
		console.log(res); // 'Выводит в консоль 'abc'
	});
// Результат: 'abc'

// -------------Задание 2-------------------

function doSmth() {
	return Promise.resolve('123');
}

doSmth()
	.then(function (a) {
		console.log('1', a); // resolve - 123
		return a;
	})
	.then(function (b) {
		console.log('2', b); // resolve - 123
		return Promise.reject('321'); // Меняем на rejected
	})
	.catch(function (err) {
		console.log('3', err); // rejected - 321
	})
	.then(function (c) {
		console.log('4', c); //undefined
		return c;
	});
// Результат:
// 1 123
// 2 123
// 3 321
// 4 undefined

// -------------Задание 3-------------------

function showItem(arr, delay = 3000) {
	arr.forEach((item, index) => {
		if (index === 0) {
			setTimeout(() => {
				console.log(index);
			}, delay);
		}
		if (index >= 1) {
			setTimeout(() => {
				console.log(index);
			}, index * delay + 3000);
		}
	});
}
const arr = [10, 12, 15, 21];
showItem(arr);

// -------------Задание 4-------------------
// Top level await - позволяет модульной системе заботиться о разрешении промисов и их взаимодействии между собой.
// Обычно Top level await используется в ситуациях, когда модуль не сможет выполнить свою работу до тех пор, пока промис не будет выполнен.
// Await вне функции async выдает SyntaxError, за исключением браузеров где поддерживается использование await на верхнем уровне.
