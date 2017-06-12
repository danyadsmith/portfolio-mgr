/* globals angular */

angular.module('portfolio.service', [])
  .factory('Portfolio', function ($http) {
    var data;

    var getPortfolioItems = function (userID) {
      userID = userID || 1;
      return $http({
        method: 'GET',
        url: '/api/users/' + userID + '/portfolios'
      }).then(function (response) {
        data = response.data;
        console.log(JSON.stringify(data));
        return data;
      });
    };

    return {
      getPortfolioItems: getPortfolioItems
    };
  });
