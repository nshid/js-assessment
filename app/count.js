if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
	
		var i = start;
		var counterId = setInterval(function() {
			console.log(i++);
			if (i <= end) {
				console.log(i++);	
			} else {
				clearInterval(counterId);
			}
		}, 100);
				
		return {
			cancel: function() { clearInterval(counterId); }
		};
    }
  };
});