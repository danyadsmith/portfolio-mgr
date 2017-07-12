/* globals angular */

angular.module('blog.pagination', [])
  .controller('PaginationController', function ($scope) {
    $scope.pageChangeHandler = function (num) {
      console.log('going to page ' + num);
    };
  });
