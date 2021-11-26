import React from 'react';
import { View, Platform, KeyboardAvoidingView } from 'react-native';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';

 export default class Chat extends React.Component {
 	state = {
 		messages: []
 	};

 	componentDidMount() {
 		let name = this.props.route.params.name;
 		this.setState({
 			messages: [
 				{
 					_id: 1,
 					text: 'Hello developer',
 					createdAt: new Date(),
 					user: {
 						_id: 2,
 						name: 'React Native',
 						avatar: 'https://placeimg.com/140/140/any',
 					},
 				},
 				{
 					_id: 2,
 					text: name +` has entered the chat.`,
 					createdAt: new Date(),
 					system: true,
 				}
 			]
 		});
 	}

 	// This appends the new message to the messages object.
 	onSend = (messages = []) => {
 		this.setState((previousState) => ({
 			messages: GiftedChat.append(previousState.messages, messages)
 		}));
 	};

 	// Customizing the right bubble message color to blue!
 	renderBubble(props) {
 		return (
 			<Bubble
 				{...props}
 				wrapperStyle={{
 					right: {
 						backgroundColor: '#0096FF'
 					}
 				}}
 			/>
 		)
 	}

 	render() {
 		let name = this.props.route.params.name;
 		let background = this.props.route.params.background;
    // Sets the entered name as the title in the Chat screen
		this.props.navigation.setOptions({ title: name });
		return (
 			<View style={{ flex: 1, backgroundColor: background }}>
 				<GiftedChat
            //change the color of the chat bubble
            renderBubble={this.renderBubble.bind(this)}
            messages={this.state.messages}
            onSend={messages => this.onSend(messages)}
            user={{
              _id: 1,
            }}
        />
          {Platform.OS === 'android' ? 
          <KeyboardAvoidingView behavior="height" /> : null}
      </View>
    )
  }
}