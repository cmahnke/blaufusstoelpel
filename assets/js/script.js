(function ($) {
  'use strict';

  var options = {};
  var header = new Headroom(document.getElementById('header'), options);
  header.init();

  // Background-images
  $('[data-background]').each(function () {
    $(this).css({
      'background-image': 'url(' + $(this).data('background') + ')'
    });
  });

  // Masonry
  setTimeout(function(){
    $('.masonry-container').masonry({
      itemSelector: '.masonry-container > div',
      columnWidth: 1
    });
  }, 500);

  $('.featured-post-slider').slick({
    dots: false,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 15000,
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  if (window.iiifAnimations !== undefined) {
    for (let i = 0; i < window.iiifAnimations.length; ++i) {
        var iiif = window.iiifAnimations[i];
        iiif.updateSize();
    }
  }


})(jQuery);