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
            when('/OtherExperience', {
                templateUrl: 'partials/other-experience.html',
                controller: 'OtherExperienceController'
            }).
            when('/Skills-Accomplishments', {
                templateUrl: 'partials/awards.html',
                controller: 'AwardsController'
            }).
            when('/Skills', {
                templateUrl: 'partials/skills.html',
                controller: 'SkillsController'
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
    $scope.title4 = "Skills/Accomplishments";
    $scope.title5 = "Other Experience";

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
        else if (link == 'git-collection') {
            window.open('https://github.com/goldmansachs/gs-collections','_blank');
        }
        else if (link == 'playStore-impact') {
            window.open('https://play.google.com/store/apps/details?id=com.goldmansachs.impact.hcmapp','_blank');
        }
        else if (link == 'playStore-money') {
            window.open('https://play.google.com/store/apps/details?id=com.developer.nita.hisabKitab','_blank');
        }
        else if (link == 'linkedIn') {
            window.open('https://www.linkedin.com/in/alihitawala','_blank');
        }
        else if (link == 'github') {
            window.open('https://github.com/alihitawala','_blank');
        }
    }
}]);
