/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
  Navigator,
} = React;

var Button = require('react-native-button');

var LoginPage = require('./loginPage');

var HotLikeMe = React.createClass({
  render: function() {
    var navigationView = (
      <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Rate</Text>
    );
    return (
      <Navigator
          initialRoute={{name: 'My First Scene', component: LoginPage}}
          renderScene={(route, navigator) => {
            if (route.component) {
                        return React.createElement(route.component, { navigator });
            }
          }}
        />
    );
  },

  _handlePress(event) {
      alert('bla');
  },
});



// var FBSDKLogin = require('react-native-fbsdklogin');
// var {
//   FBSDKLoginButton,
// } = FBSDKLogin;

// var Login = React.createClass({
//   render: function() {
//     return (
//       <View>
//         <FBSDKLoginButton
//           onLoginFinished={(error, result) => {
//             if (error) {
//               alert('Error logging in.');
//             } else {
//               if (result.isCanceled) {
//                 alert('Login cancelled.');
//               } else {
//                 alert('Logged in.');
//               }
//             }
//           }}
//           onLogoutFinished={() => alert('Logged out.')}
//           readPermissions={[]}
//           publishPermissions={['publish_actions']}/>
//       </View>
//     );
//   }
// });







// var HotLikeMe = React.createClass({
//   render: function() {
//     var navigationView = (
//       <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Rate</Text>
//     );
//     return (
//       <Navigator
//           initialRoute={{name: 'My First Scene', index: 0}}
//           renderScene={(route, navigator) =>
//             <MySceneComponent
//               name={route.name}
//               onForward={() => {
//                 var nextIndex = route.index + 1;
//                 navigator.push({
//                   name: 'Scene ' + nextIndex,
//                   index: nextIndex,
//                 });
//               }}
//               onBack={() => {
//                 if (route.index > 0) {
//                   navigator.pop();
//                 }
//               }}
//             />
//           }
//         />
//     );
//   }
// });





// render: function() {
//   var navigationView = (
//     <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
//   );
//   return (
//     <DrawerLayoutAndroid
//       drawerWidth={300}
//       drawerPosition={DrawerLayoutAndroid.positions.Left}
//       renderNavigationView={() => navigationView}>
//       <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
//       <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
//     </DrawerLayoutAndroid>
//   );
// },


var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('HotLikeMe', () => HotLikeMe);
