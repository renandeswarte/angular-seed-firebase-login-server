angular.module('myApp.homepage', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    authenticate: true,
    templateUrl: 'view/home/home.html',
    controller: 'homepage'
  });
}])

.controller('homepage', ['$scope', '$timeout', function($scope, $timeout ) {

  // Set default min height regarding screen height
  angular.element('.page').css('min-height', window.innerHeight - 40 + 'px');

  $scope.initialize = function() {
    $timeout(function(){ angular.element('#loader').remove() }, 1000)
  }
  
}]);
