(function() {
	'use strict';

	function AlertsService($rootScope, $filter) {

		var types = ['success', 'error', 'info'];

		return {
			add: function(text, type) {

				var alert = {};

				if(typeof text === 'string') {
					if(typeof type !== 'string' || types.indexOf('error') === -1) {
						type = 'info';
					}

					alert.type = 'alert-' + type;
					alert.text = text;

					$rootScope.$broadcast('alerts.new', alert);
				}
			},
			error: function(text) {
				this.add(text, 'error');
			},
			success: function(text) {
				this.add(text, 'success');
			},
			info: function(text) {
				this.add(text, 'info');
			}
		}
	}

	angular.module('alerts').
		factory('AlertsService', ['$rootScope', '$filter', AlertsService]);
})();