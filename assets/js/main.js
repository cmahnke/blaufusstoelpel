window.$ = window.jQuery = require('jquery');

require('bootstrap');
jQueryBridget = require('jquery-bridget');

//require('headroom.js/dist/jQuery.headroom');
jQueryBridget('headroom', require('headroom.js'), window.jQuery );

jQueryBridget('masonry', require('masonry-layout'), window.jQuery );
require('slick-carousel');
require('./iiif-viewer');

import { Timeline } from "vis-timeline/standalone";

require('./script');

window.addTimeline = function (id, data, options) {
    // See https://visjs.github.io/vis-timeline/docs/timeline/
    var div = document.getElementById(id);
    var timeline = new Timeline(div, data, options);
    return timeline;
}
