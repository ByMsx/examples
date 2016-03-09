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

exports.pow = function(a, b) 
{
	var P = 1;
	for(var i=0, i<b, i++)
	{
		P *= a;
	}
	return P;
};

exports.sqrt = function(a)
{
	return math.sqrt(a);
};