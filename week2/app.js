(function () {
    'use strict';
    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var non_bought = this;
        non_bought.toBuy = ShoppingListCheckOffService.getToBuy();
        non_bought.remove = function (itemIndex) {
            ShoppingListCheckOffService.remove(itemIndex);
        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var bought = this;
        bought.alreadyBought = ShoppingListCheckOffService.getBought();
    }

    function ShoppingListCheckOffService () {
        var service = this;
        var toBuy = [ {quantity: 10, name: "cookies"}, {quantity: 5, name: "crisps"}, {quantity: 3, name: "apples"}, {quantity: 8, name: "eggs"}, {quantity: 3, name: "peaches"} ];
        var alreadyBought = [];
        service.remove = function(itemIndex) {
            alreadyBought.push(toBuy[itemIndex]);
            toBuy.splice(itemIndex, 1);
        }
        service.getBought = function() {
            return alreadyBought;
        }
        service.getToBuy = function() {
            return toBuy;
        }
    }
})();