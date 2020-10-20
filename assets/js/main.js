window.$ = window.jQuery = require('jquery');

require('bootstrap');
jQueryBridget = require('jquery-bridget');

//require('headroom.js/dist/jQuery.headroom');
jQueryBridget('headroom', require('headroom.js'), window.jQuery );

jQueryBridget('masonry', require('masonry-layout'), window.jQuery );
require('slick-carousel');
//require('@knight-lab/timelinejs');
require('./iiif-viewer');

require('./script');
