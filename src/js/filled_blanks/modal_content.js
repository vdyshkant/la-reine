// main modal

if($('body').is('.page-index')){

	showMainModal();

	closeMainModal();

	hideMainOverlay();


	$('html body').on('keyup', function(e) {
		if (e.keyCode === 27) {
				$('.modal-content').fadeOut(300);
				$('.modal-index-overlay').fadeOut(300);
		}
  });

}

function showMainModal() {
    $('.request-callback').click(function() {
        $('.modal-content').fadeIn(300);
        $('.modal-index-overlay').fadeIn(300);
    });
}

function closeMainModal() {
    $('.modal-content-close').click(function() {
        $('.modal-content').fadeOut(300);
        $('.modal-index-overlay').fadeOut(300);
    });
}

function hideMainOverlay() {
    $('.modal-index-overlay').click(function() {
        $('.modal-content').fadeOut(300);
        $('.modal-index-overlay').fadeOut(300);
    });
}


// main modal eof