
function validateNode(node) {
	// node = node || document.body.parentNode;		
	if (!(node instanceof HTMLElement)) {
		throw(node + " is not an HTMLElement");
	}
	return node;
}

// generic function that returns the value of a particular property of an object
var getProperty = function(propName, obj) { return obj[propName]; }

// generic function that simply returns its (first) argument. 
var bounceBack = function(arg) { return arg; }

var DOMUtils = {
	
	flattenDOM: function(node) {
		node = validateNode(node);
		
		children = Array.prototype.slice.call(node.children);
		var nestedDescendents = children.map(DOMUtils.flattenDOM);	
		var flatDescendents = [];
		var flatDescendents = flatDescendents.concat.apply(flatDescendents, nestedDescendents);
		return [node].concat(flatDescendents);
	},
	
	getIds: function(node) {
		node = validateNode(node);
		
		// use bounceBack to filter out the empty strings
		return DOMUtils.flattenDOM(node).map(getProperty.bind(null, 'id')).filter(bounceBack);
	},
	
	getClasses: function(rootNode) {
		console.log("called getclasses");
		rootNode = validateNode(rootNode);
		
		return DOMUtils.flattenDOM(rootNode).map( function(descendent) {
			descendent.className;
		});
	}
};
