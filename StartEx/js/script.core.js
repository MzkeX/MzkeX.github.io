;(function($){

	"use strict";

	var Core = {

		DOMReady: function(){

			var self = this;

			/* self.NameFunction*/

		},


		windowLoad: function(){

			var self = this;

			/* self.NameFunction*/

		},


		/*
		*
		*	NameFunction
		*
		*/
		

		/*
		*
		*	NameFunction
		*
		*/

		NameFunction: function() {

		},

		/*
		*
		*	NameFunction
		*
		*/

		NameFunction: function() {

		},

		/*
		*
		*	NameFunction
		*
		*/

		NameFunction: function() {

		},

	}


	$(document).ready(function(){

		Core.DOMReady();

		$("#bgndVideo").YTPlayer();

		$("#bgndVideo").on("YTPPlay", function(){
			$("#togglePlay").removeClass("play pause");
			$("#togglePlay").addClass("pause");
		});

		$("#bgndVideo").on("YTPPause", function(){
			$("#togglePlay").removeClass("play pause");
			$("#togglePlay").addClass("play");
		});

		$('#bgndVideo').YTPApplyFilters({
			grayscale: 52
		})

	});

	$(window).load(function(){

		Core.windowLoad();

	});

})(jQuery);