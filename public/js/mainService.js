angular.module('myApp').service('mainService', function($http, $state){

///SERVICE FUNCTIONS CALLBACKS----------------------

function updateCart(productId){
  console.log(productId, "updateCart");
  return $http({
    method: 'PUT',
    url: '/user/cart/',
    data: {item: productId, quantity: 1}
  });
  // server request Cart.find({owner: userid})
    // update cart
};





this.createUser = function(user){
  return $http.post('/api/user/addUser', user).then(function(response){
    // console.log(response);
    return response;
  });
};

this.populateCart = function(){
  return $http.get('/cart/getproducts').then(function(response){
    return response.data;
  });
};

this.getCurrentUser = function() {
    return $http({
      method: 'GET',
      url: '/me'
    }).then(function(response) {
      // console.log(response.data);
      return response.data;
    });
  };

this.getCurrentUserForCart = function(productId) {
  // console.log(productId, "currentUser")
    return $http({
      method: 'GET',
      url: '/me'
    }).then(function(user) {
        if(user.data.email){
            updateCart(productId);
            return user;
        }else{ console.log("error you suck + Service");

          // call function to get login modal
            // findCartByUserIdAndUpdate(productId)
        };
     })
   };
   this.getProducts = function(){
     return $http.get('/nerdy/products').then(function(response){
       return response.data;
     });
   };




// JAVASCRIPT ANIMATIONS------------------------------------------------


    this.activeText = function(){

      var beSuper_i = 0;
      var beSuper_Array = ["|", "N", "Ne", "Ner|", "Nerd", "Nerdy", "Nerdy |", "Nerdy", "Nerd", "Ner|", "Ne",
          "N", "", "S|", "Sup", "Supe", "Super |", "Super", "Supe", "Sup|", "S", " ", "Y|", "Yo", "You", "You |",
          "You", "You", "You |", "You", "You", "You|", "Yo", "Y", "|", "", ""];
      var beSuperElem = document.getElementById("besuper");
      var beSuperElem;
        // console.log('state change');
      function beSuperNext() {
          beSuper_i++;
          beSuperElem.style.opacity = .9;
          if (beSuper_i > (beSuper_Array.length - 1)) {
              beSuper_i = 0;
          }
          setTimeout('wssSlide()', 165);
      }
      function wssSlide() {
          beSuperElem.innerHTML = beSuper_Array[beSuper_i];
          beSuperElem.style.opacity = 1;
          setTimeout('beSuperNext()', 165);
      }

    };

  });

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
//
// this.prodcutAdd = function(productId){
//   return $http({
//     method: 'PUT',
//     url: '/user/cart/'+currentUserId,
//     data: productId
//   });
// };
