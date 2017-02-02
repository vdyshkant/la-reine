
/*------------------------------------*\\
  CONTENTS
\\*------------------------------------*/

/*
GENERAL   HTML, BODY, etc.
SHARED    Share anything we can across blocks.
HEADER
MAIN
  sub_block
  sub_block
FOOTER
NOTES
RESET
*/

// SMOOTH DIV SCROLL
// CAROUSEL
// COUNTER
// SLIDER
// COUNTDOWN
// FEATURES-EXPAND
// PARALLAX for tree

/* ================================================
   templates
   ================================================ */





  /* отрабатывать только для определенной страницы
    ================================================ */
  // (function($) {
  //  if($('body').is('.page-home')){
  //    var a = "initial_template";
  //  }
  // })(jQuery); // eof autoFunction
  /* eof ^^^ */





  /* отрабатывать
    ================================================ */
  // (function() {
  //   var a = "initial_template";
  // })(); // eof autoFunction
  /* eof ^^^ */




  /* Code included inside $( document ).ready() will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute. Code included inside $( window ).load(function() { ... }) will run once the entire page (images or iframes), not just the DOM, is ready.
    https://learn.jquery.com/using-jquery-core/document-ready/
    https://www.sitepoint.com/types-document-ready/
    ================================================ */
  // $( document ).ready(function() {
  //   var a = "initial_template";
  // }); // eof .ready
  /* eof ^^^ */





  /* ================================================
     Блок_комментариев_для_раздела $ MAIN
     ================================================ */

  /* === eof $ MAIN == */

  /* Блок_комментариев_для_подраздела
     ================================================ */

  /*
   * Блок_комментариев_для_группы_правил.
   * Хорошо_подходит_для_подробных_пояснений_и_документации.
   */

  /* Обычный_комментарий */


(function($) {
  if($('body').is('.page-homeZZZ')){

    var item = $('.about .container-fluid .content .item').first();
    var itemModal = $('.about .container-fluid .content .item-modal');

    item.mouseenter(function() {
      itemModal.stop().fadeIn(300);
    });

    item.mouseleave(function() {
      itemModal.stop().fadeOut(300);
    });

  }
})(jQuery); // eof autoFunction
/* eof ^^^ */


  /* анимация продукта */


(function($) {
  if($('body').is('.page-home')){

    animatePageComponents();


    function animatePageComponents() {


      setTimeout(function(){
        var val01 = 1;
        $(".product-items .black").css({
            '-webkit-transform': 'scale(1, ' + val01 + ')',
            '-moz-transform': 'scale(1, ' + val01 + ')',
            '-ms-transform': 'scale(1, ' + val01 + ')',
            '-o-transform': 'scale(1, ' + val01 + ')',
            'transform': 'scale(1, ' + val01 + ')'
        });
      }, 50);

      setTimeout(function(){
        var val01 = 0;
        $(".page-home .product-items .product-item").css({
            '-webkit-transform': 'translate(0%, ' + val01 + '%)',
            '-moz-transform': 'translate(0%, ' + val01 + '%)',
            '-ms-transform': 'translate(0%, ' + val01 + '%)',
            '-o-transform': 'translate(0%, ' + val01 + '%)',
            'transform': 'translate(0%, ' + val01 + '%)'

        });
      }, 600);

      setTimeout(function(){
        var val01 = 0;
        $(".page-home .product-items .product-item__thumb").css({
            '-webkit-transform': 'translate(0%, ' + val01 + '%)',
            '-moz-transform': 'translate(0%, ' + val01 + '%)',
            '-ms-transform': 'translate(0%, ' + val01 + '%)',
            '-o-transform': 'translate(0%, ' + val01 + '%)',
            'transform': 'translate(0%, ' + val01 + '%)',
            'opacity': '1'

        });
        $(".page-home .product-items .product-item__inner").css({
            '-webkit-transform': 'translate(-50%, ' + val01 + '%)',
            '-moz-transform': 'translate(-50%, ' + val01 + '%)',
            '-ms-transform': 'translate(-50%, ' + val01 + '%)',
            '-o-transform': 'translate(-50%, ' + val01 + '%)',
            'transform': 'translate(-50%, ' + val01 + '%)',
            'opacity': '1'

        });
      }, 600);


    }

    // scaleX: 0
    // left: "+=50"
    // height: "toggle"
    // transform: "scale(1)"


  }
})(jQuery); // eof анимация продукта
/* eof ^^^ */



/* == eof $ MAIN == */
