/* globals angular */

angular.module('blog.main', [])
  .controller('BlogMainController', function ($scope, Blog) {
    $scope.name = 'Blog';
    $scope.data = {};
    Blog.getBlogPosts().then(function (posts) {
      $scope.data.posts = posts.rows;
      $scope.data.count = posts.count;
      $scope.data.limit = posts.limit;
      $scope.data.page = posts.page;
      $scope.data.offset = posts.offset;
      $scope.data.pages = [...Array(posts.count / posts.limit).keys()];
    });
  });
