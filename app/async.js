if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
		return Promise.resolve(value);
    },

    manipulateRemoteData : function(url) {
		var p = new Promise(function(resolve, reject) {
			resolve($.getJSON(url));
		});
		
		return p.then(function(value) {
			var names = [];
			$.each(value.people, function(key, person) {
				names.push(person.name);
			});	
			return names.sort();
		});
    }
  };
});
