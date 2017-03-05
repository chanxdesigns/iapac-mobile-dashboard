var mbApac = angular.module('mbDirectives', []);

mbApac.directive('totalCenter', function ($window) {
    var directive = {
        restrict: 'A',
        link: centering
    }

    function centering (scope, elem, attr) {
        var windowHeight = $window.innerHeight,
            windowWidth = $window.innerWidth,
            boxWidth = elem[0].offsetWidth,
            boxHeight = elem[0].offsetHeight;

        elem.css({
            'left': ((windowWidth - boxWidth) / 2) + "px",
            'top': ((windowHeight - boxHeight) / 2) + "px"
        })
    }

    return directive;
});