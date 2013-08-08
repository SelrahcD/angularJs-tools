(function() {
	'use strict';

	function AlertsController($scope) {
		$scope.alerts = [];

        $scope.close = function(index) {
            $scope.alerts.splice(index, 1);
        }

		$scope.$on('alerts.new', function(event, alert) {
		    $scope.alerts.push(alert);
		});   
	}

	angular.module('alerts').
		controller('AlertsController', ['$scope', AlertsController]);
})();