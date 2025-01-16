function fibonacci(num) {
// your code here
	if(num<=2){
		return n-1;
	}
	let a=0, b=1;
	while(num > 2){
		let curr = a+b;
		    a = b;
		    b = curr;
		    num--;
	}
	return b;
}

module.exports = fibonacci;
