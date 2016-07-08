angular.module('myApp').service('mainService', function($http){


this.getProducts = function(){
  return $http.get('/nerdy/products').then(function(response){
    return response.data;
  });
};

});

this.addToCart = function(productId){
  return $http({
    method: 'PUT',
    url: '/api/addToCart/'+currentUserId,
    data: productId
  })
}
