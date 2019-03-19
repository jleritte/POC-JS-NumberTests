console.log('fact(0):',fact(0))
console.log('fact(1):',fact(1))
console.log('fact(2):',fact(2))
console.log('fact(3):',fact(3))
console.log('fact(4):',fact(4))
console.log('fact(5):',fact(5))
console.log('fact(6):',fact(6))
console.log('fact(7):',fact(7))
console.log('fact(8):',fact(8))
console.log('fact(9):',fact(9))
console.log('fact(10):',fact(10))


console.log('fib(0):',fib(0))
console.log('fib(1):',fib(1))
console.log('fib(2):',fib(2))
console.log('fib(3):',fib(3))
console.log('fib(4):',fib(4))
console.log('fib(5):',fib(5))
console.log('fib(6):',fib(6))
console.log('fib(7):',fib(7))
console.log('fib(8):',fib(8))
console.log('fib(9):',fib(9))
console.log('fib(10):',fib(10))


// Function for Fibonacci numbers
function fib(x) {
	// if (x === 0 ){
	// 	return x
	// } else if (x <= 2){
	// 	return 1
	// } else {
	// 	return fib(x - 1) + fib(x - 2)
	// }
	return x === 0 ? x : x <= 2 ? 1 : fib(--x) + fib(--x)
}

// Function for Calculating Factorals
function fact(x) {
	// if (x === 0){
	// 	return 1
	// } else {
	// 	return x * fact(x - 1)
	// }
	return x === 0 ? 1 : x * fact(--x)
}