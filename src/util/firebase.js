import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtRXCQcrEn6S2UhaSOj9YY7sxtLPlXUnY",
  authDomain: "palette-builder-example.firebaseapp.com",
  projectId: "palette-builder-example",
  storageBucket: "palette-builder-example.appspot.com",
  messagingSenderId: "816934716547",
  appId: "1:816934716547:web:9a6163ddb6d2dd04f4c7b6"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase