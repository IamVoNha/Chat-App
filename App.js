import React, { Component } from 'react';
// import screens from components
import HomeScreen from './components/Start';
import Chat from './components/Chat';

// import reat native gesture handler
import 'react-native-gesture-handler';

// import react Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Create the Navigator
const Stack = createStackNavigator();

export default class HelloWorld extends Component {
  constructor(props) {
    super(props);
  }

  /* Create parent view to hold 3 sections use flexDirection: column to display the view's children on top of eachother */
  /* placeholder text color must be changed inline */
  render() {

    return (
      <NavigationContainer>
        {/* All other code goes here in order for StackNavigator to work. */}
        <Stack.Navigator
          initialRouteName="Start"
        >
          <Stack.Screen
            name="Start"
            component={HomeScreen}
          />
          <Stack.Screen
            name="Chat"
            component={Chat}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}