define(function(require) {
	var Home = require('app/views/Home');

	describe('Home', function() {

		describe('Simple Home test', function() {
			it('should default a render method', function() {
				var home = new Home();
				expect(home).to.exist;
				expect(home.render).to.exist;
			});
		});

	});

});