import Firebase from 'firebase';
var config = {
    apiKey: "AIzaSyCV-YtqueH9w6l0U47l-3XrQvvj7xLwWtU",
    authDomain: "loginsystem-9efb3.firebaseapp.com",
    databaseURL: "https://loginsystem-9efb3.firebaseio.com",
    projectId: "loginsystem-9efb3",
    storageBucket: "loginsystem-9efb3.appspot.com",
    messagingSenderId: "85253020758"
  };
const FirebaseInstance = Firebase.initializeApp(config);
export default FirebaseInstance;
