(function() {
	'use strict';

	function AlertsController($scope) {
		$scope.alerts = [];

		$scope.$on('alerts.new', function(event, alert) {
		    $scope.alerts.push(alert);
		});   
	}

	angular.module('alerts').
		controller('AlertsController', ['$scope', AlertsController]);
})();