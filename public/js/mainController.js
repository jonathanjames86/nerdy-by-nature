angular.module('myApp')
.controller('mainCtrl', function($scope, mainService){

    mainService.getProducts().then(function(response){
      $scope.store = response;
    });

    $scope.searchProperty = 'searchProperty';

    // $scope.sortBy = function(searchProperty) {
    //   $scope.searchProperty = 'searchProperty';
    // };

});
