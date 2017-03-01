
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
  if($('body').is('.page-homeZZZZZ')){

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

    animateBorderLines();



    setTimeout(function(){
      animateRedLine();
    }, 1800);



    // page-header logo animations:
      setTimeout(function(){
        animateSVGLogoLines();
      }, 2400); /* 0 */

      setTimeout(function(){
        makeLogoHeight();
      }, 3000); /* 600 */

      setTimeout(function(){
        midSVGLogoAnimate();
      }, 3400); /* 1000 */

      setTimeout(function(){
        pTopGrandOpeningAnimate();
      }, 3900); /* 1500 */
    // eof page-header logo animations.


    animateIndexContentNow(animateFooter, '.footer', 750);

    animateIndexContentNow(animateProductItems, '.product.product-items', 600);

    // animateFooter();

    setTimeout(function(){
      animateIndexContentNow(animateAbout, '.about', 700);
    }, 400);

    setTimeout(function(){
      animateIndexContentNow(animateFluid, '.container-fluid', 500);
    }, 400);



    // scaleX: 0
    // left: "+=50"
    // height: "toggle"
    // transform: "scale(1)"


  }
})(jQuery); // eof анимация продукта

// page-header logo animations:
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

    if ((window.matchMedia("(min-width: 960px)").matches)) {
        var leftAndRightLines = $('.logo-frames__bottom-right__top-line, .logo-frames__bottom-right__btm-line, .logo-frames__top-right__btm-line, .logo-frames__top-right__top-line ');
        leftAndRightLines.fadeIn(300);
    }

    var corners = $('.logo-frames__corner');
    corners.fadeIn(300);


  }, 1050);


}
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
      $(".page-header .page-header-logo--btm__inner").css({
          '-webkit-transform': 'translate(0%, ' + val01 + '%)',
          '-moz-transform': 'translate(0%, ' + val01 + '%)',
          '-ms-transform': 'translate(0%, ' + val01 + '%)',
          '-o-transform': 'translate(0%, ' + val01 + '%)',
          'transform': 'translate(0%, ' + val01 + '%)',
          'opacity': '1'

      });
    }, 200);

    // if ((window.matchMedia("(min-width: 960px)").matches)) {
    //
    // }
    //
    // if ((window.matchMedia("(max-width: 959px)").matches)) {
    //
    // }

  // eof OPENING

}
// eof page-header logo animations

function animateFooter() {
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
}

