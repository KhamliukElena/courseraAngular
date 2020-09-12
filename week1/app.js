(function () {
    'use strict';
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {

        $scope.ifTooMuch = function () {
            var itemList = $scope.items;
            if (itemList == undefined || itemList === "") {
                $scope.SayMessage = "Please enter data first";
                return;
            }
            itemList = itemList.split(",");
            console.log(itemList);
            if (itemList.length < 4) {
                $scope.SayMessage = "Enjoy!";
            } else if (itemList.length >= 4) {
                $scope.SayMessage = "Too much!";
            }

        }

    }
})();