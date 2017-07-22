/* globals angular */

angular.module('message.service', [])
  .factory('Message', function ($http) {

    var sendMessage = function (message) {
      return $http({
        method: 'POST',
        url: '/api/messages',
        data: JSON.stringify(message)
      });
    };

    return {
      sendMessage: sendMessage
    };
  });
