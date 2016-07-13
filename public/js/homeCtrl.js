angular.module('myApp')
    .controller('homeCtrl', function($scope, $state, oAuth) {
      $scope.userLogin = function(user) {
          oAuth.login(user).then(function(response) {
              if (!response) {
                  alert('User does not exist');
                  $scope.user.password = '';
              } else {
                  $state.go('products');
              }
          }).catch(function(err) {
              alert('Unable to login');
          });
      };
      $scope.userLogout = function() {
          oAuth.logout();
          $state.go('home');
      };
      $scope.registerUser = function(user) {
          $scope.userInfo = angular.copy(user);
          oAuth.registerUser(user).then(function(response) {
              if (!response.data) {
                  alert('Unable to create user');
              } else {
                  alert('User Created');
                  $scope.userLogin = {};
                  $state.go('products');
              }
          }).catch(function(err) {
              alert('Unable to create user');
          });
      };

});
