/**
 * Created by aliHitawala on 8/22/15.
 */
var myControllers = angular.module('Controllers', ['ngMaterial']);
myControllers.controller('HomeController', ['$scope', '$mdDialog', function($scope, $mdDialog){
    $scope.title = "Home";
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

myControllers.controller('ExperienceController', ['$scope', function($scope){
    $scope.title = "Experience";
}]);
function DialogController($scope, $mdDialog) {
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
