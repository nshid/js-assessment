if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
		obj.sayIt = fn;		
		return obj.sayIt();
    },

    alterObjects : function(constructor, greeting) {
		constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
		var props = [];
		$.each(obj, function(key, val) {
			if (obj.hasOwnProperty(key)) {
				props.push(key + ": " + val);
			}
		})
		return props;
    }
  };
});
