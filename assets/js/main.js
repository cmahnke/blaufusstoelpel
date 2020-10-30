window.$ = window.jQuery = require('jquery');

require('bootstrap');
jQueryBridget = require('jquery-bridget');

import Headroom from 'headroom.js';
window.Headroom = Headroom;

jQueryBridget('masonry', require('masonry-layout'), window.jQuery );
require('slick-carousel');

import { Timeline } from 'vis-timeline/standalone';

window.addTimeline = function (id, data, options) {
    // See https://visjs.github.io/vis-timeline/docs/timeline/
    var div = document.getElementById(id);
    var timeline = new Timeline(div, data, options);
    return timeline;
}
