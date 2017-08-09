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

    var getBlogPostsByCategory = function (id, limit, offset) {
      var apiRoute = '';
      if (limit && offset) {
        apiRoute = id + '/' + limit + '/' + offset;
      } else {
        apiRoute = id;
      }
      return $http({
        method: 'GET',
        url: '/api/blogs/categories/' + apiRoute
      }).then(function (response) {
        data = response.data;
        //console.log(JSON.stringify(data));
        return data;
      });
    };

    var getBlogPosts = function () {
      return $http({
        method: 'GET',
        url: '/api/blogs/posts'
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

    var getLatestBlogPosts = function (limit, offset) {
      limit = limit || 3;
      offset = offset || 0;
      let limitString;

      switch (limit) {
      case '*':
      case 0:
        limitString = '';
        break;
      default:
        limitString = limit + '/' + offset;
        break;
      }

      return $http({
        method: 'GET',
        url: '/api/blogs/posts/' + limitString
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
