if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
		return str.match(/\d+/g) !== null;
    },

    containsRepeatingLetter : function(str) {
		return str.match(/([a-zA-Z]).*?\1/) !== null;
    },

    endsWithVowel : function(str) {
		return str.match(/([aeiouAEIOU])$/) !== null;
    },

    captureThreeNumbers : function(str) {
		var result = str.match(/\d{3}/);
		var foundMatches = result !== null;
		return foundMatches ? result[0] : foundMatches;
    },

    matchesPattern : function(str) {		
		return str.match(/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/) !== null;
    },
	
    isUSD : function(str) {		
		return str.match(/^(\$[0-9]{1,3})\,?([0-9]{3}\,?)*(\.?[0-9]{2})?$/) !== null;
    }
  };
});
