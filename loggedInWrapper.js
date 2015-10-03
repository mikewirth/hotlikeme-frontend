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

class LoggedInWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: 'USD',
        };
    }

    render() {
        return (
            <View>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>
                here we are logged in!!!
                </Text>
            </View>
        );
    }
};

module.exports = LoggedInWrapper;
