import "./jquery"
//import "jquery-ui/dist/jquery-ui"

//require('bootstrap');
window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');
jQueryBridget = require('jquery-bridget');

import Headroom from 'headroom.js';
window.Headroom = Headroom;

jQueryBridget('masonry', require('masonry-layout'), window.jQuery);
require('slick-carousel');
