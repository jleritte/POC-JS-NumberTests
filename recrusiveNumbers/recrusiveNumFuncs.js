console.log(fact(0));
console.log(fact(1));
console.log(fact(2));
console.log(fact(3));
console.log(fact(4));
console.log(fact(5));
console.log(fact(6));
console.log(fact(7));
console.log(fact(8));
console.log(fact(9));
console.log(fact(10));

function fact(x) {
	if (x === 0){
		return 1;
	} else {
		return x * fact(x - 1);
	}
}

console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(9));
console.log(fib(10));

function fib(x) {
	if (x === 0 ){
		return x;
	} else if (x <= 2){
		return 1;
	} else {
		return fib(x - 1) + fib(x - 2);
	}
}