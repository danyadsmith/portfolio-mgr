/* globals angular */

angular.module('blog.main', [])
  .controller('BlogMainController', function ($scope, Blog) {
    $scope.name = 'Blog';
    $scope.data = {};
    Blog.getBlogPosts().then(function (posts) {
      $scope.data.posts = posts.rows;
    });
  });
