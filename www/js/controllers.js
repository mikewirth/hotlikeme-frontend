angular.module('hotlikeme.controllers', ['ngOpenFB'])

.controller('LoginCtrl', function($scope, $state, ngFB, UsersAPI) {
  $scope.fbLogin = function () {
    ngFB.login({scope: 'email, public_profile, user_friends, user_birthday'}).then(
        function (response) {
            if (response.status === 'connected') {
                console.log('Facebook login succeeded');
                ngFB.api({
                  path: '/me',
                  params: {fields: 'id,name,birthday,gender,picture'}
                }).then(
                  function (user) {
                      console.log(user);
                      var userData = {
                        id: user.id,
                        gender: user.gender,
                        name: user.name,
                        age: 24,
                        profilePic: user.picture.data.url
                      };
                      console.log(userData);
                      UsersAPI.create(userData).then(function (response) {
                        console.log(response);
                        // SessionsAPI.setCurrentUser(response);
                        $state.go('tab.rate');
                      });

                  },
                  function (error) {
                      alert('Facebook error: ' + error.error_description);
                  }
                );
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
    { name: "bla" }
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
