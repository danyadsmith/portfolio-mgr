/* globals angular */

angular.module('blog.main', [])
  .controller('BlogController', ['$rootScope', '$scope', '$filter', '$location', 'Blog', function ($rootScope, $scope, $filter, $location, Blog) {
    var postCount = 0;
    $scope.name = 'Blog';
    $rootScope.data = {};
    $rootScope.filterOnName = '';
    $rootScope.currentPage = 1;
    $rootScope.pageSize = 3;
    $rootScope.currentCategory = '';

    Blog.getBlogPosts().then(function (posts) {
      postCount = posts.count;
      console.log(postCount);
    }).then(function (postCount) {
      Blog.getLatestBlogPosts(postCount).then(function (posts) {
        $rootScope.data.posts = posts.rows;
        $rootScope.data.count = posts.count;
        $rootScope.data.limit = posts.limit;
        $rootScope.data.offset = posts.offset;
        $rootScope.data.pageCount = posts.pageCount;
        $rootScope.data.pages = posts.pages;
        $rootScope.data.page = posts.page;
        //console.log(posts);
      });
    });


    Blog.getBlogCategories().then(function (categories) {
      $rootScope.data.categories = categories;
    });

    $scope.filterByCategory = function (category) {
      console.log('Clicked!', category);
      Blog.getBlogPostsByCategory(category.id).then(function (posts) {
        $rootScope.data.posts = posts.rows;
        $rootScope.data.count = posts.count;
        $rootScope.data.pages = posts.pages;
      });
      $scope.filterOnName = category.name;
      console.log($scope.filterOnName);
      $rootScope.filterOnName = category.name;
      console.log($location);
      $location.url($location.path());
      return $filter('filter')($rootScope.data.posts, $rootScope.filterOnName);
    };

    $scope.pageChangeHandler = function (switchToPage) {
      var currentPage = $rootScope.data.page;
      var pageDiff = (switchToPage > currentPage) ? switchToPage - currentPage : currentPage - switchToPage;
      var newOffset =  $rootScope.data.offset + ($rootScope.data.limit * pageDiff);
      console.log('Current page: ', currentPage);
      console.log('Current offset: ', $rootScope.data.offset);
      console.log('Blog page changed to ' + switchToPage);
      console.log('New offset:', newOffset);
      $rootScope.data.offset = newOffset;
      $rootScope.data.page = switchToPage;
      $location.url($location.path());
      return $filter('limitTo')($rootScope.data.posts, $rootScope.data.limit, newOffset);
    };
  }]);
