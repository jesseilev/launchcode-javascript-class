function repeat(operation, num) {
	operation();
	if (num > 1) {
		repeat(operation, num - 1);
	}
}

var logger = function() {
	console.log("hello!");
}
//repeat(logger, 3);


module.exports = repeat