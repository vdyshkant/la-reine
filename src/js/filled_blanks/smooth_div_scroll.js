// smooth div scroll


$(document).ready(function() {

	 if($('body').is('.page-index')){
		 $("#makeMeScrollable").smoothDivScroll({
				//  mousewheelScrolling: "allDirections",
				//  manualContinuousScrolling: true,
				//  autoScrollingMode: "onStart"
				mousewheelScrolling: true,
				manualContinuousScrolling: true,
				visibleHotSpotBackgrounds: "always",
				autoScrollingMode: "always"
		 });
	 }

});

// smooth div scroll end