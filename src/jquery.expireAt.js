/*
 *  jQuery expireAt v1.0.3
 *  expireAt is a plug-in that helps you track html elements, that have to expire on a specific time.
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
					
					var itemDate = convertToJSDate(expireDateTime);
					
					if (now > itemDate) {
						self.addClass('expireAt-expired');
						settings.callback(self);
					}

				}

			});
		};

		function convertToJSDate(dateTime)
		{
			var regEx = /^([0-9]{2,4})-([0-1][0-9])-([0-3][0-9]) (?:([0-2][0-9]):([0-5][0-9]):([0-5][0-9]))?$/;
			var regExGroups = dateTime.replace(regEx,"$1 $2 $3 $4 $5 $6").split(' ');
			return new Date(regExGroups[0],regExGroups[1]-1,regExGroups[2],regExGroups[3],regExGroups[4],regExGroups[5]);
		}

		init();
		return self;
	};

})( jQuery, window, document );