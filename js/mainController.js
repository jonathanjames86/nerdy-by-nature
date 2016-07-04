angular.module('myApp')
.controller('mainCtrl', function($scope, mainService){

$scope.store = mainService.getUsers();


});
