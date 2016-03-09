var math = require("../../../lib/math.js");

describe("Math module", function() {
	it("#sum", function() {
		expect(math.sum(2, 3)).to.equal(5);
	});
	it("#sub", function() {
		expect(math.sub(3, 2)).to.equal(1);
	});
	it("#asyncSum", function(done) {
		math.asyncSum(30000, 4000, function(result) {
			expect(result).to.equal(34000);
			done();
		});
	});
	it("#pow", function() {
		expect(math.sum(4, 2)).to.equal(16);
	});
	it("#sqrt", function() {
		expect(math.sub(4)).to.equal(2);
	});
});