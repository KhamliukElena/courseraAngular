(function() {
    'use strict';
    angular.module('data').service('MenuDataService', MenuDataService);

    function MenuDataService() {
        var service = this;

        service.getAllCategories = function() {
            //return a promise which is a result of $http, all cat
        };

        service.getItemsForCategory = function() {
            //same. but for one cat. name of the cat is passed as a part of url
        };
    }
})();