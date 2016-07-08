angular.module('myApp', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise('/')
      $stateProvider
      .state('home', {
        url:'/',
        templateUrl: "./home/home.html"
      })
      .state('products', {
        url: '/products',
        templateUrl: './products/products.html',
        // controller: 'ProductsController'
      })
});
