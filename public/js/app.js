angular.module('myApp', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise('/');
      $stateProvider
      .state('home', {
        url:'/',
        templateUrl: "./home/home.html"
      })
      .state('products', {
        url: '/products',
        templateUrl: './products/products.html',
        // controller: 'mainController',
      //   resolve: {
      //     user: function(authService, $state){
      //       return authService.getCurrentUser().then(function(response){
      //         if (!response.data)
      //           $state.go('home');
      //           return response.data;
      //       }).catch(function(err){
      //         $state.go('home');
      //       });
      //   }
      // }
    }).state('productview', {
      url: '/productView',
      templateUrl: '/productView/productview.html'
    });
});
