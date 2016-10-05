if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
		if (isNaN(num)) {
			return null;
		} else {			
			var b = (num >>> 0).toString(2);
			b = "00000000".substr(b.length) + b;
			return parseInt(b[b.length - bit]);
		}
    },

    base10: function(str) {
		return parseInt(str, 2);
    },

    convertToBinary: function(num) {
		if (isNaN(num)) {
			return null;
		} else {
			var b = (num >>> 0).toString(2);
			b = "00000000".substr(b.length) + b;
			return b;
		}
    },

    multiply: function(a, b) {
		function precision(n) {
			if (!isFinite(n)) return 0;
			var e = 1, p = 0;
			while (Math.round(n * e) / e !== n) { n *= 10; p++; }
			return p;
		}
		
		return parseFloat((a * b).toFixed(precision(b)));
    }
  };
});

