# Project Name
**ChatAPP**
## Built With
 - React Native

 - Android Studio.

 ## Building this app: 
 - npm install expo-cli --global
 - expo start
## Technologies Used
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Firebase Firestore](https://firebase.google.com/)
- [Gifted Chat](https://github.com/FaridSafi/react-native-gifted-chat)
## Objective
**To build a chat app for mobile devices using React Native. The app will provide users with a chat interface and options to share images and their location..**
# Main view
### Features:
- A page where users can enter their name and choose a background color for the chat screen before joining the chat.
- A page where the conversation is displayed, as well as an input field and a submit button.
- The chat must provide users with two additional communication features: sending pictures and location data.
- The data is stored online and offline.
### Technical Requirements
- The app must be written in React Native.
- The app must be developed using Expo.
- The app must be styled according to the given screen design.
- Chat conversations must be stored in Google Firestore Database.
- The app must authenticate users anonymously via Google Firebase authentication.
- Chat conversations must be stored locally.
- The app must let users pick and send images from the phone's image library.
- The app must let users take pictures with the device's camera app, and send them.
- The app must store images in Firebase Cloud Storage.
- The app must be able to read the user's location data
- Location data must be sent via the chat in a map view.
- The chat interface and functionality must be created using the Gifted Chat library.
- The app's codebase must contain comments.
### Dependencies
- npm install --save react-navigation
- npm install @react-navigation/native @react-navigation/stack
- expo install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
- npm install react-native-gifted-chat --save
- npm install --save firebase@7.9.0
- expo install @react-native-community/async-storage
- expo install @react-native-community/netinfo
- expo install expo-permissions
- expo install expo-image-picker
- expo install expo-location
- expo install expo-location