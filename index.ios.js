'use strict';

var React = require('react-native');
var SearchPage = require('./SearchPage');

// Allows us to call StyleSheet, etc instead of React.StyleSheet
var {
	StyleSheet,
	NavigatorIOS
} = React;

var PropertyFinderApp = React.createClass({
	render: function() {
		return (
			<NavigatorIOS
				style={styles.container}
				initialRoute={{
					title: 'Property Finder',
					component: SearchPage
			}} />
		);
	}
});

var styles = StyleSheet.create({
	container: {
		flex: 1
	}
});

React.AppRegistry.registerComponent('RWPropertyFinder', function() { return PropertyFinderApp });