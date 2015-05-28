function countWords(inputWords) {
	return inputWords.reduce(function(obj, inputWord) {
		obj[inputWord] = ++obj[inputWord] || 1;
		return obj;
	}, {});
}

module.exports = countWords