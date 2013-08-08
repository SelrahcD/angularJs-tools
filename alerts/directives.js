(function() {
    'use strict';

    function Alert($timeout) {

        function link($scope, elm, attrs) {
            $scope.type = $scope.type();
            $scope.showCloseBtn = (typeof attrs.closeBtn !== 'undefined');

            var jqueryElm = $(elm);

            // If time is provided close alert after timeout
            if(typeof attrs.time !== 'undefined' && $scope.time() !== 0) {
                $timeout(function() {
                    jqueryElm.alert('close');
                    }, $scope.time());
            }

            // If we have a close function we have to trigger it on close
            if(typeof attrs.close !== 'undefined' && typeof $scope.close === 'function') {
                jqueryElm.bind('closed.bs.alert', function () {
                    $scope.close();
                });
            }
        }

        return {
            restrict: 'E',
            link: link,
            transclude: true,
            replace: true,
            templateUrl: 'modules/alerts/views/alert.html',
            scope: {
                type: '&',
                time: '&',
                close: '&'
            }
        }

    }

    angular.module('alerts').
        directive('alert', ['$timeout', Alert]);
})();