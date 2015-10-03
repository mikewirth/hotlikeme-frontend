(function (module) {
  'use strict';

  module.factory('AnonymousRestangular', function (Restangular) {
    return Restangular.withConfig(function (RestangularConfigurer) {
      // RestangularConfigurer.setDefaultHttpFields({withCredentials: false});
    });
  });

}(angular.module('hotlikeme.api', [
  'restangular'
])));