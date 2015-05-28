var slice = Array.prototype.slice;

function logger(namespace) {
	return function() {
		args = [namespace].concat(slice.call(arguments));
		console.log.apply(null, args);
	}
}

/*
greet = logger("hello");
greet("i am partially applied!", "and here is more text");
*/

module.exports = logger;