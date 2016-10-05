if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    createModule : function(str1, str2) {
		var m = {};
		
		m.greeting = str1;
		m.name = str2;
		
		m.sayIt = function() {
			return m.greeting + ", " + m.name;	
		}
		
		return m;
    }
  };
});

