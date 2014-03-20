require.config({

	baseUrl: './',

	paths : {
		jquery : '../source/bower_components/jquery/dist/jquery',
		modernizr : '/source/bower_components/modernizr/modernizr',
		underscore : '/source/bower_components/underscore/underscore',
		backbone : '/source/bower_components/backbone/backbone',
		text : '/source/bower_components/requirejs-text/text',
		app : '/source/scripts/js/app',
		tpl : '/source/scripts/tpl',
	//	'mocha' : '../source/bower_components/mocha/mocha',
		'chai' : '/source/bower_components/chai/chai',
		'chai-jquery' : '/source/bower_components/chai-jquery/chai-jquery',
		'sinon-chai':  '/source/bower_components/sinon-chai/lib/sinon-chai.js',
	    'sinon':'/source/bower_components/sinon/lib/sinon.js',
	    'mocha' : '/testem/mocha',
		'testem':'/testem',
	    spec: '/test/specs/'
	},

	/* demo version use memory model */
	map : {
		'*' : {
			'app/models/object' : 'app/models/memory/object'
		}
	},

	/*
	 * un comment the next line here to use real api with server map: { '*': {
	 * 'app/models/object': 'app/models/web/object' } },
	 */

	shim : {
		'backbone' : {
			deps : [ 'underscore', 'jquery' ],
			exports : 'Backbone'
		},

		'underscore' : {
			exports : '_'
		},
	
		/* https://github.com/chaijs/chai-jquery */
		'chai-jquery': ['jquery', 'chai'],
		'mocha': {
		      init: function () {
		        this.mocha.setup('bdd');
		        return this.mocha;
		     }
		 },
		'testem': {
			 deps : [ 'mocha'],
		 }
			
	},
	
	urlArgs: 'bust=' + (new Date()).getTime()
});

require(['require','testem', 'chai', 'chai-jquery', 'mocha', 'jquery'], function(require,testem, chai, chaiJquery,mocha,jquery){
	
		mocha.setup('bdd')
		
		chai.use(chaiJquery);
		window.should = chai.should();
		window.expect = chai.expect;
	  
	 
		var files = [];
		files.push("/test/views/homeTest.js")
		require(files, function() {
  			mocha.run();
		});
});



