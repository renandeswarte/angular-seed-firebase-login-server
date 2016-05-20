angular.module('myApp.welcome', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/welcome', {
    authenticate: false,
    templateUrl: 'view/welcome/welcome.html',
    controller: 'welcomeCtrl'
  });
}])

.controller('welcomeCtrl', ['$scope', function($scope) {
  // Set default min height regarding screen height
  angular.element('.page').css('min-height', window.innerHeight - 40 + 'px');
}]);