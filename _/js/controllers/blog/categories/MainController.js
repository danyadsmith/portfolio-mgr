/* globals angular */

angular.module('blog-categories.main', [])
  .controller('BlogPostsByCategoryController', ['$rootScope', '$scope', '$filter', '$location', 'Blog', function ($rootScope, $scope, $filter, $location, Blog) {
    $scope.name = 'Blog Posts by Category';
    $scope.data = {};
    $rootScope.filterOnName = '';
    $scope.currentPage = 1;
    $scope.pageSize = 3;

    if($location.search().id) {
      Blog.getBlogPostsByCategory($location.search().id).then(function (posts) {
        $scope.data.posts = posts;
      });
      Blog.getCategoryById($location.search().id).then(function (category) {
        $scope.category = category;
      });
    } else {
      Blog.getBlogCategories().then(function (categories) {
        $scope.data.categories = categories;
      });
    }


  }]);
