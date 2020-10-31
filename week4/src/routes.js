(function() {
    'use strict';
    angular.module('MenuApp').config(RoutesConfig);
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider.state('home', {
            url: '/',
            templateUrl: 'src/menuApp/templates/home.template.html'
        })
        .state('categories', {
            url: '/categories',
            templateUrl: 'src/menuApp/templates/categories.component.html',
            controller: 'MenuAppController as categoriesCtrl',
            resolve: {
                categories: ['MenuDataService', function(MenuDataService) {
                    return MenuDataService.getAllCategories();
                }]
            }
        })
        .state('items', {
            url: '/items',
            templateUrl: 'src/menuApp/templates/items.component.html'
        });
    }
})();