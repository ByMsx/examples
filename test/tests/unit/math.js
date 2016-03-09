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
	it("#sqrt", function(){
		expect(math.sqrt(4)).to.equal(2);
	});
	it("#pow", function(){
		expect(math.pow(-6, 2)).to.equal(36);
	});
});