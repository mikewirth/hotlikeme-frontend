/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Component,
  Text,
  View,
  DrawerLayoutAndroid,
  Navigator,
} = React;

var Button = require('react-native-button');

var LoggedInWrapper = require('./loggedInWrapper');

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <View>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>
                Here will be the login form
                </Text>
                <Button
                  style={{borderWidth: 1, borderColor: 'blue'}}
                  onPress={this._handlePress.bind(this)}>
                  Login with Facebook
                </Button>
            </View>
        );
    }

    _handlePress(event) {
      // Let's replace our view with the logged in view.
      // Normally this would be "push" instead of "replace" to get some hierarchy.
      this.props.navigator.replace({
        name: 'LoggedInWrapper',
        component: LoggedInWrapper
      });
    }
};

module.exports = LoginPage;
