
import * as firebase from 'firebase';  
var config = {
    apiKey: "AIzaSyDEQOQi1ZBpOSEMLxxZiiuvW1U-ooEDoiI",
    authDomain: "reactappredux.firebaseapp.com",
    databaseURL: "https://reactappredux.firebaseio.com",
    projectId: "reactappredux",
    storageBucket: "reactappredux.appspot.com",
    messagingSenderId: "187465352363"
  };
  firebase.initializeApp(config);
export const  firebaseConnect =  firebase.database().ref('/dataOfNote/');
