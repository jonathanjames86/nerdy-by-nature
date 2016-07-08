angular.module('myApp')
.controller('mainCtrl', function($scope, mainService){

    mainService.getProducts().then(function(response){
      $scope.store = response;
    });

    $scope.searchProperty = 'searchProperty';

    // $scope.sortBy = function(searchProperty) {
    //   $scope.searchProperty = 'searchProperty';
    // };
    $scope.grabId = function(productId){
      mainService.addToCart(productId).then(function(response){
        $scope.cart = response.data;
      });
      console.log(productId);
    }

});
