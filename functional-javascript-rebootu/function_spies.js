function Spy(target, method) {
	this.target = target;
	this.originalMethod = console.error;
	this.count = 0;	
	
	console.error = function() {
		++this.count;
		this.originalMethod.bind(this.target).call();
	}
	
}

var spy = new Spy(console, 'error')
    
console.error('calling console.error')
console.error('calling console.error')
console.error('calling console.error')

console.log(spy.count) // 3


module.exports = Spy;