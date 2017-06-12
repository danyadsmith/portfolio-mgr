/* globals angular */

angular.module('homepage.portfolio', [])
  .controller('PortfolioController', function ($scope, Portfolio) {
    $scope.name = 'Portfolio';
    $scope.data = {};
    Portfolio.getPortfolioItems().then(function (portfolioItems) {
      $scope.data.portfolios = portfolioItems;
    });
  });
