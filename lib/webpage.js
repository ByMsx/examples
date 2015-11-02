exports.processGet = function(req, res) {
	res.render('index', {}, function(data) {
		res.send(data);
	});
};