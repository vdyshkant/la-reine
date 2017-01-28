// $( document ).ready(function() {
$(window).load(function() {

	if($('body').is('.page-affair')){






    (function($) {


      /* clock timer-00
         ================================================ */

         $("#DateCountdown0").TimeCircles();
         $("#DateCountdown1").TimeCircles();
         $("#DateCountdown2").TimeCircles();
         $("#DateCountdown3").TimeCircles();
         $("#DateCountdown4").TimeCircles();
         // $("#DateCountdown5").TimeCircles();


          $("#CountDownTimer").TimeCircles({ time: { Days: { show: false }, Hours: { show: false } }});
          $("#PageOpenTimer").TimeCircles();

          var updateTime = function(){
              var date = $("#date").val();
              var time = $("#time").val();
              var datetime = date + ' ' + time + ':00';
              $("#DateCountdown0").data('date', datetime).TimeCircles().start();
              $("#DateCountdown1").data('date', datetime).TimeCircles().start();
              $("#DateCountdown2").data('date', datetime).TimeCircles().start();
              $("#DateCountdown3").data('date', datetime).TimeCircles().start();
              $("#DateCountdown4").data('date', datetime).TimeCircles().start();
          };
          $("#date").change(updateTime).keyup(updateTime);
          $("#time").change(updateTime).keyup(updateTime);

          // Start and stop are methods applied on the public TimeCircles instance
          $(".startTimer").click(function() {
              $("#CountDownTimer").TimeCircles().start();
          });
          $(".stopTimer").click(function() {
              $("#CountDownTimer").TimeCircles().stop();
          });

          // Fade in and fade out are examples of how chaining can be done with TimeCircles
          $(".fadeIn").click(function() {
              $("#PageOpenTimer").fadeIn();
          });
          $(".fadeOut").click(function() {
              $("#PageOpenTimer").fadeOut();
          });


      /* === eof clock timer-00 == */


    })(jQuery); // eof autoFunction
    /* eof ^^^ */






    (function($) {


      /* clock timer-01
         ================================================ */

         $(".dateCountDown-01-1").TimeCircles();
         $(".dateCountDown-01-2").TimeCircles();
         $(".dateCountDown-01-3").TimeCircles();
         $(".dateCountDown-01-4").TimeCircles();
         $(".dateCountDown-01-5").TimeCircles();
         // $("#DateCountdown5").TimeCircles();


          $("#CountDownTimer").TimeCircles({ time: { Days: { show: false }, Hours: { show: false } }});
          $("#PageOpenTimer").TimeCircles();

          var updateTime = function(){
              var date = $("#date").val();
              var time = $("#time").val();
              var datetime = date + ' ' + time + ':00';
              $(".dateCountDown-01-1").data('date', datetime).TimeCircles().start();
              $(".dateCountDown-01-2").data('date', datetime).TimeCircles().start();
              $(".dateCountDown-01-3").data('date', datetime).TimeCircles().start();
              $(".dateCountDown-01-4").data('date', datetime).TimeCircles().start();
              $(".dateCountDown-01-5").data('date', datetime).TimeCircles().start();
          };
          $("#date").change(updateTime).keyup(updateTime);
          $("#time").change(updateTime).keyup(updateTime);

          // Start and stop are methods applied on the public TimeCircles instance
          $(".startTimer").click(function() {
              $("#CountDownTimer").TimeCircles().start();
          });
          $(".stopTimer").click(function() {
              $("#CountDownTimer").TimeCircles().stop();
          });

          // Fade in and fade out are examples of how chaining can be done with TimeCircles
          $(".fadeIn").click(function() {
              $("#PageOpenTimer").fadeIn();
          });
          $(".fadeOut").click(function() {
              $("#PageOpenTimer").fadeOut();
          });


      /* === eof clock timer-01 == */


    })(jQuery); // eof autoFunction
    /* eof ^^^ */







    (function($) {


      /* clock timer-02
         ================================================ */

         $(".dateCountDown-02-1").TimeCircles();
         $(".dateCountDown-02-2").TimeCircles();
         $(".dateCountDown-02-3").TimeCircles();
         $(".dateCountDown-02-4").TimeCircles();
         $(".dateCountDown-02-5").TimeCircles();
         // $("#DateCountdown5").TimeCircles();


          $("#CountDownTimer").TimeCircles({ time: { Days: { show: false }, Hours: { show: false } }});
          $("#PageOpenTimer").TimeCircles();

          var updateTime = function(){
              var date = $("#date").val();
              var time = $("#time").val();
              var datetime = date + ' ' + time + ':00';
              $(".dateCountDown-02-1").data('date', datetime).TimeCircles().start();
              $(".dateCountDown-02-2").data('date', datetime).TimeCircles().start();
              $(".dateCountDown-02-3").data('date', datetime).TimeCircles().start();
              $(".dateCountDown-02-4").data('date', datetime).TimeCircles().start();
              $(".dateCountDown-02-5").data('date', datetime).TimeCircles().start();
          };
          $("#date").change(updateTime).keyup(updateTime);
          $("#time").change(updateTime).keyup(updateTime);

          // Start and stop are methods applied on the public TimeCircles instance
          $(".startTimer").click(function() {
              $("#CountDownTimer").TimeCircles().start();
          });
          $(".stopTimer").click(function() {
              $("#CountDownTimer").TimeCircles().stop();
          });

          // Fade in and fade out are examples of how chaining can be done with TimeCircles
          $(".fadeIn").click(function() {
              $("#PageOpenTimer").fadeIn();
          });
          $(".fadeOut").click(function() {
              $("#PageOpenTimer").fadeOut();
          });


      /* === eof clock timer-02 == */


    })(jQuery); // eof autoFunction
    /* eof ^^^ */






    (function($) {



        /* clock timer-03
           ================================================ */

           $(".dateCountDown-03-1").TimeCircles();
           $(".dateCountDown-03-2").TimeCircles();
           $(".dateCountDown-03-3").TimeCircles();
           $(".dateCountDown-03-4").TimeCircles();
           $(".dateCountDown-03-5").TimeCircles();
           // $("#DateCountdown5").TimeCircles();


            $("#CountDownTimer").TimeCircles({ time: { Days: { show: false }, Hours: { show: false } }});
            $("#PageOpenTimer").TimeCircles();

            var updateTime = function(){
                var date = $("#date").val();
                var time = $("#time").val();
                var datetime = date + ' ' + time + ':00';
                $(".dateCountDown-03-1").data('date', datetime).TimeCircles().start();
                $(".dateCountDown-03-2").data('date', datetime).TimeCircles().start();
                $(".dateCountDown-03-3").data('date', datetime).TimeCircles().start();
                $(".dateCountDown-03-4").data('date', datetime).TimeCircles().start();
                $(".dateCountDown-03-5").data('date', datetime).TimeCircles().start();
            };
            $("#date").change(updateTime).keyup(updateTime);
            $("#time").change(updateTime).keyup(updateTime);

            // Start and stop are methods applied on the public TimeCircles instance
            $(".startTimer").click(function() {
                $("#CountDownTimer").TimeCircles().start();
            });
            $(".stopTimer").click(function() {
                $("#CountDownTimer").TimeCircles().stop();
            });

            // Fade in and fade out are examples of how chaining can be done with TimeCircles
            $(".fadeIn").click(function() {
                $("#PageOpenTimer").fadeIn();
            });
            $(".fadeOut").click(function() {
                $("#PageOpenTimer").fadeOut();
            });


        /* === eof clock timer-03 == */



    })(jQuery); // eof autoFunction
    /* eof ^^^ */





























  } // eof if ($('body').is('.page-affair'))
}); // eof .ready
