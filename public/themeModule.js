
var themeModule = angular.module('themeModule', ['ngMaterial'])
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default');
});