module.exports = function(arr, fn) {
	var reducer = function(arrSoFar, element) {
		arrSoFar.push(fn(element));
		return arrSoFar;
	}
	return arr.reduce(reducer, []);
};