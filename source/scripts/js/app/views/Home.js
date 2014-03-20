define(function (require) {

    "use strict";

    var $                   = require('jquery'),
        _                   = require('underscore'),
        Backbone            = require('backbone'),
    
//     	   models              = require('app/models/home'),
        tpl                 = require('text!tpl/Home.html'),

        template = _.template(tpl);

    
    var home = {

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(template());
            return this;
        },
        
        remove:function(){
        	
        },
    };

    return Backbone.View.extend(home);

});