import React from 'react';
import { View, Platform, KeyboardAvoidingView } from 'react-native';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';
import NetInfo from "@react-native-community/netinfo";
import AsyncStorage from '@react-native-community/async-storage';

const firebase = require('firebase');
require('firebase/firestore');

 export default class Chat extends React.Component {
  constructor() {
    super();

  if(!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: "AIzaSyBPuELOaVfUx4LUCD5k9Kab-8uFbhm_3l8",
      authDomain: "chatapp-f1831.firebaseapp.com",
      projectId: "chatapp-f1831",
      storageBucket: "chatapp-f1831.appspot.com",
      messagingSenderId: "27418270029",
      appId: "1:27418270029:web:2cc850b5e2f61aff3bbf04"
    });
  }

  this.referenceChatMessages = firebase.firestore().collection('messages');

 	this.state = {
 		messages: []
 	};
};

getMessages = async () => {
  let messages = "";
  try {
    messages = (await AsyncStorage.getItem("messages")) || [];
    this.setState({
      messages: JSON.parse(messages),
    });
  } catch (error) {
    console.log(error.message);
  }
};

saveMessages = async () => {
  try {
    await AsyncStorage.setItem(
      "messages",
      JSON.stringify(this.state.messages)
    );
  } catch (error) {
    console.log(error.message);
  }
};

deleteMessages = async () => {
  try {
    await AsyncStorage.removeItem("messages");
  } catch (error) {
    console.log(error.message);
  }
};

 	componentDidMount() {
 		let name = this.props.route.params.name;

     this.props.navigation.setOptions({ title: name });

     NetInfo.fetch().then((state) => {
      const isConnected = state.isConnected;
      if (isConnected) {
        this.setState({
          isConnected: true,
        });
        console.log('online');
 
        this.authUnsubscribe = firebase
          .auth()
          .onAuthStateChanged(async (user) => {
            if (!user) {
              await firebase.auth().signInAnonymously();
            }
       this.setState({
        uid: user.uid,
             messages: [],
           });

           this.unsubscribe = this.referenceChatMessages
             .orderBy("createdAt", "desc")
             .onSnapshot(this.onCollectionUpdate);
         });
     } else {
       this.setState({
         isConnected: false,
       });
       this.getMessages();
     }
     console.log('offline');
   });
 }

  componentWillUnmount() {
    this.unsubscribe();
  }
  onCollectionUpdate = (querySnapshot) => {
    const messages = [];
    querySnapshot.forEach((doc) => {
      let data = doc.data(); 
      messages.push({
        _id:data._id,
        text: data.text || "",
        createdAt: data.createdAt.toDate(),
        user: data.user,
      });
    });
    this.setState({
      messages,
    });
  };

  addMessage() {
    const message=this.state.messages[0];
    this.referenceChatMessages.add({
      _id:message._id,
      text:message.text,
      createdAt:message.createdAt,
      user:message.user
    });
  }

 	// This appends the new message to the messages object.
 	onSend(messages=[]) {
    this.setState(
      (previousState)=>({
        messages:GiftedChat.append(previousState.messages, messages),
      }),
    ()=>{
      this.addMessage();
      this.saveMessages();
      }
    );
  }

  renderInputToolbar = (props) => {
    if (props.isConnected === false) {
    } else {
      return <InputToolbar {...props} />;
    }
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