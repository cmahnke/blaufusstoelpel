/* Inspired from https://openlayers.org/en/latest/examples/iiif.html and several others  */

import IIIF from 'ol/source/IIIF';
import IIIFInfo from 'ol/format/IIIFInfo';
import Map from 'ol/Map';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import {Control, FullScreen, Rotate, Zoom} from 'ol/control';
import { fromUserExtent } from 'ol/proj.js';

var AnimatedView = /*@__PURE__*/ (function(View) {

    function AnimatedView(opt_options) {
        View.call(this, opt_options);
        this.pauseableAnimations_ = [];
        this.animationsPointer_ = 0;
        this.lastAnimation_ = {};
    }

    if (View) AnimatedView.__proto__ = View;
    AnimatedView.prototype = Object.create(View && View.prototype);
    AnimatedView.prototype.constructor = AnimatedView;

    // Emulate a ring data structure
    AnimatedView.prototype.getPauseableAnimation_ = function () {
        if (this.pauseableAnimations_.length < this.animationsPointer_ + 1) {
            this.animationsPointer_++;
            return this.pauseableAnimations_[this.animationsPointer_]
        } else if (this.pauseableAnimations_.length == this.animationsPointer_ + 1) {
            this.animationsPointer_ = 0;
            return this.pauseableAnimations_[this.animationsPointer_];
        }
    }

    // This is the callback, when one animation has finished
    AnimatedView.prototype.nextAnimation_ = function (completed) {
        var context = this;
        if (completed === undefined || completed) {
            this.animate(this.getPauseableAnimation_(), function (state) {context.nextAnimation_(state)});
        }
    }

    AnimatedView.prototype.pauseAnimation = function () {
        if (!this.getAnimating()) {
          return;
        }
        var animation = this.animations_[0][0];
        //Safe state
        var now = Date.now();
        var elapsed = now - animation.start;
        let stopState = {
            center: animation.center,
            zoom: animation.zoom,
            rotation: animation.rotation,
            duration: animation.duration - elapsed
        };
        this.lastAnimation_ = stopState;
        // Stop running animation
        this.cancelAnimations();
    }

    AnimatedView.prototype.startAnimation_ = function () {
        if (this.getAnimating()) {
          return;
        }
        // Check if we stopped, if yes, reset
        if (Object.keys(this.lastAnimation_).length !== 0) {
            this.lastAnimation_ = {};
        }
        // Get first animation,pass it to animation method and add a callback
        var context = this;
        this.animate(this.getPauseableAnimation_, function (state) {context.nextAnimation_(state)});
    }

    AnimatedView.prototype.resumeAnimation = function () {
        if (this.getAnimating()) {
          return;
        }
        // Check if we stopped
        if (Object.keys(this.lastAnimation_).length === 0) {
            this.startAnimation_();
        } else {
            // Start stopped animation
            var context = this;
            this.animate(this.lastAnimation_, function (state) {context.nextAnimation_(state)});
        }
    }

    AnimatedView.prototype.setPauseableAnimation = function (var_args) {
        var args = new Array(arguments.length);
        for (let i = 0; i < args.length; ++i) {
          var options = arguments[i];
          /*
          if (!'center' in options) {
              options.center = this.getCenter();
          }
          */
          args[i] = options;
        }
        this.pauseableAnimations_ = args;
    }

    AnimatedView.prototype.getPauseableAnimation = function () {
        return this.pauseableAnimations_;
    }

    //Even though the OL API is quite good there are some beginners mistakes, like missing symetry
    AnimatedView.prototype.setResolutions = function (resolutions) {
        this.resolutions_ = resolutions;
    }
    AnimatedView.prototype.setExtent = function (extent) {
        var options = {};
        options.extent = fromUserExtent(extent, this.projection_);
        this.applyOptions_(options);
    }

    return AnimatedView;
}(View));

var RotateLeftControl = /*@__PURE__*/ (function(Control) {
    function RotateLeftControl(opt_options) {
        var options = opt_options || {};
        const tipLabel = options.tipLabel ? options.tipLabel : 'Rotate 90° left';

        var button = document.createElement('button');
        button.innerHTML = '<i class="icon-left"></i>';
        button.title = tipLabel;

        var element = document.createElement('div');
        element.className = 'rotate-left ol-unselectable ol-control';
        element.appendChild(button);

        Control.call(this, {
            element: element,
            target: options.target,
        });

        button.addEventListener('click', this.handleRotateLeft.bind(this), false);
    }

    if (Control) RotateLeftControl.__proto__ = Control;
    RotateLeftControl.prototype = Object.create(Control && Control.prototype);
    RotateLeftControl.prototype.constructor = RotateLeftControl;

    RotateLeftControl.prototype.handleRotateLeft = function handleRotateLeft() {
        var startRotation = this.getMap().getView().getRotation();
        this.getMap().getView().setRotation(startRotation + (-90 * Math.PI / 180));
    };

    return RotateLeftControl;
}(Control));

var RotateRightControl = /*@__PURE__*/ (function(Control) {
    function RotateRightControl(opt_options) {
        var options = opt_options || {};
        const tipLabel = options.tipLabel ? options.tipLabel : 'Rotate 90° right';

        var button = document.createElement('button');
        button.innerHTML = '<i class="icon-right"></i>';
        button.title = tipLabel;

        var element = document.createElement('div');
        element.className = 'rotate-right ol-unselectable ol-control';
        element.appendChild(button);

        Control.call(this, {
            element: element,
            target: options.target,
        });

        button.addEventListener('click', this.handleRotateRight.bind(this), false);
    }

    if (Control) RotateRightControl.__proto__ = Control;
    RotateRightControl.prototype = Object.create(Control && Control.prototype);
    RotateRightControl.prototype.constructor = RotateRightControl;

    RotateRightControl.prototype.handleRotateRight = function handleRotateRight() {
        var startRotation = this.getMap().getView().getRotation();
        this.getMap().getView().setRotation(startRotation + (90 * Math.PI / 180));
    };

    return RotateRightControl;
}(Control));

