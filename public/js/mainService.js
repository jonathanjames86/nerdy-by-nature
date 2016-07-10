angular.module('myApp').service('mainService', function($http, $state){




this.login = function(user) {
    return $http({
      method: 'POST',
      url: '/login',
      data: user
    });
    // .then(function(response) {
    //   // console.log(response);
    //   if(response.status === 200){
    //     return $http({
    //       method: 'GET',
    //       url: '/me'
    //     }).then(function(results){
    //       console.log(results);
    //       return results.data;
    //     });
    //   }
    // });
  };

this.logout = function() {
      return $http({
        method: 'GET',
        url: '/logout'
      }).then(function(response) {
        return response;
      });
};

this.getProducts = function(){
  return $http.get('/nerdy/products').then(function(response){
    return response.data;
  });
};


this.createUser = function(user){
  return $http.post('/api/user/addUser', user).then(function(response){
    // console.log(response);
    return response;

  });
};

this.getCurrentUser = function() {
    return $http({
      method: 'GET',
      url: '/me'
    }).then(function(response) {
      if(response.data) {

        return response.data;
      }
      return false;
    });
  };

// this.login = function(user){
//   return $http.post('/api/user/login', user).then(function(response){
//     // console.log(response.data);
//     return response.data;
//   });
// };
// this.getUser = function(){
//   return $http.get('/api/getUser/:id').then(function(response){
//     return response.data;
//   });
// };

this.addToCart = function(productId){
  return $http({
    method: 'PUT',
    url: '/api/addToCart/'+currentUserId,
    data: productId
  });
};

});
