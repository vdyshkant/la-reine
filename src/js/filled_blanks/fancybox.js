//  page-window-systems fancybox for awards

if($('body').is('.page-window-systems')){

	$("a.gallery__full").fancybox({

		// Prevent fancybox from causing page to to jump to the top
		helpers: {
			overlay: {
				locked: false
			}
		}
	});

}

//  page-window-systems fancybox for awards END
