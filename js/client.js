'use strict';

angular.module('flixrch', [])
  .controller('mainCtrl', function($scope, $http) {
    $scope.$watch('query', function() {
      fetch();
    });

    $scope.query = "Ran";

    function fetch() {
      $http.get("https://www.omdbapi.com/?t=" + $scope.query + "&tomatoes=true&plot=full&r=json")
        .then(function(response) {
          $scope.movie = response.data;
        });
      $http.get("https://www.omdbapi.com/?s=" + $scope.query)
        .then(function(response) {
          $scope.related = response.data;
        });
    }

    $scope.update = function(movie) {
      $scope.query = movie.Title;
    };

    $scope.select = function() {
      this.setSelectionRange(0, this.value.length);
    };
  });