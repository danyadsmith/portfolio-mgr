/* globals angular */

angular.module('blog.sidebar', [])
  .controller('BlogSidebarController', function ($scope, Blog) {
    $scope.name = 'Blog';
    $scope.data = {};
    Blog.getBlogCategories().then(function (categories) {
      $scope.data.categories = categories;
    });
  });
