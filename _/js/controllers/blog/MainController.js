/* globals angular */

angular.module('blog.main', [])
  .controller('BlogController', ['$rootScope', '$scope', '$filter', '$location', 'Blog', function ($rootScope, $scope, $filter, $location, Blog) {
    $scope.name = 'Blog';
    $scope.data = {};
    $rootScope.filterOnName = '';
    $scope.currentPage = 1;
    $scope.pageSize = 3;

    Blog.getBlogPosts().then(function (posts) {
      $scope.data.posts = posts.rows;
      $scope.data.count = posts.count;
      // $scope.data.limit = posts.limit;
      // $scope.data.page = posts.page;
      // $scope.data.offset = posts.offset;
      // $scope.data.pages = [...Array(posts.count / posts.limit).keys()];
    });

    Blog.getBlogCategories().then(function (categories) {
      $scope.data.categories = categories;
    });

    $scope.filterByCategory = function (category) {
      console.log('Clicked!', category);
      $scope.filterOnName = category.name;
      console.log($scope.filterOnName);
      $rootScope.filterOnName = category.name;
      console.log($location);
      $location.url($location.path());
      return $filter('filter')($scope.data.posts, $rootScope.filterOnName);
    };

    $scope.pageChangeHandler = function (num) {
      console.log('Blog page changed to ' + num);
    };
  }]);
