if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
			if (data !== null) {
				var i = 0;
				if (data.dir == dirName || (dirName === undefined && data.dir !== null)) {							
					var filenames = [];
					$.each(data.files, function(key, filename) { 
						if ( typeof filename !== 'object') {
							filenames.push(filename);
							i++;
						}
					});	
					var fileData = data.files;
					if (fileData !== null) {
						for (var j = i; j < fileData.length; j++) {
							filenames = $.merge(filenames, this.listFiles(fileData[j], fileData[j].dir));
						}
					}
					return filenames;
				} else {
					$.each(data.files, function(key, filename) { 
						if ( typeof filename !== 'object') {
							i++;
						} else {
							return false;	
						}
					});
					return this.listFiles(data.files[i], data.files[i].dir);
				}
			}
			return [];	
    },

    permute: function(arr) {
		var list = [], nextItem = [], items = [];				
		permutate(arr);
		return list;
		
		function permutate(items){
			if (items.length === 0) {
				list.push(nextItem.slice());
			}
			for (var i = 0; i < items.length; i++){
				items.push(items.shift());
				nextItem.push(items[0]);            
				permutate(items.slice(1));
				nextItem.pop();
			}
		}
    }
  };
});
