/* globals angular */

angular.module('profile.service', [])
  .factory('Profile', function ($http) {
    var data;

    var getSocialProfiles = function (userID) {
      userID = userID || 1;
      return $http({
        method: 'GET',
        url: '/api/users/' + userID + '/profiles'
      }).then(function (response) {
        data = response.data;
        //console.log(JSON.stringify(data));
        return data;
      });
    };

    return {
      getSocialProfiles: getSocialProfiles
    };
  });
