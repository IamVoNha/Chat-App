import React from 'react';
 import { View, Text } from 'react-native';

 export default class Chat extends React.Component {
 	render() {
 		let name = this.props.route.params.name;
 		let background = this.props.route.params.background;

 		this.props.navigation.setOptions({ title: name });

 		return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: background
        }}
      >
        {name ? (
          <Text style={{ color: '#fff' }}>Hello, {name}</Text>
        ) : (
        <Text style={{ color: '#fff' }}>Please state your name!</Text>
        )}
    </View>
 		);
 	}
 }