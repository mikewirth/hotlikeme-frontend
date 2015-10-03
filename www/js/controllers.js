angular.module('hotlikeme.controllers', ['ngOpenFB'])

.controller('LoginCtrl', function($scope, $state, ngFB) {
  $scope.fbLogin = function () {
    ngFB.login({scope: 'email, public_profile, user_friends'}).then(
        function (response) {
            if (response.status === 'connected') {
                console.log('Facebook login succeeded');
                $state.go('tab.rate');
            } else {
                alert('Facebook login failed');
            }
        });
  };

  $scope.loginTest = function () {
    $state.go('tab.rate');
  };
})

.controller('RateCtrl', function($scope, UsersAPI) {
  var userData = {
    name: "test",
    gender: "male"
  };
  UsersAPI.create(userData).then(function (response) {
    console.log("");
    // SessionsAPI.setCurrentUser(response);
  });

   $scope.cards = [
    { name: "bla" },
    { name: "bla" },
    { name: "blu" }
  ];

  $scope.cardDestroyed = function(index) {
    $scope.cards.splice(index, 1);
  };

  $scope.cardSwiped = function(index) {
    // var newCard = ""// new card data
    // $scope.cards.push(newCard);
  };
})

.controller('ToplistsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
