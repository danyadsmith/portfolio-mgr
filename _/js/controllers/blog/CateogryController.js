/* globals angular */

angular.module('blog.category', [])
  .controller('BlogCategoryController', function ($scope, Blog) {
    $scope.name = 'Blog';
    $scope.data = {};
    Blog.getBlogPostsByCategory().then(function (posts) {
      $scope.data.posts = posts;
    });
  });
