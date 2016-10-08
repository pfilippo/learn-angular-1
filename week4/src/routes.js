'use strict';
(function() {
  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'src/data/templates/home.template.html'
    })
    .state('categories', {
      url: '/categories',
      templateUrl: 'src/data/templates/categories.template.html',
      controller: 'CategoriesController as categories',
      resolve: {
         items: ['MenuDataService', function (MenuDataService) {
           return MenuDataService.getAllCategories();
         }]
      }
    })
    .state('items', {
      url: '/items/{itemId}',
      templateUrl: 'src/data/templates/items.template.html',
      controller: 'ItemsController as itemsc',
      resolve: {
         items: ['$stateParams','MenuDataService', function ($stateParams, MenuDataService) {
           return MenuDataService.getItemsForCategory($stateParams.itemId);
         }]
      }
    });
  }
})();
