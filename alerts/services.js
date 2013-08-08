(function() {
	'use strict';

	function AlertsService($rootScope, $filter) {

		var types = ['success', 'error', 'info'];

		return {
			add: function(text, type, time) {

				var alert = {};

				if(typeof text === 'string') {
					if(typeof type !== 'string' || types.indexOf(type) === -1) {
						type = 'info';
					}

					if(typeof time === 'undefined') {
						time = 3000;
					}

					alert.type = 'alert-' + type;
					alert.text = text;
					alert.time = time;

					$rootScope.$broadcast('alerts.new', alert);
				}
			},
			error: function(text, time) {
				this.add(text, 'error', time);
			},
			success: function(text, time) {
				this.add(text, 'success', time);
			},
			info: function(text, time) {
				this.add(text, 'info', time);
			}
		}
	}

	angular.module('alerts').
		factory('AlertsService', ['$rootScope', '$filter', AlertsService]);
})();