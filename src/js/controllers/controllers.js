/**
 * Created by aliHitawala on 8/22/15.
 */
var myControllers = angular.module('Controllers', []);
myControllers.controller('HomeController', ['$scope', function($scope){
    $scope.title = "Home";
}]);

myControllers.controller('ExperienceController', ['$scope', function($scope){
    $scope.title = "Experience";
}]);
