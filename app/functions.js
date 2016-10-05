if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
		return fn(arr[0], arr[1], arr[2]);
    },

    speak : function(fn, obj) {		
		this.greeting = obj.greeting;
		this.name = obj.name;
		this.fn = fn;
		
		return this.fn();
    },

    functionFunction : function(str) {
		return function(s) {
			return str + ", " + s;
		};
    },

    makeClosures : function(arr, fn) {
		
		var functions = [];		
		$.each(arr, function(key, val) {
			functions.push( (function() {
					var result = fn(val);
					return function() { return result; };
				})());
		});
		
		return functions;
    },

    partial : function(fn, str1, str2) { 
		return function(str3) {
			return fn(str1, str2, str3);
		};
    },

    useArguments : function() {
		var sum = 0;
		for (var i = 0; i < arguments.length; i++) {
			sum += arguments[i];
		}
		return sum;
    },

    callIt : function(fn) {
		fn.apply(this, Array.prototype.slice.call(arguments, 1));
    },

    partialUsingArguments : function(fn) {
		var args = Array.prototype.slice.call(arguments, 1);
		return function() {
				var allArguments = args.concat(Array.prototype.slice.call(arguments));
				return fn.apply(this, allArguments);
		};
    },

    curryIt : function(fn) {		
		return function(i) {
			return function(j) {
				return function(k) {
					return fn(i, j, k);
				};
			};
		};
	}
  };
});