window.addMap = function(element, url, rotation, baseURL) {
    var initialRotation = 0;
    if (rotation !== undefined && rotation != 0) {
        initialRotation = rotation * Math.PI / 180;
    }
    // Languages
    var lang = 'en';
    if (document.documentElement.lang !== undefined) {
        lang = document.documentElement.lang;
    }
    var toolTips = { 'de': {'zoomIn': 'Vergrößern', 'zoomOut': 'Verkleinern', 'fullscreen': 'Vollbildansicht', 'rotate': 'Rotation zurücksetzen', 'rotateLeft': '90° nach links drehen', 'rotateRight': '90° nach rechst drehen'},
                     'en': {'zoomIn': 'Zoom in', 'zoomOut': 'Zoom out', 'fullscreen': 'Toggle full-screen', 'rotate': 'Reset rotation', 'rotateLeft': 'Rotate 90° left', 'rotateRight': 'Rotate 90° right'}};

    console.log('Setting up ' + lang);

    var layer = new TileLayer(),
        map = new Map({
            controls: [new Zoom({zoomInTipLabel: toolTips[lang]['zoomIn'], zoomOutTipLabel: toolTips[lang]['zoomOut']}),
                       new FullScreen({tipLabel: toolTips[lang]['fullscreen']}),
                       new Rotate({tipLabel: toolTips[lang]['rotate']}),
                       new RotateLeftControl({tipLabel: toolTips[lang]['rotateLeft']}),
                       new RotateRightControl({tipLabel: toolTips[lang]['rotateRight']})],
            layers: [layer],
            target: element,
        });

    fetch(url)
        .then(function(response) {
            response
                .json()
                .then(function(imageInfo) {
                    var options = new IIIFInfo(imageInfo).getTileSourceOptions();
                    if (options === undefined || options.version === undefined) {
                        console.log('Data seems to be no valid IIIF image information.')
                        return;
                    }
                    options.zDirection = -1;
                    if (baseURL !== undefined) {
                        options.url = baseURL;
                    }
                    var iiifTileSource = new IIIF(options);
                    layer.setSource(iiifTileSource);
                    map.setView(
                        new View({
                            resolutions: iiifTileSource.getTileGrid().getResolutions(),
                            extent: iiifTileSource.getTileGrid().getExtent(),
                            constrainOnlyCenter: true,
                            rotation: initialRotation
                        })
                    );
                    map.getView().fit(iiifTileSource.getTileGrid().getExtent());
                })
                .catch(function(body) {
                    console.log('Could not read image info json. ' + body);
                });
        })
        .catch(function() {
            console.log('Could not read data from URL.');
        });
    return map;
}

/*
See https://openlayers.org/en/latest/examples/animation.html
postsaison_4_87page048.getView().animate({center:[1000,-3000], duration: 3000 zoom: view.getZoom() + 1})
postsaison_4_87page048.getView().animate({center:[1000,-3000], duration: 3000, zoom: 1})
*/

window.animatedMap = function(element, url, rotation, baseURL, initialZoom, animation, moElement) {
    var initialRotation = 0;
    if (rotation !== undefined && rotation != 0) {
        initialRotation = rotation * Math.PI / 180;
    }

    console.log('Setting up animated map');

    var layer = new TileLayer(),
        map = new Map({
            controls: [],
            layers: [layer],
            target: element,
        }),
        view = new AnimatedView({
            constrainOnlyCenter: true,
            rotation: initialRotation
        })
        ;

    fetch(url)
        .then(function(response) {
            response
                .json()
                .then(function(imageInfo) {
                    var options = new IIIFInfo(imageInfo).getTileSourceOptions();
                    if (options === undefined || options.version === undefined) {
                        console.log('Data seems to be no valid IIIF image information.')
                        return;
                    }
                    options.zDirection = -1;
                    if (baseURL !== undefined) {
                        options.url = baseURL;
                    }
                    var iiifTileSource = new IIIF(options);
                    layer.setSource(iiifTileSource);
                    view.setExtent(iiifTileSource.getTileGrid().getExtent());
                    view.setResolutions(iiifTileSource.getTileGrid().getResolutions());
                    /*
                    var view = new AnimatedView({
                        resolutions: iiifTileSource.getTileGrid().getResolutions(),
                        //extent: iiifTileSource.getTileGrid().getExtent(),
                        constrainOnlyCenter: true,
                        rotation: initialRotation
                    });
                    */
                    map.setView(view);
                    map.getView().fit(iiifTileSource.getTileGrid().getExtent());
                    if (initialZoom !== undefined && initialZoom !== '') {
                        map.getView().setZoom(initialZoom);
                    }
                })
                .catch(function(body) {
                    console.log('Could not read image info json. ' + body);
                });
        })
        .catch(function() {
            console.log('Could not read data from URL.');
        });



        if (animation !== undefined && animation !== '' && moElement !== undefined) {
            view.setPauseableAnimation(animation);
            map.once('rendercomplete', function() {
               moElement.addEventListener('mouseenter', function () {
                    view.resumeAnimation();
                });
                moElement.addEventListener('mouseleave', function (event) {
                    view.pauseAnimation();
                });
            });
        }

    return map;
}
