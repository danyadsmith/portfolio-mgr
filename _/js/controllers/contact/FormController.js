/* globals angular */

angular.module('contact.form', [])
  .controller('FormController', function ($scope, $location, Message) {
    $scope.name = 'Form';
    var defaultForm = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
    $scope.contact = angular.copy(defaultForm);

    $scope.sendMessage = function (form) {
      Message.sendMessage(this.contact);
      form.$setPristine();
      $scope.contact = angular.copy(defaultForm);
      form.$setUntouched();
    };
  });
