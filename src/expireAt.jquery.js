/*
 *  jQuery expireAt  - v1.0.0
 *  expireAt is a plugin that helps you track html elements, that have to expire on a specific time.
 *
 *  Made by Kreshnik Hasanaj
 */
;(function ( $, window, document, undefined ) {
	"use strict";
	$.fn.expireAt = function (options) {
		var self = this;
		var executionCycle = null;

		var settings = $.extend({
			interval: 60000,
			callback: function (element) {
			}
		}, options);

		function init() {
			checkForExpiredElements();
			start();
		};

		function start() {
			executionCycle = setInterval(function () {
				checkForExpiredElements();
			}, settings.interval);
		};

		function stop() {
			clearInterval(executionCycle);
		};

		function checkForExpiredElements() {
			var now = new Date();

			self.filter("[data-expire-at]:not(.expireAt-expired)").each(function () {
				var self = $(this);
				var expireDateTime = self.data('expire-at');

				if (expireDateTime) {
					var itemDate = new Date(expireDateTime);
					if (now > itemDate) {
						self.addClass('expireAt-expired');
						settings.callback(self);
					}
				}

			});
		};

		init();
		return self;
	};

})( jQuery, window, document );