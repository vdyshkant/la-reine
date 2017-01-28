// parallax



$(document).ready(function() {

	(function() {
		 var isIE = navigator.userAgent.indexOf("MSIE ") > 0 || navigator.userAgent.indexOf("Trident") > 0 || navigator.userAgent.indexOf("Edge") > 0,
				 wScroll = $(window).scrollTop();

		 // parallax effect function
		 function parallax(prlxBg, prlxContainer, factor) {
				 if (isIE) {
						 $(prlxBg).css({
								 'transform': 'translateY(0px)'
						 });
						 return;
				 }
				 if ((wScroll + $(window).height()) >= $(prlxBg).offset().top) {
						//  console.log("true!");
						 $(prlxBg).css({
								 'transform': 'translateY(' + (($(prlxContainer).offset().top - wScroll) / $(window).height() * 100) * factor + '%)'
						 });
				 }
		 }

		 $(window).scroll(function() {
				 wScroll = $(this).scrollTop();

				 if ($('.parallax-index').length > 0) {
						 parallax('.window__tree__essence', '.parallax-index', 0.2);
				 }
		 });
	})();


}); // eof .ready


// parallax END