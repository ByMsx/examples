exports.sum = function(a, b) {
	return a + b;
};

exports.sub = function(a, b) {
	return a - b;
};

exports.asyncSum = function(a, b, callback) {
	var result = a + b;
	callback(result);
};