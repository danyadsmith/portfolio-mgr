/* globals angular */

angular.module('blog-posts.main', [])
  .controller('BlogPostsController', ['$rootScope', '$scope', '$filter', '$location', 'Blog', function ($rootScope, $scope, $filter, $location, Blog) {
    $scope.name = 'Blog Posts';
    $scope.data = {};
    $rootScope.filterOnName = '';
    $scope.currentPage = 1;
    $scope.pageSize = 3;

    if($location.search().id) {
      Blog.getBlogPostById($location.search().id).then(function (post) {
        console.log($location.search().id);
        $scope.data.post = post;
      });
    } else {
      Blog.getBlogPosts().then(function (posts) {
        $scope.data.posts = posts.rows;
        $scope.data.count = posts.count;
      });
    }

  }]);
