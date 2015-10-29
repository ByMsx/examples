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
	it("#mul", function() {
		expect(math.mul(10, 5)).to.equal(50);
	});
	it("#div", function() {
		expect(math.div(81, 9)).to.equal(9);
	});
});