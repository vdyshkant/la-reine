// breadcrumbs '...'


(function($) {

    var nativeInnerHtml = $('.breadcrumbs li:nth-child(n+2):not(:last-child) a').html();

    window.addEventListener("resize", function() {
      cutBreadcrumbs();

      if ($(window).width() > 768) {

        $('.breadcrumbs li:last-child a').removeClass('overcrumbs');
        $('.breadcrumbs li:nth-child(n+2):not(:last-child) a').html(nativeInnerHtml);
      }

    });

    cutBreadcrumbs();


    function cutBreadcrumbs() {
      if ($(window).width() < 768) {
          // You pass-in jQuery and then alias it with the $-sign
          // So your internal code doesn't change
          var count = $('.breadcrumbs li').length;
          if (count >= 3) {
              $('.breadcrumbs li:nth-child(n+2):not(:last-child) a').html('...');
          }
          $('.breadcrumbs li:last-child a').addClass('overcrumbs');
          // http://stackoverflow.com/questions/4291151/jquery-count-child-elements

          // counting width for whole vreadcrumbs
          var parent = $('.breadcrumbs .shell').width();
              parent += 20; // px, eg shell paddings
          // var first = $('.breadcrumbs li:not(:last-child)').outerWidth(true);

          var w = 0;

          jQuery('.breadcrumbs li:last-child').each(function() {
              jQuery(this).prevAll().each(function() {
                  w += $(this).outerWidth(true);
                  // console.log(w);
              });
          });
          var newWidthForLastEl = parent - w - 10;

          $('.breadcrumbs li:last-child').width(newWidthForLastEl);
      }
    }

})(jQuery);

// EOF breadcrumbs '...'