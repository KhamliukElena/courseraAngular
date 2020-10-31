(function() {
    'use strict';
    angular.module('data').service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http'];
    function MenuDataService() {
        var service = this;

        service.getAllCategories = function() {
            return $http({
                method: "GET",
                url: "https://davids-restaurant.herokuapp.com/categories.json"
            }).then(function(response) {
                console.log("inside http");
                return response.data;
            });
        };

        service.getItemsForCategory = function(categoryShortName) {
            return $http({
                method: "GET",
                url: ("https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName)
            }).then(function(response) {
                return response.data.menu_items;
            })
        };
    }
})();