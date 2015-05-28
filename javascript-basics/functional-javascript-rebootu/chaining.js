function getShortMessages(messages) {
	return messages.map( function getText(obj) {
		return obj.message
	}).filter( function shouldInclude(text) {
		return text.length < 50
	})
}

module.exports = getShortMessages