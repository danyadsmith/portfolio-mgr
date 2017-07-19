/* globals angular */

angular.module('blog.service', [])
  .factory('Blog', function ($http) {
    var data;

    var getBlogCategories = function () {
      return $http({
        method: 'GET',
        url: '/api/blogs/categories'
      }).then(function (response) {
        data = response.data;
        //console.log(JSON.stringify(data));
        return data;
      });
    };

    var getBlogPostsByCategory = function (id) {
      return $http({
        method: 'GET',
        url: '/api/blogs/categories/' + id
      }).then(function (response) {
        data = response.data;
        //console.log(JSON.stringify(data));
        return data;
      });
    };

    var getBlogPosts = function (limit=3, offset=0) {
      return $http({
        method: 'GET',
        url: '/api/blogs/posts?limit=' + limit + '&offset=' + offset
      }).then(function (response) {
        data = response.data;
        //console.log(JSON.stringify(data));
        return data;
      });
    };

    var getBlogPostById = function (id) {
      return $http({
        method: 'GET',
        url: '/api/blogs/posts/' + id
      }).then(function (response) {
        data = response.data;
        //console.log(JSON.stringify(data));
        return data;
      });
    };

    var getCategoryById = function (id) {
      return $http({
        method: 'GET',
        url: '/api/categories/' + id
      }).then(function (response) {
        data = response.data;
        //console.log(JSON.stringify(data));
        return data;
      });
    };

    var getLatestBlogPosts = function (limit) {
      limit = limit || 3;
      return $http({
        method: 'GET',
        url: '/api/blogs/posts/' + limit + '/0'
      }).then(function (response) {
        data = response.data;
        //console.log(JSON.stringify(data));
        return data;
      });
    };

    return {
      getBlogCategories: getBlogCategories,
      getBlogPosts: getBlogPosts,
      getBlogPostsByCategory: getBlogPostsByCategory,
      getBlogPostById: getBlogPostById,
      getCategoryById: getCategoryById,
      getLatestBlogPosts: getLatestBlogPosts
    };
  });
