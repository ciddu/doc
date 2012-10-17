/*
 * This file demonstrates how to use 9-slice in an animating scroll.
 */
import device as device;
import ui.ImageScaleView as ImageScaleView;

exports = Class(GC.Application, function() {

	this._settings = {
		logsEnabled: window.DEV_MODE,
		showFPS: window.DEV_MODE,
		clearEachFrame: true,
		alwaysRepaint: true,
		preload: []
	};

	this.initUI = function() {
		this.view.updateOpts({backgroundColor: "#808080"});

		// The device width is used to center the image...
		new ImageScaleView({
			superview: this.view,
			x: (device.width - 200) / 2,
			y: 10,
			width: 200,
			height: 100,
			image: "resources/images/border.png",
			scaleMethod: "9slice",
			// These are the slices from the source image...
			//
			// If the sum of the slices in a direction doesn't match the image size
			// of that given direction then the slice size is scaled, for example:
			//
			// The image has a width of 120 pixels,
			// the horizontal slices are 50, 60 and 70
			// then the slices are scaled with: 120 / (50 + 60 + 70)
			sourceSlices: {
				horizontal: {left: 40, center: 120, right: 40},
				vertical: {top: 40, middle: 120, bottom: 40}
			},
			// These are the destination slices...
			//
			// If the images width is larger then the sum of the horizontal
			// slices then the rest value is filled with the center slice.
			//
			// If the sum of the horizontal slices exceeds the width then
			// the slices are scaled to fit and no center is used.
			destSlices: {
				horizontal: {left: 15, right: 15},
				vertical: {top: 15, bottom: 15}
			}
		});

		// The line weight can be controlled by changing the destination slices:
		new ImageScaleView({
			superview: this.view,
			x: (device.width - 200) / 2,
			y: 120,
			width: 200,
			height: 100,
			image: "resources/images/border.png",
			scaleMethod: "9slice",
			sourceSlices: {
				horizontal: {left: 40, center: 120, right: 40},
				vertical: {top: 40, middle: 120, bottom: 40}
			},
			destSlices: {
				horizontal: {left: 30, right: 30},
				vertical: {top: 30, bottom: 30}
			}
		});
	};

	this.launchUI = function () {};
});
