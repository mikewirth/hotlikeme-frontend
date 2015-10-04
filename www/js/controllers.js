angular.module('hotlikeme.controllers', ['ngOpenFB'])

.controller('LoginCtrl', function($scope, $rootScope, $state, ngFB, UsersAPI) {
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
                        profilePic: "http://graph.facebook.com/" + user.id + "/picture?width=550"
                      };
                      console.log(userData);
                      UsersAPI.create(userData).then(function (response) {
                        console.log(response);
                        $rootScope.user = response;
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

.controller('RateCtrl', function($scope, $rootScope, ComparisonsAPI, UsersAPI) {
  console.log("entered");

  $scope.$on('$ionicView.enter', function() {
    UsersAPI.get('me').then(function (response) {
      $rootScope.user = response;
      ComparisonsAPI.getAll($rootScope.user.id).then(function (response) {
        console.log(response);
        $scope.comparisons = response;
        $scope.cardsLeft = response.length;
        // SessionsAPI.setCurrentUser(response);
      });
    });
  });


  //  $scope.comparisons = [
  //   { id: 1234 },
  //   { id: 2 },
  //   { id: 3 }
  // ];

  $scope.cardsControl = {}

  $scope.cardDestroyed = function(index) {
    console.log("card destroyed" + index);
    // $scope.comparisons.splice(index, 1);
    // $scope.cards.splice(index, 1);
    $scope.cardsLeft--;
  };

  $scope.cardSwiped = function(index) {
    // var newCard = ""// new card data
    // $scope.cards.push(newCard);
    console.log("swiped" + index);
  };

  $scope.swipeLeft = function() {
    $scope.cardsControl.swipeLeft();
  }
  $scope.swipeRight = function() {
    $scope.cardsControl.swipeRight();
  }

  $scope.cardSwipedLeft = function(index) {
    console.log("swiped left" + index);
    var comparison = $scope.comparisons[index]; //$scope.comparisons.splice(index, 1);
    ComparisonsAPI.update(comparison.id, 'male');
  };

  $scope.cardSwipedRight = function(index) {
    console.log("swiped right" + index);

    var comparison = $scope.comparisons[index];
    ComparisonsAPI.update(comparison.id, 'female');
  };

  $scope.cardPartialSwipe = function(position)  {
    // console.log("partial" + position);
    // var newCard = ""// new card data
    // $scope.cards.push(newCard);
    // console.log("partial swipe" + position);
  };

  $scope.cardEqual = function(index) {
    // var newCard = ""// new card data
    // $scope.cards.push(newCard);
    console.log("swiped right" + index);

    $scope.cardsControl.swipeRight();
    var comparison = $scope.comparisons[index];
    ComparisonsAPI.update(comparison[0].id, 'equal');
  };
})

.controller('ToplistsCtrl', function($scope, CouplesAPI) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.$on('$ionicView.enter', function() {
    console.log('couples');
    CouplesAPI.getAll().then(function (response) {
      console.log(response);
      
      response.forEach(function (item) {
        var rand = Math.random();
        var coeff = rand < 0.5 ? -1 : 1;
        var value = Math.round((item.male.hotness + (rand * 20/100) * coeff) * 10) / 10;
        item.female.hotness = value;
      })
      
      $scope.couples = response;
    });
  });
  $scope.Math = window.Math;
})

.controller('AccountCtrl', function($scope, UsersAPI) {
  $scope.$on('$ionicView.enter', function() {
    UsersAPI.get('me').then(function (response) {
      $scope.user = response;
      UsersAPI.getAllMatches($scope.user.id).then(function (response) {
        $scope.matches = response;
      });
    });
  });

  $scope.Math = window.Math;
});
