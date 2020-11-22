(function () {

    "use strict";
    angular.module('public')
    .controller('InfoController', InfoController);

    InfoController.$inject = ['MenuService', 'ApiPath'];

    function InfoController(MenuService, ApiPath) {
        var info = this;
        info.apiPath = ApiPath;
        info.user = MenuService.getUser();
        if (angular.equals(info.user, {})) {
            info.signed = false;
        } else {
            info.signed = true;
        }
    };

})();