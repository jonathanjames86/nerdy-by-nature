angular.module('myApp')
.controller('mainCtrl', function($scope, mainService){

$scope.peoples = mainService.getUsers();
});