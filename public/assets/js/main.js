var mbApac = angular.module('mbApac', ['ngRoute','mbControllers','mbFactories','mbDirectives','mbServices']);

mbApac.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: "HomeCtrl",
            templateUrl: "partials/home.partial.html"
        })
        .when('/status', {
            controller: "StatusCtrl",
            templateUrl: "partials/status.partial.html"
        })
        .when('/country', {
            controller: "CountryCtrl",
            templateUrl: "partials/country.partial.html"
        })
        .when('/results', {
            controller: "ResultsCtrl",
            templateUrl: "partials/results.partial.html"
        });
})