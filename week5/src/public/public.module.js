(function() {
"use strict";
/**
 * Public restaurant application. Includes the common module and ui-router.
 */
    angular.module('public', ['ui.router', 'common']);

    angular.module('public')
    .controller('SignUpController', SignUpController);
        
    function SignUpController() {
        var reg = this;
        
        reg.submit = function () {
            reg.completed = true;
        };
    }
})();
