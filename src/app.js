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
            when('/Education', {
                templateUrl: 'partials/education.html',
                controller: 'EducationController'
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
    $scope.goto = function(link) {
        if (link == 'wisc') {
            window.open('http://www.wisc.edu','_blank');
        }
        else if (link == 'mnnit') {
            window.open('http://www.mnnit.ac.in','_blank');
        }
        else if (link == 'iiit') {
            window.open('https://www.iiit.ac.in/','_blank');
        }
    }
}]);
