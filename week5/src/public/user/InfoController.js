(function () {

    "use strict";
    angular.module('public')
    .controller('InfoController', InfoController);

    InfoController.$inject = ['MenuService', 'ApiPath'];

    function InfoController(MenuService, ApiPath) {
        var info = this;
        info.apiPath = ApiPath;
        info.user = MenuService.getUser();
        info.signed = false;
        if (info.user !== undefined) {
            info.signed = true;
        } else {
            info.signed = false;
        }
    };

})();