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

exports.mltplic = function() {
	return a * b;
};

exports.div = function() {
	return a / b;
};