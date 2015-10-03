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

var TabBar = require('react-native-tabbar');

class LoggedInWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: 'USD',
        };
    }

    render() {
        return (
            <TabBar tabHeight={50} selected="Tab 1">
            <TabBar.Item name="Tab 1">
              <TabBar.Item.Icon>
                <Text style={{fontSize: 15, textAlign: 'left'}}>
                  Rate
                </Text>
              </TabBar.Item.Icon>
              <TabBar.Item.Content>
                <View>
                  <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>
                  here we are logged in!!!
                  </Text>
                </View>
              </TabBar.Item.Content>
            </TabBar.Item>
            <TabBar.Item name="Tab 2">
              <TabBar.Item.Icon>
                <Text style={{fontSize: 15, textAlign: 'left'}}>
                  Toplists
                </Text>
              </TabBar.Item.Icon>
              <TabBar.Item.Content>
                <View>
                  <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>
                  This is tab 2
                  </Text>
                </View>
              </TabBar.Item.Content>
            </TabBar.Item>
            </TabBar>
        );
    }
};

module.exports = LoggedInWrapper;
