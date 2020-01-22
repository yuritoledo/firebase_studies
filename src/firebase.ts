import firebase from 'firebase/app'
import 'firebase/firebase-firestore'

var firebaseConfig = {
  apiKey: "AIzaSyASkYjYbpla3g2qBvfqhw1nyRT3J8ETQVY",
  authDomain: "loja-virtual-flutter-20ffd.firebaseapp.com",
  databaseURL: "https://loja-virtual-flutter-20ffd.firebaseio.com",
  projectId: "loja-virtual-flutter-20ffd",
  storageBucket: "loja-virtual-flutter-20ffd.appspot.com",
  messagingSenderId: "166243956221",
  appId: "1:166243956221:web:96cbfb685f21e97da6d594"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase