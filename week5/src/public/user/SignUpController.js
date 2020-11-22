(function() {
    "user strict";

    angular.module('public')
    .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['MenuService'];
        
    function SignUpController(MenuService) {
        var sign = this;        
        sign.submit = function () {
            MenuService.getFavDish(sign.user.shortName).then(function(response) {
                sign.user.details = response.data;
                MenuService.save(sign.user);
                sign.completed = true;
                sign.error = false;
            }, function(error) {
                sign.completed = false;
                sign.error = true;
            });
        };
    }

})();