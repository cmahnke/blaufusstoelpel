window.$ = window.jQuery = require('jquery');

require('bootstrap');
jQueryBridget = require('jquery-bridget');

import Headroom from 'headroom.js';
window.Headroom = Headroom;

jQueryBridget('masonry', require('masonry-layout'), window.jQuery );
require('slick-carousel');

//require('./timeline.js');
