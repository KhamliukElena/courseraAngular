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
            itemList = itemList.replace(/ /g, "").split(",");
            itemList = itemList.filter(function(el) {
                return el!="";
            });
            console.log(itemList);
            if (itemList.length < 4) {
                $scope.SayMessage = "Enjoy!";
            } else {
                $scope.SayMessage = "Too much!";
            }

        }

    }
})();