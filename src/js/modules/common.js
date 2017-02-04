
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

    setTimeout(function(){
      var val01 = 0;
      $(".page-home .footer .footer-content").css({
          '-webkit-transform': 'translate(0%, ' + val01 + '%)',
          '-moz-transform': 'translate(0%, ' + val01 + '%)',
          '-ms-transform': 'translate(0%, ' + val01 + '%)',
          '-o-transform': 'translate(0%, ' + val01 + '%)',
          'transform': 'translate(0%, ' + val01 + '%)',
          'opacity': '1'

      });
    }, 300);
    setTimeout(function(){
      $(".page-home .footer .footer-top").css({
          'opacity': '1'

      });
    }, 900);
    setTimeout(function(){
      var val01 = 1;
      $(".page-home .footer .footer-bottom-container__black").css({
        '-webkit-transform': 'scale(' + val01 + ', 1)',
        '-moz-transform': 'scale(' + val01 + ', 1)',
        '-ms-transform': 'scale(' + val01 + ', 1)',
        '-o-transform': 'scale(' + val01 + ', 1)',
        'transform': 'scale(' + val01 + ', 1)'

      });
    }, 1500);
    setTimeout(function(){
      var val01 = 1;
      $(".page-home .footer .footer-bottom-container__inner").animate({ opacity: 1 });
    }, 2200);

    setTimeout(function(){
      animateSVGLogoLines();
    }, 0);

    setTimeout(function(){
      makeLogoHeight()
    }, 600);

    setTimeout(function(){
      midSVGLogoAnimate();
    }, 1000);

    setTimeout(function(){
      pTopGrandOpeningAnimate();
    }, 1500);

    setTimeout(function(){
      animateThird();
    }, 400);

    setTimeout(function(){
      animateFluid();
    }, 400);


    // scaleX: 0
    // left: "+=50"
    // height: "toggle"
    // transform: "scale(1)"


  }
})(jQuery); // eof анимация продукта

function makeLogoHeight() {
  // logo wrapper
  setTimeout(function(){
    $(".page-header .logo--mid__wrapper").animate( {'height': '100%'} );
  }, 0);
}

function midSVGLogoAnimate() {

  // css needed:



  // eof css needed

  // LOGO:
    // logo essence
    setTimeout(function(){
      var val01 = 0;
      $(".page-header .logo--mid__essence").css({
          '-webkit-transform': 'translate(0%, ' + val01 + '%)',
          '-moz-transform': 'translate(0%, ' + val01 + '%)',
          '-ms-transform': 'translate(0%, ' + val01 + '%)',
          '-o-transform': 'translate(0%, ' + val01 + '%)',
          'transform': 'translate(0%, ' + val01 + '%)',
          'opacity': '1'

      });
    }, 0);
  // eof LOGO

}

function pTopGrandOpeningAnimate() {

  // GRAND:
    // grand wrapper
    setTimeout(function(){
      var val01 = 0;
      $(".page-header .page-header-logo--top").css({
          '-webkit-transform': 'translate(0%, ' + val01 + '%)',
          '-moz-transform': 'translate(0%, ' + val01 + '%)',
          '-ms-transform': 'translate(0%, ' + val01 + '%)',
          '-o-transform': 'translate(0%, ' + val01 + '%)',
          'transform': 'translate(0%, ' + val01 + '%)',
      });
    }, 0);


    // grand essence
    setTimeout(function(){
      var val01 = 0;
      $(".page-header .page-header-logo--top__essence").css({
          '-webkit-transform': 'translate(0%, ' + val01 + '%)',
          '-moz-transform': 'translate(0%, ' + val01 + '%)',
          '-ms-transform': 'translate(0%, ' + val01 + '%)',
          '-o-transform': 'translate(0%, ' + val01 + '%)',
          'transform': 'translate(0%, ' + val01 + '%)',
          'opacity': '1'

      });
    }, 0);
  // eof GRAND

  // OPENING:
    // opening wrapper
    setTimeout(function(){
      var val01 = 0;
      $(".page-header .page-header-logo--bottom").css({
          '-webkit-transform': 'translate(0%, ' + val01 + '%)',
          '-moz-transform': 'translate(0%, ' + val01 + '%)',
          '-ms-transform': 'translate(0%, ' + val01 + '%)',
          '-o-transform': 'translate(0%, ' + val01 + '%)',
          'transform': 'translate(0%, ' + val01 + '%)',
      });
    }, 400);


    // opening essence
    setTimeout(function(){
      var val01 = 0;
      $(".page-header .page-header-logo--btm__essence").css({
          '-webkit-transform': 'translate(0%, ' + val01 + '%)',
          '-moz-transform': 'translate(0%, ' + val01 + '%)',
          '-ms-transform': 'translate(0%, ' + val01 + '%)',
          '-o-transform': 'translate(0%, ' + val01 + '%)',
          'transform': 'translate(0%, ' + val01 + '%)',
          'opacity': '1'

      });
    }, 200);
  // eof OPENING

}

