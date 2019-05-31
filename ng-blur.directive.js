angular.module('app').directive('ngBlur', function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function($scope, $element, $attrs, ngModel) {
            $element.on('blur', function() {
                if (ngModel.$invalid) {
                    $element.addClass('error');
                    $element.removeClass('valid');
                }
                else {
                    $element.removeClass('error');
                    $element.addClass('valid');
                }
            });
        }
    }
});
