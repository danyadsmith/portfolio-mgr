/* globals angular */

angular.module('blog.main', [])
  .controller('BlogController', function ($scope, Blog) {
    $scope.name = 'Blog';
    $scope.data = {};
    //$scope.filterOnName = 'Picks';


    $scope.test = function (category) {
      console.log('Clicked!', category);
      $scope.filterOnName = category.name;

      console.log($scope.filterOnName);


    };

    Blog.getBlogPosts().then(function (posts) {
      $scope.data.posts = posts.rows;
      $scope.data.count = posts.count;
      $scope.data.limit = posts.limit;
      $scope.data.page = posts.page;
      $scope.data.offset = posts.offset;
      $scope.data.pages = [...Array(posts.count / posts.limit).keys()];
    });

    Blog.getBlogCategories().then(function (categories) {
      $scope.data.categories = categories;
    });
  });
