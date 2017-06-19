/* globals angular */

angular.module('portfolio.gallery', [])
  .controller('GalleryController', function ($scope, Portfolio) {
    $scope.name = 'Gallery';
    $scope.data = {};
    Portfolio.getPortfolioItems().then(function (portfolios) {
      $scope.data.portfolios = portfolios;
    });
    //console.log(JSON.stringify(data));
  });
