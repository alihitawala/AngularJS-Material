/**
 * Created by aliHitawala on 8/22/15.
 */
var myControllers = angular.module('Controllers', ['ngMaterial']);
myControllers.controller('HomeController', ['$scope', '$mdDialog', function($scope, $mdDialog){
    $scope.title = "Home";
    $scope.imagePath = "./img/profile.jpg";
    $scope.showAdvanced = function(ev) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'partials/dialog1.tmpl.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true
        })
            .then(function(answer) {
                $scope.status = 'You said the information was "' + answer + '".';
            }, function() {
                $scope.status = 'You cancelled the dialog.';
            });
    };
}]);

myControllers.controller('EducationController', ['$scope', function($scope){
    $scope.title = "Education";
}]);

myControllers.controller('ExperienceController', ['$scope', function($scope){
    $scope.title = "Experience";
}]);
myControllers.controller('OtherExperienceController', ['$scope', function($scope){
    $scope.title = "Other Experience";
}]);
myControllers.controller('AwardsController', ['$scope', function($scope){
    $scope.title = "Awards";
}]);
myControllers.controller('SkillsController', ['$scope', function($scope){
    $scope.title = "Skills";
}]);
function DialogController($scope, $mdDialog) {
    $scope.name = "Ali Hussain Hitawala";
    $scope.phone = "+1 608-609-7432";
    $scope.email = "alihitawala@cs.wisc.edu";
    $scope.address = "2110, University Avenue, Madison, WI - 53726";
    $scope.hide = function() {
        $mdDialog.hide();
    };
    $scope.cancel = function() {
        $mdDialog.cancel();
    };
    $scope.answer = function(answer) {
        $mdDialog.hide(answer);
    };
}
