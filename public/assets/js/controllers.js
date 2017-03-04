var mbApac = angular.module('mbControllers', ["mbServices","mbFactories"]);

/**
 * Home Controller or Project ID controller
 */
mbApac.controller('HomeCtrl', homeCtrl)
homeCtrl.$inject = ["$scope", "ValueStoreService", "ProjectsFactory", "$location"];
function homeCtrl($scope, ValueStoreService, ProjectsFactory, $location) {
    // Project IDs List
    $scope.projectsList = ProjectsFactory.query();
    $scope.projectsListState = "hidden";
    // Display Projects List
    $scope.displayProjectsList = function () {
        $scope.projectsListState = "animated ownAnimated zoomIn";
    }
    /**
     * Store Value and Navigate to corresponding view
     * @param value Project ID
     * @param view View Name
     */
    $scope.storeAndNavigate = function (projectid, view) {
        var key = "projectid";
        ValueStoreService.setValues(key, projectid);
        $location.url(view);
    }
}

/**
 * Status Controller
 */
mbApac.controller('StatusCtrl', statusCtrl);
statusCtrl.$inject = ['$scope','ValueStoreService', '$location'];
function statusCtrl($scope, ValueStoreService, $location) {
   $scope.statusListState = "hidden";
    // Display Status List
    $scope.displayStatusList = function () {
        $scope.statusListState = "animated ownAnimated zoomIn";
    }

    $scope.storeStatus = function (status, view) {
        var key = "status";
        ValueStoreService.setValues(key,status);
        $location.url(view);
    }
}

/**
 * Country Controller
 */

mbApac.controller('CountryCtrl', countryCtrl);
countryCtrl.$inject = ['$scope','ValueStoreService','CountriesFactory','$location'];
function countryCtrl ($scope, ValueStoreService, CountriesFactory, $location) {
    // Get Countries List
    $scope.countriesList = CountriesFactory.query();
    // Get Countries Dropdown List Display State
    $scope.countriesListState = "hidden";
    // Change Countries Dropdown List Display State
    $scope.displayCountriesList = function () {
        $scope.countriesListState = "animated ownAnimated zoomIn";
    }
    // Store Countries in ValueStoreService
    // And navigate to the results page
    $scope.storeCountry = function (country, view) {
        var key = "country";
        ValueStoreService.setValues(key, country);
        $location.url(view);
    }
}

/**
 * Results Controller
 */

mbApac.controller('ResultsCtrl', resultsCtrl);
resultsCtrl.$inject = ['$scope','ValueStoreService','ResultsFactory'];
function resultsCtrl ($scope, ValueStoreService, ResultsFactory) {
    var projectMeta = ValueStoreService.getValues();
    $scope.animate = "hidden";
    $scope.results = ResultsFactory.query({
        projectid: projectMeta.projectid,
        status: projectMeta.status,
        country: projectMeta.country
    }, function (c) {
        if (c.length) {
            $scope.animate = "animated slideInRight";
        }
    })
}