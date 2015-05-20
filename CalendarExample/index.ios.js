'use strict';

var React = require('react-native');
var Calendar = require('react-native-calendar');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var CalendarExample = React.createClass({
  render: function() {
    return (
      <Calendar 
        scrollEnabled={true}
        showControls={true}
        titleFormat={'MMMM YYYY'}
        prevButtonText={'Prev'}
        nextButtonText={'Next'}
      />
    );
  }
});

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

AppRegistry.registerComponent('CalendarExample', () => CalendarExample);