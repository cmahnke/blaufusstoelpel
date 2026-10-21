(function () {
  'use strict';

  var options = {};
  var header = new Headroom(document.getElementById('header'), options);
  header.init();

  // Background images
  Array.prototype.forEach.call(document.querySelectorAll('[data-background]'), function (el) {
    el.style.backgroundImage = 'url(' + el.getAttribute('data-background') + ')';
  });

  setTimeout(function () {
    if (document.querySelector('body.home')) {
      var iso = new Isotope(document.querySelector('.masonry-container'), {
        itemSelector: '.masonry-tile',
        //layoutMode: 'fitColumns',
        masonry: {
          columnWidth: '.masonry-tile',
          horizontalOrder: true,
          percentPosition: true
        }
      });
    }
  }, 500);

  // Featured post slider (vanilla, no dependencies).
  // Replicates the previous slick-carousel setup: 2 slides side by side
  // on viewports >= 600px, 1 below, autoplay every 15s, wraparound paging.
  function initFeaturedSlider(slider) {
    var slides = Array.prototype.slice.call(slider.children);
    if (slides.length === 0) {
      return;
    }

    var track = document.createElement('div');
    track.className = 'slider-track';
    slides.forEach(function (slide) {
      slide.classList.add('slider-slide');
      track.appendChild(slide);
    });
    slider.appendChild(track);
    slider.classList.add('slider-viewport');

    var prevBtn = document.createElement('button');
    prevBtn.type = 'button';
    prevBtn.className = 'slider-arrow slider-prev';
    prevBtn.setAttribute('aria-label', 'Previous slide');
    prevBtn.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.5 5.5 8 12l6.5 6.5"/></svg>';
    var nextBtn = document.createElement('button');
    nextBtn.type = 'button';
    nextBtn.className = 'slider-arrow slider-next';
    nextBtn.setAttribute('aria-label', 'Next slide');
    nextBtn.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9.5 5.5 16 12l-6.5 6.5"/></svg>';
    slider.appendChild(prevBtn);
    slider.appendChild(nextBtn);

    var index = 0;
    var timer = null;
    var dragging = false;
    var suppressClick = false;
    var startX = 0;
    var movedX = 0;

    function visibleCount() {
      return window.matchMedia('(min-width: 600px)').matches ? 2 : 1;
    }

    function maxIndex() {
      return Math.max(0, slides.length - visibleCount());
    }

    function updateArrows() {
      var hide = slides.length <= visibleCount();
      prevBtn.style.display = hide ? 'none' : '';
      nextBtn.style.display = hide ? 'none' : '';
    }

    function baseOffset() {
      return -index * (slider.clientWidth / visibleCount());
    }

    function goTo(i) {
      index = Math.max(0, Math.min(i, maxIndex()));
      track.style.transform = 'translateX(' + baseOffset() + 'px)';
      updateArrows();
    }

    function layout() {
      var width = slider.clientWidth / visibleCount();
      slides.forEach(function (slide) {
        slide.style.flex = '0 0 ' + width + 'px';
        slide.style.maxWidth = width + 'px';
      });
      goTo(index);
    }

    function next() {
      goTo(index + 1 > maxIndex() ? 0 : index + 1);
    }

    function prev() {
      goTo(index - 1 < 0 ? maxIndex() : index - 1);
    }

    function stop() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }

    function start() {
      stop();
      if (slides.length > visibleCount()) {
        timer = setInterval(next, 15000);
      }
    }

    prevBtn.addEventListener('click', function () {
      prev();
      start();
    });
    nextBtn.addEventListener('click', function () {
      next();
      start();
    });
    slider.addEventListener('mouseenter', stop);
    slider.addEventListener('mouseleave', start);
    track.addEventListener('pointerdown', function (e) {
      if (e.pointerType === 'mouse' && e.button !== 0) {
        return;
      }
      dragging = true;
      suppressClick = false;
      startX = e.clientX;
      movedX = 0;
      track.style.transition = 'none';
      try {
        track.setPointerCapture(e.pointerId);
      } catch (err) {
        // Pointer capture unsupported, tracking continues while over the track.
      }
      stop();
    });
    track.addEventListener('pointermove', function (e) {
      if (!dragging) {
        return;
      }
      var dx = e.clientX - startX;
      movedX = dx;
      var width = slider.clientWidth / visibleCount();
      var min = -maxIndex() * width;
      var offset = baseOffset() + dx;
      if (offset > 0) {
        offset = offset * 0.3;
      } else if (offset < min) {
        offset = min + (offset - min) * 0.3;
      }
      track.style.transform = 'translateX(' + offset + 'px)';
    });
    function endDrag() {
      if (!dragging) {
        return;
      }
      dragging = false;
      track.style.transition = '';
      var width = slider.clientWidth / visibleCount();
      suppressClick = Math.abs(movedX) > 8;
      if (movedX < -width * 0.2) {
        next();
      } else if (movedX > width * 0.2) {
        prev();
      } else {
        goTo(index);
      }
      start();
    }
    track.addEventListener('pointerup', endDrag);
    track.addEventListener('pointercancel', endDrag);
    slider.addEventListener(
      'click',
      function (e) {
        if (suppressClick) {
          e.preventDefault();
          e.stopPropagation();
          suppressClick = false;
        }
      },
      true
    );
    window.addEventListener('resize', layout);
    if (window.matchMedia) {
      var mq = window.matchMedia('(min-width: 600px)');
      if (mq.addEventListener) {
        mq.addEventListener('change', layout);
      } else if (mq.addListener) {
        mq.addListener(layout);
      }
    }

    layout();
    start();
  }

  var featuredSlider = document.querySelector('.featured-post-slider');
  if (featuredSlider) {
    initFeaturedSlider(featuredSlider);
  }

  if (window.iiifAnimations !== undefined) {
    for (let i = 0; i < window.iiifAnimations.length; ++i) {
      var iiif = window.iiifAnimations[i];
      iiif.updateSize();
    }
  }
})();
