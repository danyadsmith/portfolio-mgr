/* globals angular */

angular.module('homepage.blog', [])
  .controller('BlogController', function ($scope, Blog) {
    $scope.name = 'Blog';
    $scope.data = {};
    Blog.getLatestBlogPosts(5).then(function (posts) {
      $scope.data.posts = posts.rows;
    });
  });
