/* globals angular */

angular.module('portfolio.gallery', [])
  .controller('GalleryController', function ($scope, Portfolio) {
    $scope.name = 'Gallery';
    var data = Portfolio.getPortfolioItems();
    console.log(JSON.stringify(data));
  });
