(function($){

	"use strict";

	var win = $(window);

	win.on("scroll", function(){

		var scroll_top = win.scrollTop();

		if(scroll_top > 200){

			console.log("you are crossed the limit");

		}

	});


})(jQuery);