function animateAbout() {
  // bg animation:

  setTimeout(function(){
    var val01 = 0;
    var val02 = val01;
    var essence = $(".page-home .about .about-content__sc");
    essence.css({
        '-webkit-transform': 'translate(' + val01 + ', ' + val02 + '%)',
        '-moz-transform': 'translate(' + val01 + ', ' + val02 + '%)',
        '-ms-transform': 'translate(' + val01 + ', ' + val02 + '%)',
        '-o-transform': 'translate(' + val01 + ', ' + val02 + '%)',
        'transform': 'translate(' + val01 + ', ' + val02 + '%)'
    });
  }, 600);

  setTimeout(function(){
    var val01 = 0;
    var val02 = val01;
    var essence = $(".page-home .about .about-content__sc-inner");
    essence.css({
        '-webkit-transform': 'translate(' + val01 + ', ' + val02 + '%)',
        '-moz-transform': 'translate(' + val01 + ', ' + val02 + '%)',
        '-ms-transform': 'translate(' + val01 + ', ' + val02 + '%)',
        '-o-transform': 'translate(' + val01 + ', ' + val02 + '%)',
        'transform': 'translate(' + val01 + ', ' + val02 + '%)',
        'opacity': '1'
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

function animateIndexContentNow(func, blockID, distFromTop){
  $(window).scroll(function() {
      $(blockID).each(function() {
          var imagePos = $(this).offset().top;
          var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow + distFromTop) {
              func();
          }
      });
  });
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
    $(".page-home .about .container-fluid .item").last().css({
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

function animateProductItems() {


  // setTimeout(function(){
  //   var val01 = 1;
  //   $(".product-items .black").css({
  //       '-webkit-transform': 'scale(1, ' + val01 + ')',
  //       '-moz-transform': 'scale(1, ' + val01 + ')',
  //       '-ms-transform': 'scale(1, ' + val01 + ')',
  //       '-o-transform': 'scale(1, ' + val01 + ')',
  //       'transform': 'scale(1, ' + val01 + ')'
  //   });
  // }, 50);
  //
  // setTimeout(function(){
  //   var val01 = 0;
  //   $(".page-home .product-items .product-item").css({
  //       '-webkit-transform': 'translate(0%, ' + val01 + '%)',
  //       '-moz-transform': 'translate(0%, ' + val01 + '%)',
  //       '-ms-transform': 'translate(0%, ' + val01 + '%)',
  //       '-o-transform': 'translate(0%, ' + val01 + '%)',
  //       'transform': 'translate(0%, ' + val01 + '%)'
  //
  //   });
  // }, 600);
  //
  // setTimeout(function(){
  //   var val01 = 0;
  //   $(".page-home .product-items .product-item__thumb").css({
  //       '-webkit-transform': 'translate(0%, ' + val01 + '%)',
  //       '-moz-transform': 'translate(0%, ' + val01 + '%)',
  //       '-ms-transform': 'translate(0%, ' + val01 + '%)',
  //       '-o-transform': 'translate(0%, ' + val01 + '%)',
  //       'transform': 'translate(0%, ' + val01 + '%)',
  //       'opacity': '1'
  //
  //   });
  //   $(".page-home .product-items .product-item__inner").css({
  //       '-webkit-transform': 'translate(-50%, ' + val01 + '%)',
  //       '-moz-transform': 'translate(-50%, ' + val01 + '%)',
  //       '-ms-transform': 'translate(-50%, ' + val01 + '%)',
  //       '-o-transform': 'translate(-50%, ' + val01 + '%)',
  //       'transform': 'translate(-50%, ' + val01 + '%)',
  //       'opacity': '1'
  //
  //   });
  // }, 600);
  //
  // setTimeout(function(){
  //   var val01 = 0;
  //   $(".page-home .product-items .product-item__title").fadeIn(800)
  // }, 1800);

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
    $(".page-home .product-items .product-item:eq(0)").css({
        '-webkit-transform': 'translate(0%, ' + val01 + '%)',
        '-moz-transform': 'translate(0%, ' + val01 + '%)',
        '-ms-transform': 'translate(0%, ' + val01 + '%)',
        '-o-transform': 'translate(0%, ' + val01 + '%)',
        'transform': 'translate(0%, ' + val01 + '%)'

    });
  }, 600);

  setTimeout(function(){
    var val01 = 0;
    $(".page-home .product-items .product-item:eq(0) .product-item__thumb").css({
        '-webkit-transform': 'translate(0%, ' + val01 + '%)',
        '-moz-transform': 'translate(0%, ' + val01 + '%)',
        '-ms-transform': 'translate(0%, ' + val01 + '%)',
        '-o-transform': 'translate(0%, ' + val01 + '%)',
        'transform': 'translate(0%, ' + val01 + '%)',
        'opacity': '1'

    });
    $(".page-home .product-items .product-item:eq(0) .product-item__inner").css({
        '-webkit-transform': 'translate(-50%, ' + val01 + '%)',
        '-moz-transform': 'translate(-50%, ' + val01 + '%)',
        '-ms-transform': 'translate(-50%, ' + val01 + '%)',
        '-o-transform': 'translate(-50%, ' + val01 + '%)',
        'transform': 'translate(-50%, ' + val01 + '%)',
        'opacity': '1'

    });
  }, 600);

  setTimeout(function(){
    var val01 = 0;
    $(".page-home .product-items .product-item:eq(0) .product-item__title").fadeIn(800);
  }, 1200);

  // 2d.
  setTimeout(function(){
    var val01 = 0;
    $(".page-home .product-items .product-item:eq(1)").css({
        '-webkit-transform': 'translate(0%, ' + val01 + '%)',
        '-moz-transform': 'translate(0%, ' + val01 + '%)',
        '-ms-transform': 'translate(0%, ' + val01 + '%)',
        '-o-transform': 'translate(0%, ' + val01 + '%)',
        'transform': 'translate(0%, ' + val01 + '%)'

    });
  }, 900);//+1200

  setTimeout(function(){
    var val01 = 0;
    $(".page-home .product-items .product-item:eq(1) .product-item__thumb").css({
        '-webkit-transform': 'translate(0%, ' + val01 + '%)',
        '-moz-transform': 'translate(0%, ' + val01 + '%)',
        '-ms-transform': 'translate(0%, ' + val01 + '%)',
        '-o-transform': 'translate(0%, ' + val01 + '%)',
        'transform': 'translate(0%, ' + val01 + '%)',
        'opacity': '1'

    });
    $(".page-home .product-items .product-item:eq(1) .product-item__inner").css({
        '-webkit-transform': 'translate(-50%, ' + val01 + '%)',
        '-moz-transform': 'translate(-50%, ' + val01 + '%)',
        '-ms-transform': 'translate(-50%, ' + val01 + '%)',
        '-o-transform': 'translate(-50%, ' + val01 + '%)',
        'transform': 'translate(-50%, ' + val01 + '%)',
        'opacity': '1'

    });
  }, 900);//+1200

  setTimeout(function(){
    var val01 = 0;
    $(".page-home .product-items .product-item:eq(1) .product-item__title").fadeIn(800);
  }, 1200);//+1800

  // 3d.
  setTimeout(function(){
    var val01 = 0;
    $(".page-home .product-items .product-item:eq(2)").css({
        '-webkit-transform': 'translate(0%, ' + val01 + '%)',
        '-moz-transform': 'translate(0%, ' + val01 + '%)',
        '-ms-transform': 'translate(0%, ' + val01 + '%)',
        '-o-transform': 'translate(0%, ' + val01 + '%)',
        'transform': 'translate(0%, ' + val01 + '%)'

    });
  }, 1500);

  setTimeout(function(){
    var val01 = 0;
    $(".page-home .product-items .product-item:eq(2) .product-item__thumb").css({
        '-webkit-transform': 'translate(0%, ' + val01 + '%)',
        '-moz-transform': 'translate(0%, ' + val01 + '%)',
        '-ms-transform': 'translate(0%, ' + val01 + '%)',
        '-o-transform': 'translate(0%, ' + val01 + '%)',
        'transform': 'translate(0%, ' + val01 + '%)',
        'opacity': '1'

    });
    $(".page-home .product-items .product-item:eq(2) .product-item__inner").css({
        '-webkit-transform': 'translate(-50%, ' + val01 + '%)',
        '-moz-transform': 'translate(-50%, ' + val01 + '%)',
        '-ms-transform': 'translate(-50%, ' + val01 + '%)',
        '-o-transform': 'translate(-50%, ' + val01 + '%)',
        'transform': 'translate(-50%, ' + val01 + '%)',
        'opacity': '1'

    });
  }, 1500);

  setTimeout(function(){
    var val01 = 0;
    $(".page-home .product-items .product-item:eq(2) .product-item__title").fadeIn(800);
  }, 1800);

  // 4th.
  setTimeout(function(){
    var val01 = 0;
    $(".page-home .product-items .product-item:eq(3)").css({
        '-webkit-transform': 'translate(0%, ' + val01 + '%)',
        '-moz-transform': 'translate(0%, ' + val01 + '%)',
        '-ms-transform': 'translate(0%, ' + val01 + '%)',
        '-o-transform': 'translate(0%, ' + val01 + '%)',
        'transform': 'translate(0%, ' + val01 + '%)'

    });
  }, 2100);

  setTimeout(function(){
    var val01 = 0;
    $(".page-home .product-items .product-item:eq(3) .product-item__thumb").css({
        '-webkit-transform': 'translate(0%, ' + val01 + '%)',
        '-moz-transform': 'translate(0%, ' + val01 + '%)',
        '-ms-transform': 'translate(0%, ' + val01 + '%)',
        '-o-transform': 'translate(0%, ' + val01 + '%)',
        'transform': 'translate(0%, ' + val01 + '%)',
        'opacity': '1'

    });
    $(".page-home .product-items .product-item:eq(3) .product-item__inner").css({
        '-webkit-transform': 'translate(-50%, ' + val01 + '%)',
        '-moz-transform': 'translate(-50%, ' + val01 + '%)',
        '-ms-transform': 'translate(-50%, ' + val01 + '%)',
        '-o-transform': 'translate(-50%, ' + val01 + '%)',
        'transform': 'translate(-50%, ' + val01 + '%)',
        'opacity': '1'

    });
  }, 2100);

  setTimeout(function(){
    var val01 = 0;
    $(".page-home .product-items .product-item:eq(3) .product-item__title").fadeIn(800);
  }, 2400);

  // setTimeout(function(){
  //   var val01 = 0;
  //   $(".page-home .product-items .product-item__title").fadeIn(800)
  // }, 1800);

} // eof function.

function animateBorderLines(){


    setTimeout(function(){
      var topLines = $('.decor-top__top-line, .decor-top__btm-line');
      var val01 = 1;

      topLines.css({
        '-webkit-transform': 'scale(' + val01 + ', 1)',
        '-moz-transform': 'scale(' + val01 + ', 1)',
        '-ms-transform': 'scale(' + val01 + ', 1)',
        '-o-transform': 'scale(' + val01 + ', 1)',
        'transform': 'scale(' + val01 + ', 1)'
      });
    }, 0);

    setTimeout(function(){
      var leftAndRightLines = $('.decor-right__top-line, .decor-right__btm-line, .decor-left__top-line, .decor-left__btm-line');
      var val02 = 1;

      leftAndRightLines.css({
        '-webkit-transform': 'scale(1, ' + val02 + ')',
        '-moz-transform': 'scale(1, ' + val02 + ')',
        '-ms-transform': 'scale(1, ' + val02 + ')',
        '-o-transform': 'scale(1, ' + val02 + ')',
        'transform': 'scale(1, ' + val02 + ')'
      });
    }, 600);

    setTimeout(function(){
      var bottomLines = $('.decor-bottom__top-line, .decor-bottom__btm-line');
      var val01 = 1;

      bottomLines.css({
        '-webkit-transform': 'scale(' + val01 + ', 1)',
        '-moz-transform': 'scale(' + val01 + ', 1)',
        '-ms-transform': 'scale(' + val01 + ', 1)',
        '-o-transform': 'scale(' + val01 + ', 1)',
        'transform': 'scale(' + val01 + ', 1)'
      });
    }, 1200);

    setTimeout(function(){
      var bottomLines = $('.decor__corner').fadeIn(400);
    }, 1700);


} // eof 'function animateBorderLines()'

function animateRedLine() {
  var val01 = 0;
  var esc = $('.decor__redline-essence');
  esc.css({
    '-webkit-transform': 'translate(0%, ' + val01 + '%)',
    '-moz-transform': 'translate(0%, ' + val01 + '%)',
    '-ms-transform': 'translate(0%, ' + val01 + '%)',
    '-o-transform': 'translate(0%, ' + val01 + '%)',
    'transform': 'translate(0%, ' + val01 + '%)',
    'opacity': '1'
  });
} // eof function

/* eof ^^^ */

// custom scroll

(function($){
    $(window).on("load",function(){
        $(".red-scroll").mCustomScrollbar();
    });
})(jQuery);

// eof custom scroll

// 4 products-top
(function($) {
 if($('.product').is('.product-topFALSEZZZ')){

   if ((window.matchMedia("(min-width: 960px)").matches)) {

     var wScroll = $(window).scrollTop();
     function animate (selector, container, startX = 0, endX, startY, endY = 0, startAngle, endAngle, startScale, endScale, transitionDebth) {
       var mult = transitionDebth || 1 // not used
         , wHeight = $(window).height
         , contHeight = $(container).height()
         , contOffsTop = $(container).offset().top
         , transitionEndPoint = contHeight * transitionDebth
         , steps = contHeight
         , cWidth = $(container).width()
         , x = startX
         , y = startY
         , angle = startAngle || 0
         , scale = startScale || 1
         , coef =  null;

       if(
         wScroll >= contOffsTop &&
         wScroll <= (contOffsTop + contHeight)
       ) {
           coef = ((wScroll - contOffsTop) / contHeight * mult).toFixed(8);
           x = startX + endX * coef;
           y = startY + endY * coef;
           angle = startAngle + endAngle * coef;
           scale = startScale + endScale * coef;

           $(selector).css({
             'webkit-transform': 'translate('+x+'%, '+y+'%) rotate('+angle+'deg) scale('+scale+')',
             'moz-transform':    'translate('+x+'%, '+y+'%) rotate('+angle+'deg) scale('+scale+')',
             'transform':        'translate('+x+'%, '+y+'%) rotate('+angle+'deg) scale('+scale+')',
           });
       }
     }

     $(window).scroll(function(){
       wScroll = $(this).scrollTop();
       //-   selector, container, startX, endX, startY, endY, startAngle, endAngle, startScale, endScale, transitionDebth
       animate('.fly-1', '.brills .brills-container', 2, -100, 3, -80, 0, 440, 1, 0.8, 0.4);
       animate('.fly-2', '.brills .brills-container', 0, -175, 0, 195, 0, -40, 1, 1, 1.1);
       animate('.fly-3', '.brills .brills-container', 0, -490, 0, 120, 0, 120, 1, 0.8, 0.65);
       animate('.fly-4', '.brills .brills-container', 0, -36, 0, 120, 0, 180, 1, -.9, 0.5);
       animate('.fly-5', '.brills .brills-container', 0, -126, 0, 20, 0, 180, 1, -.9, 0.5);
     });
   }

 }
})(jQuery); // eof 4 products-top

// 4 products-top
(function($) {
 if($('.product').is('.product-itemsFALSEZZZ')){

   if ((window.matchMedia("(min-width: 960px)").matches)) {

     var wScroll = $(window).scrollTop();
     function animate (selector, container, startX = 0, endX, startY, endY = 0, startAngle, endAngle, startScale, endScale, transitionDebth) {
       var mult = transitionDebth || 1, // not used
          wHeight = $(window).height,
          contHeight = $(container).height(),
          contOffsTop = $(container).offset().top,
          transitionEndPoint = contHeight * transitionDebth,
          steps = contHeight,
          cWidth = $(container).width(),
          x = startX,
          y = startY,
          angle = startAngle || 0,
          scale = startScale || 1,
          coef =  null;

       if(
         wScroll >= contOffsTop &&
         wScroll <= (contOffsTop + contHeight)
       ) {
           coef = ((wScroll - contOffsTop) / contHeight * mult).toFixed(8);
           x = startX + endX * coef;
           y = startY + endY * coef;
           angle = startAngle + endAngle * coef;
           scale = startScale + endScale * coef;

           $(selector).css({
             'webkit-transform': 'translate('+x+'%, '+y+'%) rotate('+angle+'deg) scale('+scale+')',
             'moz-transform':    'translate('+x+'%, '+y+'%) rotate('+angle+'deg) scale('+scale+')',
             'transform':        'translate('+x+'%, '+y+'%) rotate('+angle+'deg) scale('+scale+')',
           });
       }
     }

     $(window).scroll(function(){
       wScroll = $(this).scrollTop();
        //  selector, container, startX, endX, startY, endY, startAngle, endAngle, startScale, endScale, transitionDebth
       animate('.fly-6', '.brills-btm .brills-btm-container', 2, -400, 3, 400, 0, -440, 1, 1.8, 0.4);
       animate('.fly-7', '.brills-btm .brills-btm-container', 0, -275, 0, 395, 0, -400, 1, 1, 0.33);
       animate('.fly-8', '.brills-btm .brills-btm-container', 0, -380, 0, 20, 0, 60, 1, 0.8, 0.3);
     });
   }
 }
})(jQuery); // eof 4 products-top
/* eof ^^^ */


// 4 products-items


/* ================================================
   parallax-footer
   ================================================ */

   $(window).on('mousemove', function(e) {
           var w = $(window).width();
           var h = $(window).height();
           var offsetX = 0.5 - e.pageX / w;
           var offsetY = 0.5 - e.pageY / h;

           $(".pre-footer-scene .parallax").each(function(i, el) {
               var offset = parseInt($(el).data('offset'));
               var translate = "translate3d(" + Math.round(offsetX * offset) + "px," + Math.round(offsetY * offset) + "px, 0px)";

               $(el).css({
                   '-webkit-transform': translate,
                   'transform': translate,
                   'moz-transform': translate
               });
           });
           $(".pre-footer-scene .parallax-rev").each(function(i, el) {
               var offset = -Math.abs(parseInt($(el).data('offset')));
               var translate = "translate3d(" + Math.round(offsetX * offset) + "px," + Math.round(offsetY * offset) + "px, 0px)";

               $(el).css({
                   '-webkit-transform': translate,
                   'transform': translate,
                   'moz-transform': translate
               });
           });
       });




  /* eof parallax-footer
    ================================================ */


/* == eof $ MAIN == */



// parallax-falling-brills
(function() {
  if ((window.matchMedia("(min-width: 960px)").matches)) {

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
            console.log("true!");
            $(prlxBg).css({
                'transform': 'translateY(' + (($(prlxContainer).offset().top - wScroll) / $(window).height() * 100) * factor + '%)'
            });
        }
    }

    $(window).scroll(function() {
        wScroll = $(this).scrollTop();

        if ($('.parallax-index').length > 0) {
            parallax('.brills-parallax-box', '.parallax-index', -3.6);
        }
    });
  }
})();
// EOFparallax-brills
