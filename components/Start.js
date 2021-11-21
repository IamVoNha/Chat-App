import React from 'react';
 import { View, Text, Button, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
 import { TextInput } from 'react-native-gesture-handler';

 const image = require('../assets/Background-Image.png');

 export default class Start extends React.Component {
 	constructor(props) {
 		super(props);

 		this.state = {
 			name: '',
 			background: ''
 		};
 	}

 	render() {
 		return (
 			<View style={styles.bodyContainer}>
 				<ImageBackground source={image} style={styles.image}>
 					<Text style={styles.title}>Let's Chat!</Text>
 					<View style={styles.container}>
 						<TextInput
 							style={styles.inputName}
 							placeholder="Enter Your Name"
 							onChangeText={(name) => this.setState({ name })}
 							value={this.state.name}
 						/>
 						<View style={styles.colorPickContainer}>
 							<Text style={styles.bgColor}>Choose Background Color:</Text>
 							<View style={styles.colorContainer}>
 								<TouchableOpacity onPress={() => this.setState({ background: '#090C08' })}>
 									<View style={styles.colors} />
 								</TouchableOpacity>

 								<TouchableOpacity onPress={() => this.setState({ background: '#474056' })}>
 									<View style={[ styles.colors, styles.Purple ]} />
 								</TouchableOpacity>

 								<TouchableOpacity onPress={() => this.setState({ background: '#8A95A5' })}>
 									<View style={[ styles.colors, styles.Blue ]} />
 								</TouchableOpacity>

 								<TouchableOpacity onPress={() => this.setState({ background: '#B9C6AE' })}>
 									<View style={[ styles.colors, styles.Green ]} />
 								</TouchableOpacity>
 							</View>
 						</View>
 						<View style={styles.chatButton}>
 							<Button
 								color="#fff"
 								title="Start Chatting"
 								onPress={() =>
 									this.props.navigation.navigate('Chat', {
 										name: this.state.name,
 										background: this.state.background
 									})}
 							/>
 						</View>
 					</View>
 				</ImageBackground>
 			</View>
 		);
 	}
 }

 const styles = StyleSheet.create({
  bodyContainer: {
 		flex: 1,
 		flexDirection: 'column'
 	},
 	image: {
 		flex: 1,
 		resizeMode: 'cover',
    alignItems: 'center',
 		justifyContent: 'center',
 	},
 	container: {
 		backgroundColor: 'white',
 		height: '44%',
 		width: '88%',
    bottom: 40,
 		display: 'flex',
 		alignItems: 'center',
 		position: 'absolute',
 		justifyContent: 'space-around',
 	},
 	title: {
    top: 100,
 		fontSize: 45,
 		fontWeight: '700',
 		position: 'absolute',
 		color: '#FFFFFF'
 	},
 	inputName: {
    height: 60,
 		width: '88%',
    fontSize: 16,
 		fontWeight: '300',
 		borderColor: 'grey',
 		borderWidth: 2,
 		padding: 15,
 		color: '#757083',
 		opacity: 50,
 	},
   colorPickContainer: {
    width: '88%'
  },
  bgColor: {
 		fontSize: 16,
    padding: 15,
 		fontWeight: '300',
 		color: '#757083',
 		alignSelf: 'center',
 		marginBottom: 10
 	},
 	colorContainer: {
 		flexDirection: 'row',
 		alignSelf: 'flex-start',
 		width: '80%',
 		justifyContent: 'space-around'
 	},
 	colors: {
    width: 50,
    height: 50,
 		position: 'relative',
 		borderRadius: 30,
 		marginLeft: 50,
 		borderWidth: 0,
 		borderColor: 'white',
    backgroundColor: '#090C08'
 	},
 	Purple: {
 		backgroundColor: '#474056'
 	},
 	Blue: {
 		backgroundColor: '#8A95A5'
 	},
 	Green: {
 		backgroundColor: '#B9C6AE'
 	},
  chatButton: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    backgroundColor: '#757083',
    width: '88%',
    marginBottom: 10,
    height: 50,
  },
 });