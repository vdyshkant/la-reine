// burger
$(document).ready(function() {
	// if($('body').is('.page-index')){
    if ((window.matchMedia("(max-width: 1359px)").matches)) {

      	$('#nav-icon').click(function(){
      		$(this).addClass('open');
      		$('.nav-icon-clone').addClass('open');
          // $('[name="burger-sfield"]').focus();
          // ISSUE::http://stackoverflow.com/a/26754609
          // ISSUE::http://stackoverflow.com/questions/9596419/what-are-some-reasons-for-jquery-focus-not-working

          setTimeout(function(){
              $('[name="burger-sfield"]').focus();
          });
      	});

        // slideDown callback block
        $('#burger-callback').click(function(){
          // close offcanvas nav panel
            // making burger icon to default
            $('#nav-icon').removeClass('open');
            $('.nav-icon-clone').removeClass('open');
            // hide nav panel::
            $('.js-nav').removeClass('opened');
                $('.offcanvas-nav-side-wrapper').removeClass('wide-opened');
                $('.subm__burger_search').removeClass('expanded');
                  // strip all classes for inside blocks
                  // Когда менюшка вся свернулась, необходимо убрать навешанные классы и события, чтоб при последующем вызове у нас:
                      // hiding all submenus at the left
                      $('.offcanvas-nav-side__sub-menus').fadeOut(10);
                      // disabling styles for the all pressed buttons
                      for (var i = 0; i < 99; i++) {
                        $('.offcanvas-nav-side__menu__item[data-offcanvas-menu="' + i + '"]').removeClass('opened');
                      }
                      // eof ^^^^

          $('#burger-callback .svg-icon').toggleClass('opened');
          $('.js-right-side').addClass('opened').slideToggle(300);
          $('.overlay__offcanvas').addClass('visible');
        });


        $('.overlay__offcanvas').click(function(){
          // $('.burger').removeClass('open');
          // $('.js-nav').removeClass('opened');

          // making burger icon to default
          $('#nav-icon').removeClass('open');
          $('.nav-icon-clone').removeClass('open');


          $('#burger-callback .svg-icon').removeClass('opened');
          $('.js-right-side').slideUp(300);
          // hide nav panel::
          $('.js-nav').removeClass('opened');
              $('.offcanvas-nav-side-wrapper').removeClass('wide-opened');
              $('.subm__burger_search').removeClass('expanded');
          // hide overlay::
          $('.overlay__offcanvas').removeClass('visible');

          // tablet
          // сворачиваем всю менюшку влеаво:
          $('.offcanvas-nav-side').removeClass('opened');
          $('.offcanvas-nav-side-wrapper').removeClass('wide-opened');
            $('.subm__burger_search').removeClass('expanded');

          // Когда менюшка вся свернулась, необходимо убрать навешанные классы и события, чтоб при последующем вызове у нас:
              // hiding all submenus at the left
              $('.offcanvas-nav-side__sub-menus').fadeOut(10);
              // disabling styles for the all pressed buttons
              for (var i = 0; i < 99; i++) {
                $('.offcanvas-nav-side__menu__item[data-offcanvas-menu="' + i + '"]').removeClass('opened');
              }
          // eof tablet
        });



        // Нажатие на бургер кнопку на таблете:
        $('#nav-icon').click(function(){

          // если открыта callback менюха - плавно её поднимаем:
          $('.js-right-side').slideUp(300);
          $('#burger-callback .svg-icon').removeClass('opened');

          // overlay appearing
          $('.overlay__offcanvas').addClass('visible');

          // выезд менюхи
          $('.offcanvas-nav-side').addClass('opened');
              $('.offcanvas-nav-side-wrapper').addClass('wide-opened');
              $('.subm__burger_search').addClass('expanded');

          // при выезде меню, активируем первый пункт меню:
          $('.offcanvas-nav-side__menu__item[data-offcanvas-menu="9"]').addClass('opened');
            // и выводим содержимое первого пункта меню в контентной части меню:
            $('.offcanvas-nav-side__sub-menus[data-offcanvas-subm="9"]').fadeIn(10);

        }); // eof #burger-btn').click

        /*
        - необходим overlay и его отработка
          - по клику на его поле
            - сворачиваем менюшку в сторону
            - меняем бургер на исходник

        */

        // закрытие меню по клику на блок:
        $('.js-nav-close').click(function(e) {
          e.preventDefault();

          // анимируем бургер на закрытый
          $('#nav-icon').removeClass('open');
          $('.nav-icon-clone').removeClass('open');

          // overlay appearing
          $('.overlay__offcanvas').removeClass('visible');

          // сворачиваем всю менюшку влеаво:
          $('.offcanvas-nav-side').removeClass('opened');
          $('.offcanvas-nav-side-wrapper').removeClass('wide-opened');
            $('.subm__burger_search').removeClass('expanded');

          // Когда менюшка вся свернулась, необходимо убрать навешанные классы и события, чтоб при последующем вызове у нас:
              // hiding all submenus at the left
              $('.offcanvas-nav-side__sub-menus').fadeOut(10);
              // disabling styles for the all pressed buttons
              for (var i = 0; i < 99; i++) {
                $('.offcanvas-nav-side__menu__item[data-offcanvas-menu="' + i + '"]').removeClass('opened');
              }


        });


/*

1. При нажатии на кнопку необходимо активировать первый пункт меню, при условиях:
  - если всё меню до клика было закрыто
2. После активации первого пункта меню, нужно "выехать" всему меню;

*/


        // burger-callback


        // eof slideDown callback block

    } // eof matchMedia
  // } // eof body.is
}); // eof ready
// eof burger