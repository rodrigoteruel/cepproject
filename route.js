angular.module('app').config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'cep.html',
            controller: 'zumbisCtrl'
        });
});
