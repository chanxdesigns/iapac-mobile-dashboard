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
        ValueStoreService.setValues("projectid", projectid);
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
        ValueStoreService.setValues("status",status);
        $location.url(view);
    }
}

/**
 * Country Controller
 */

mbApac.controller('CountryCtrl', countryCtrl);
countryCtrl.$inject = ['$scope','ValueStoreService','CountriesFactory','$location','$window'];
function countryCtrl ($scope, ValueStoreService, CountriesFactory, $location, $window) {
    // Get Countries List
    $scope.countriesList = CountriesFactory.query({projectid: $window.localStorage.getItem("projectid")});
    console.log($scope.countriesList);
    // Get Countries Dropdown List Display State
    $scope.countriesListState = "hidden";
    // Change Countries Dropdown List Display State
    $scope.displayCountriesList = function () {
        $scope.countriesListState = "animated ownAnimated zoomIn";
    }
    // Store Countries in ValueStoreService
    // And navigate to the results page
    $scope.storeCountry = function (country, view) {
        ValueStoreService.setValues("country", country);
        $location.url(view);
    }
}

/**
 * Results Controller
 */

mbApac.controller('ResultsCtrl', resultsCtrl);
resultsCtrl.$inject = ['$scope','$window', 'ResultsFactory'];
function resultsCtrl ($scope, $window, ResultsFactory) {
    $scope.animate = "hidden";
    $scope.results = ResultsFactory.query({
        projectid: $window.localStorage.getItem('projectid'),
        status: $window.localStorage.getItem('status'),
        country: $window.localStorage.getItem('country')
    }, function (c) {
        if (c.length) {
            $scope.animate = "animated slideInRight";
        }
    })
}