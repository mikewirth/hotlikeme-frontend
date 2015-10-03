// Ionic HotLikeMe App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'hotlikeme' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'hotlikeme.services' is found in services.js
// 'hotlikeme.controllers' is found in controllers.js
angular.module('hotlikeme', [
  'ionic',
  'hotlikeme.controllers',
  'hotlikeme.services',
  'hotlikeme.api',
  'ionic.contrib.ui.tinderCards',
  'restangular',
  'ngOpenFB'
])

.run(function($ionicPlatform, Restangular, ngFB) {
  // Set API endpoint
  Restangular.setBaseUrl('http://172.27.0.50:5000/api');

  // Initialize FB app
  ngFB.init({appId: '1629298697340872'});

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, RestangularProvider) {

  // Unwrap our results

  RestangularProvider.addResponseInterceptor(function (data, operation, what) {
    var newData;
    if (data[what]) {
      newData = data[what];
    } else if (typeof what === 'string' && data[what.slice(0, -1)]) {
      newData = data[what.slice(0, -1)];
    } else {
      newData = data;
    }

    if (operation == 'getList') {
      newData = newData['results'];
    }

    if (data.additional_data) {
      newData.additional_data = data.additional_data;
    }
    return newData;
  });

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })  

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.rate', {
    url: '/rate',
    views: {
      'tab-rate': {
        templateUrl: 'templates/tab-rate.html',
        controller: 'RateCtrl'
      }
    }
  })

  .state('tab.toplists', {
      url: '/toplists',
      views: {
        'tab-toplists': {
          templateUrl: 'templates/tab-toplists.html',
          controller: 'ToplistsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
