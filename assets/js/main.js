$(document).ready(function($){
	"use strict";

	// WOW Js Active
	new WOW().init();

	// ---- Active
    $(".owl").owlCarousel();
    // Owl Next Privew Change
    //$( ".owl-prev").html('<i class="fa screenshort-arow fa-chevron-left"></i>');
    //$( ".owl-next").html('<i class="fa screenshort-arow fa-chevron-right"></i>');


    //OLW carousel for team
    $('.owl-carousel-item').owlCarousel({
            loop:true,
            margin:20,
            nav:false,
            items:4,
            responsive:{
                0:{
                    items:1
                },
                576:{
                    items:2
                },
                768:{
                    items:3
                },
                992:{
                    items:4
                }
            }
        });

        //magnific-popup for video
    $('#youtube-video').magnificPopup({
          type:'iframe',
          iframe: {
              patterns: {
                youtube: {
                  index: 'youtube.com/', 
                  id: 'v=', 
                  src: 'http://www.youtube.com/embed/%id%?autoplay=1' 
                }
              },
              srcAction: 'iframe_src', 
            }
      });

          //plugin/skill.bars.jquery.js for skills bar
      $('.skillbar').skillBars({

      });


      //counter js
      $('.counter-number').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    //mixitup portfolio section
    var mixer = mixitup('.portfolio-box');

    //ma
    $('.image-link').magnificPopup({type:'image'});
}(jQuery));
