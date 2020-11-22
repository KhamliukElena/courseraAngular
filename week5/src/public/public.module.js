(function() {
"use strict";
/**
 * Public restaurant application. Includes the common module and ui-router.
 */
    angular.module('public', ['ui.router', 'common']);

    angular.module('public')
    .controller('SignUpController', SignUpController);
        
    function SignUpController() {
        var sign = this;
        
        sign.submit = function () {
            sign.completed = true;

        };
    }
})();
