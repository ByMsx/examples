var math = require("../../../lib/math.js");

describe("Math module", function() {
	it("#sum", function() {
		expect(math.sum(2, 3)).to.equal(5);
	});
	it("#sub", function() {
		expect(math.sub(3, 2)).to.equal(1);
	});
	it("#div", function() {
		expect(math.div(4, 2)).to.equal(2);
	});
	it("#mult", function() {
		expect(math.mult(4, 2)).to.equal(8);
	});

	it("#asyncSum", function(done) {
		math.asyncSum(30000, 4000, function(result) {
			expect(result).to.equal(34000);
			done();
		});
	});
});