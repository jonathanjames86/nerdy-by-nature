angular.module('myApp')
.controller('mainCtrl', function($scope, mainService){

mainService.getProducts().then(function(response){
  $scope.store = response;
});


});
