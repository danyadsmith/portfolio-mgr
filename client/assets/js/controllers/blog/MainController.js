/* globals angular */

angular.module('blog.main', [])
  .controller('BlogController', ['$rootScope', '$scope', '$window', '$location', 'Blog', function ($rootScope, $scope, $window, $location, Blog) {
    var postCount = 0;
    $scope.name = 'Blog';
    $rootScope.data = {};
    $rootScope.category = $location.search().category || 0;
    $rootScope.limit = $location.search().limit || 0;
    $rootScope.offset = $location.search().offset || 0;
    // $rootScope.limit = $stateParams.limit || 0;
    // $rootScope.offset = $stateParams.offset || 0;
    //$rootScope.filterOnName = '';
    $rootScope.currentPage = 1;
    $rootScope.pageSize = 3;
    $rootScope.currentCategory = null;

    Blog.getBlogCategories().then(function (categories) {
      $rootScope.data.categories = categories;
    }).then(function () {
      if ($rootScope.category > 0) {
        Blog.getCategoryById($rootScope.category).then(function (category) {
          $rootScope.data.category = category;
          $rootScope.currentCategory = category.name;
        }).then(function () {
          console.log('Category Returned from Root Scope:', $rootScope.category);
          Blog.getBlogPostsByCategory($rootScope.category, $rootScope.limit, $rootScope.offset).then(function (posts) {
            $rootScope.data.posts = posts.rows;
            $rootScope.data.count = posts.count;
            $rootScope.data.limit = posts.limit;
            $rootScope.data.offset = posts.offset;
            $rootScope.data.pageCount = posts.pageCount;
            $rootScope.data.pages = posts.pages;
            $rootScope.data.page = posts.page;
          });
        });
      } else {
        console.log('No Category Returned from Root Scope');
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
      }
    });

    $scope.filterByCategory = function (category) {
      var categoryUrl = 'http://' + $window.location.host + '/blog/?category=' + category.id + '&limit=3&offset=0';
      $window.location.href = categoryUrl;
    };

    $scope.pageChangeHandler = function (switchToPage) {
      var offset = (switchToPage === 1) ? 0 : (switchToPage * $rootScope.data.limit) - $rootScope.data.limit;
      console.log('Changing to Page:', switchToPage);
      console.log('Changing Page via Offset:', offset);
      var categoryUrl = 'http://' + $window.location.host + '/blog/?category=' + $rootScope.category + '&limit=3&offset=' + offset;
      $window.location.href = categoryUrl;
    };
  }]);
