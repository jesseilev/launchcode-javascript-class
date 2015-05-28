function reduce(arr, fn, initial) {
	if (!arr.length) { return initial }
	head = arr[0]
	initial = fn(initial, head)
	return reduce(arr.slice(1), fn, initial)
}

module.exports = reduce