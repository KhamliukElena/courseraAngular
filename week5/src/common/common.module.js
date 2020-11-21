(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://ekhamliuk-coursera-week5.herokuapp.com/')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
