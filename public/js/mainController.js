angular.module('myApp')
    .controller('mainCtrl', function($scope, $state, $rootScope, mainService) {


//STATE CHANGES
      $rootScope.$on('$stateChangeSuccess', function() {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      });
        var checkUser = function() {
            mainService.getCurrentUser().then(function(response) {
                $scope.loggedUser = response;
            });
        };
        checkUser();
        $rootScope.$on('$stateChangeSuccess', checkUser);

      $scope.store =  mainService.getProducts().then(function(response) {
            $scope.store = response;
            // console.log(response);
        });
//JAVASCRIPT ANIMATIONS
        var moveRight =  function() {
           var modal = document.getElementById('modal-drop-two');
           var maxL = 0+"%";
           if(modal.style.left === maxL){
             modal.style.left = -100+"%";
           } else{
             modal.style.left = maxL;
           }
         };

        var fireText = function() {
            mainService.activeText();
        }
        fireText();
        $rootScope.$on('$stateChangeSuccess', fireText);

        $scope.searchProperty = 'searchProperty';
        $scope.userInfo = {};

//LOGIN AUTH-----------------------------------------------

//CART STUFF---------------------------------------------------------
        $scope.populateCart = function(){
          mainService.populateCart().then(function(response){
            // console.log(response);
            $scope.cartItems = response.products;
            // console.log(response, "justresponse");
          });
        };

        $scope.productView = function(product){
            console.log(product);
          $scope.productViewItem = product;

        }
    

        $scope.addToCart = function(productId){
          // console.log(productId);
            mainService.getCurrentUserForCart(productId).then(function(response){
                // console.log(response);
              if (!response) {
                alert('No response');
              } else {
                  alert('Added to Cart');
                  $scope.userLogin = {};
              }
          }).catch(function(err) {
              moveRight();
              $state.go('home');
              alert('Do us a solid and login');
          });
      };
        $scope.grabId = function(productId) {
            mainService.addToCart(productId).then(function(response) {
                $scope.cart = response.data;
            });
            // console.log(productId);
        };
    });
