var mbApp = angular.module('mbFactories', ['ngResource']);

/**
 * Factory that pulls Projects Lists From Database
 */

mbApp.factory('ProjectsFactory', projectsFactory);
projectsFactory.$inject = ['$resource'];
function projectsFactory($resource) {
    return $resource('/api/projectids');
}

/**
 * Factory that pulls Countries List From Database
 */
mbApp.factory('CountriesFactory', countriesFactory);
countriesFactory.$inject = ['$resource'];
function countriesFactory($resource) {
    return $resource('/api/countries')
}

/**
 * Factory that pulls Results List From Database
 */
mbApp.factory('ResultsFactory', resultsFactory);
resultsFactory.$inject = ['$resource'];
function resultsFactory($resource) {
    return $resource('/api/:projectid/:status/:country')
}