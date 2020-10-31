(function(){
    'use strict';
    angular.module('MenuApp')
    .controller('MenuAppController', MenuAppController);
    MenuAppController.$inject = ['MenuDataService'];
    function MenuAppController(MenuDataService, categories) {
        var categoriesCtrl = this;
        categoriesCtrl.categories = categories;
    }
})();