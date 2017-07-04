/* globals angular */

angular.module('blog.service', [])
  .factory('Blog', function ($http) {
    var data;

    var getBlogCategories = function (userID) {
      userID = userID || 1;
      return $http({
        method: 'GET',
        url: '/api/users/' + userID + '/blogcategories'
      }).then(function (response) {
        data = response.data;
        console.log(JSON.stringify(data));
        return data;
      });
    };

    var getBlogPosts = function (userID) {
      userID = userID || 1;
      return $http({
        method: 'GET',
        url: '/api/users/' + userID + '/blogs'
      }).then(function (response) {
        data = response.data;
        console.log(JSON.stringify(data));
        return data;
      });
    };

    return {
      getBlogCategories: getBlogCategories,
      getBlogPosts: getBlogPosts
    };
  });
