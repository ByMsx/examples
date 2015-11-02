var testWebPage = require("../../../lib/webpage.js");

describe("Test Web Page (integration testing)", function() {
	var mockRes;
	before(function() {
		mockify.enable();
		mockRes = require("res");
	});

	it("#processGet", function(done) {
		mockRes._setup('render', 'index', {}, done);
		testWebPage.processGet({
			params: {}
		}, mockRes);
	});

	after(function() {
		mockify.disable();
	});
});