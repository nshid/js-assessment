if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
		return arr.indexOf(item);
    },

    sum : function(arr) {

		function add(a, b) {
			return a + b;
		}
		return arr.reduce(function(a,b) { return a + b; }, 0)
    },

    remove : function(arr, item) {		
		var valids = [];
		for(var i = 0; i < arr.length; i++) {
			if (arr[i] !== item) {
				valids.push(arr[i]);
			}
		}
		return valids;
    },

    removeWithoutCopy : function(arr, item) {
		var index = arr.indexOf(item);
		while (index !== -1) {
			arr.splice(index, 1);
			index = arr.indexOf(item);	
		}
		return arr;
    },

    append : function(arr, item) {
		arr.push(item);
		return arr;
    },

    truncate : function(arr) {
		arr.pop();
		return arr;
    },

    prepend : function(arr, item) {
		arr.unshift(item);
		return arr;
    },

    curtail : function(arr) {
		arr.shift();
		return arr;
    },

    concat : function(arr1, arr2) {
		return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
		arr.splice(index, 0, item);
		return arr;
    },

    count : function(arr, item) {
		return arr.reduce(function(n, v) { return n + (v === item) }, 0);
    },

    duplicates : function(arr) {
		var dupesObj = arr.reduce(
			function(c, i) {
				if(typeof c[i] !== "undefined"){
				  c[i]++; 
				  return c;
				} else {
					c[i] = 1; 
					return c;
				}
			}, {}
		);
		var dupes = [];
		for (var d in dupesObj) {
			if (dupesObj[d] > 1) {
				dupes.push(d);
			}
		}

		return dupes;
    },

    square : function(arr) {
		return arr.map(function(v) { return Math.pow(v, 2) } );
    },

    findAllOccurrences : function(arr, target) {		
		var indexes = [];
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] === target) {
				indexes.push(i);
			}
		}	
		return indexes;
    }
  };
});
