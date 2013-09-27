(function() {
    'use strict';

    // Create module
    var module = angular.module('filteredTable', []);

    
    function filteredTable() {

        function controller($scope) {

            $scope.predicate = null;
            $scope.reverse = false;
            $scope.sorting = {};

            $scope.orderBy = function(key) {
                // Clean old predicate sorting
                $scope.sorting[$scope.predicate] = null;
                
                // Set new parameters
                $scope.predicate = key;
                $scope.reverse = !$scope.reverse;
                $scope.sorting[key] = $scope.reverse ? 'desc' : 'asc';
            }

        }

        return {
            restrict: 'A',
            controller: controller
        }

    }

    // Declare directive
    module.directive('filteredTable', [filteredTable]);

})();