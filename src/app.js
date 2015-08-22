/**
 * Created by aliHitawala on 8/22/15.
 */
var app = angular.module('StarterApp', ['ngRoute', 'ngMaterial', 'Controllers']);
app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/Home', {
                templateUrl: 'partials/home.html',
                controller: 'HomeController'
            }).
            when('/Experience', {
                templateUrl: 'partials/experience.html',
                controller: 'ExperienceController'
            }).
            otherwise({
                redirectTo: '/Home'
            });
    }]);

app.controller('AppCtrl', ['$scope', '$mdSidenav', '$location', function($scope, $mdSidenav, $location){
    $scope.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();

    };
    $scope.title1 = "Home";
    $scope.title2 = "Education";
    $scope.title3 = "Work Experience";
    $scope.title4 = "Projects";

    $scope.go = function ( path ) {
        $location.path( path );
    };
}]);