function animateSVGLogoLines() {
  setTimeout(function(){
    var val01 = 1;
    var essence = $(" .logo-frames__top-left__top-line, .logo-frames__top-left__btm-line, .logo-frames__bottom-left__top-line, .logo-frames__bottom-left__btm-line");
    essence.css({
      '-webkit-transform': 'scale(1, ' + val01 + ')',
      '-moz-transform': 'scale(1, ' + val01 + ')',
      '-ms-transform': 'scale(1, ' + val01 + ')',
      '-o-transform': 'scale(1, ' + val01 + ')',
      'transform': 'scale(1, ' + val01 + ')'
    });

  }, 0);
  setTimeout(function(){
    var val01 = 1;
    var essence2 = $(' .logo-frames__corner, .logo-frames__bottom-right__top-line, .logo-frames__bottom-right__btm-line, .logo-frames__top-right__btm-line, .logo-frames__top-right__top-line ');
    essence2.fadeIn(300);

  }, 1050);
}

function animateFluid() {
  setTimeout(function(){
    var val01 = 0;
    $(".page-home .about .container-fluid").css({
        '-webkit-transform': 'translate(0%, ' + val01 + '%)',
        '-moz-transform': 'translate(0%, ' + val01 + '%)',
        '-ms-transform': 'translate(0%, ' + val01 + '%)',
        '-o-transform': 'translate(0%, ' + val01 + '%)',
        'transform': 'translate(0%, ' + val01 + '%)',
    });
  }, 1000);

  // shadow:
  setTimeout(function(){
    var shadeColor = 'rgba(0, 0, 0, 0.2)';
    $(".page-home .about .container-fluid").css({
        'box-shadow': '3px 5px 5px 0px ' + shadeColor
    });
  }, 1600);

  setTimeout(function(){
    var val01 = 0;
    $(".page-home .about .container-fluid .content").css({
        '-webkit-transform': 'translate(0%, ' + val01 + '%)',
        '-moz-transform': 'translate(0%, ' + val01 + '%)',
        '-ms-transform': 'translate(0%, ' + val01 + '%)',
        '-o-transform': 'translate(0%, ' + val01 + '%)',
        'transform': 'translate(0%, ' + val01 + '%)',
        'opacity': '1'

    });
  }, 1000);
}

function animateThird() {
  // bg animation:
  setTimeout(function(){
    var val01 = 1;
    var essence = $(".page-home .about .about-content__sc");

    essence.css({
      '-webkit-transform': 'scale(1, ' + val01 + ')',
      '-moz-transform': 'scale(1, ' + val01 + ')',
      '-ms-transform': 'scale(1, ' + val01 + ')',
      '-o-transform': 'scale(1, ' + val01 + ')',
      'transform': 'scale(1, ' + val01 + ')'
    });
  }, 600);

  // logo animation:
  setTimeout(function(){
    var val01 = 0;
    var wrapper = $(".page-home .about .about-top-logo");

    wrapper.css({
        '-webkit-transform': 'translate(0%, ' + val01 + '%)',
        '-moz-transform': 'translate(0%, ' + val01 + '%)',
        '-ms-transform': 'translate(0%, ' + val01 + '%)',
        '-o-transform': 'translate(0%, ' + val01 + '%)',
        'transform': 'translate(0%, ' + val01 + '%)'
    });
  }, 1000);

  setTimeout(function(){
    var val01 = 0;
    var essence = $(".page-home .about .innersvg__main-title");

    essence.css({
        '-webkit-transform': 'translate(0%, ' + val01 + '%)',
        '-moz-transform': 'translate(0%, ' + val01 + '%)',
        '-ms-transform': 'translate(0%, ' + val01 + '%)',
        '-o-transform': 'translate(0%, ' + val01 + '%)',
        'transform': 'translate(0%, ' + val01 + '%)',
        'opacity': '1'
    });
  }, 1000);
  setTimeout(function(){
    var val01 = 0;
    var essence = $(".page-home .about .innersvg__subtitle");

    essence.css({
        '-webkit-transform': 'translate(0%, ' + val01 + '%)',
        '-moz-transform': 'translate(0%, ' + val01 + '%)',
        '-ms-transform': 'translate(0%, ' + val01 + '%)',
        '-o-transform': 'translate(0%, ' + val01 + '%)',
        'transform': 'translate(0%, ' + val01 + '%)',
        'opacity': '1'
    });
  }, 1300);


}

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




} // eof function.

/* eof ^^^ */



/* == eof $ MAIN == */
