angular.module('hotlikeme.controllers', [])

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
