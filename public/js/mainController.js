angular.module('myApp')
    .controller('mainCtrl', function($scope, $state, $rootScope, mainService) {

        var checkUser = function() {
          mainService.getCurrentUser().then(function(response){
            $scope.loggedUser = response;
          });
        };

        checkUser();

        $rootScope.$on('$stateChangeSuccess', checkUser);

        mainService.getProducts().then(function(response) {

            $scope.store = response;
        });

        $scope.searchProperty = 'searchProperty';

        $scope.userInfo = {};

        $scope.userLogin = function(user){
          mainService.login(user).then(function(response){
            if (!response) {
                alert('User does not exist');
                $scope.user.password = '';
          } else {
                $state.go('home');
          }
          }).catch(function(err) {
              alert('Unable to login');
            });
        };


        $scope.registerUser = function(user) {
            $scope.userInfo = angular.copy(user);
            mainService.createUser(user).then(function(response) {
                if (!response.data) {
                  alert('Unable to create user');
              } else {
                  alert('User Created');
                  $scope.userLogin = {};
                }
            }).catch(function(err) {
                  alert('Unable to create user');
          });

        };
        $scope.userLogout = function(){
          mainService.logout();
        };
          // mainService.getUser().then(function(response){
          //   $scope.store = response;
          // });
        // $scope.sortBy = function(searchProperty) {
        //   $scope.searchProperty = 'searchProperty';
        // };
        $scope.grabId = function(productId) {
            mainService.addToCart(productId).then(function(response) {
                $scope.cart = response.data;
            });
            console.log(productId);
        };

    });
