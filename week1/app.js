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
            } else {
                itemList = itemList.replace(/ /g, "").split(",");
                itemList = itemList.filter(function(el) {
                    return el!="";
                });
                if (itemList.length < 4 && itemList.length > 0) {
                    $scope.SayMessage = "Enjoy!";
                } else if (itemList.length >= 4) {
                    $scope.SayMessage = "Too much!";
                } else if (itemList.length == 0) {
                    $scope.SayMessage = "Please enter data first";
                }
            }
            if ($scope.SayMessage == "Please enter data first") {
                $scope.value = "!ok";
            } else {
                $scope.value = "ok";
            }
        }
    }
})();