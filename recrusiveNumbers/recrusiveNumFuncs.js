// console.log('fact(0):',fact(0))
// console.log('fact(1):',fact(1))
// console.log('fact(2):',fact(2))
// console.log('fact(3):',fact(3))
// console.log('fact(4):',fact(4))
// console.log('fact(5):',fact(5))
// console.log('fact(6):',fact(6))
// console.log('fact(7):',fact(7))
// console.log('fact(8):',fact(8))
// console.log('fact(9):',fact(9))
// console.log('fact(10):',fact(10))


// console.log('fib(0):',fib(0))
// console.log('fib(1):',fib(1))
// console.log('fib(2):',fib(2))
// console.log('fib(3):',fib(3))
// console.log('fib(4):',fib(4))
// console.log('fib(5):',fib(5))
// console.log('fib(6):',fib(6))
// console.log('fib(7):',fib(7))
// console.log('fib(8):',fib(8))
// console.log('fib(9):',fib(9))
// console.log('fib(10):',fib(10))

console.log('ack(0,0):', ack(0,0))
console.log('ack(0,1):', ack(0,1))
console.log('ack(1,0):', ack(1,0))
console.log('ack(1,1):', ack(1,1))
console.log('ack(0,2):', ack(0,2))
console.log('ack(1,2):', ack(1,2))
console.log('ack(2,0):', ack(2,0))
console.log('ack(2,1):', ack(2,1))
console.log('ack(2,2):', ack(2,2))
console.log('ack(0,3):', ack(0,3))
console.log('ack(1,3):', ack(1,3))
console.log('ack(2,3):', ack(2,3))
console.log('ack(3,0):', ack(3,0))
console.log('ack(3,1):', ack(3,1))
console.log('ack(3,2):', ack(3,2))
console.log('ack(3,3):', ack(3,3))




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

// Function for Calculating Ackermann
function ack(m,n) {
	// if(m === 0) {
	// 	return ++n
	// } else if(m > 0 && n === 0) {
	// 	return ack(--m,1)
	// } else {
	// 	return ack(m-1,ack(m,--n))
	// }
	return m === 0 ? ++n : m > 0 && n === 0 ? ack(--m,1) : ack(m-1,ack(m,--n))
}