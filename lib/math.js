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

exports.umnoj = function(a, b) {
	return a * b;
};

exports.delen = function(a, b) {
	return a / b;
};