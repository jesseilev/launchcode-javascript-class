// order() ---------------------------------------------------------------

if (![].order) {
	Array.prototype.order = function(compareFunction) {
		var clone = this.slice(0);
		return clone.sort(compareFunction);
	};	
}


console.log("\n------Testing order()--------");

var nums = [3, 6, 4, 7, 2, 0, 3, 4];
var orderedNums = nums.order( function(a, b) {
	return a - b;
})

console.log("original => " + nums);
console.log("in order => " + orderedNums);


// includes() ------------------------------------------------------------

if (![].includes) {
	Array.prototype.includes = function(searchElement) {
		return this.some( function(elmt) {
			return elmt === searchElement;
		});
	};
}

console.log("\n------Testing includes()--------");
console.log(nums);
console.log("includes 3?  => " + nums.includes(3));
console.log("includes 20? => " + nums.includes(20));


// find() ----------------------------------------------------------------

if (![].find) {
	Array.prototype.find = function(criteria) {
		return this.filter(criteria)[0];
	};
}

console.log("\n------Testing find()--------");
console.log(nums);
var firstEven = nums.find( function(num) {
	return num % 2 == 0;
});
console.log("find first even     => " + firstEven);
var firstNegative = nums.find( function(num) {
	return num < 0;
});
console.log("find first negative => " + firstNegative);


// findAll() ----------------------------------------------------------------

if (![].findAll) {
	Array.prototype.findAll = Array.prototype.filter;
}

console.log("\n------Testing findAll()--------");
console.log(nums);
var evens = nums.findAll( function(num) {
	return num % 2 == 0;
});
console.log("find all evens     => " + evens);
var negatives = nums.findAll( function(num) {
	return num < 0;
});
console.log("find all negatives => " + negatives);


