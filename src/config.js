import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDR0Si1LRXBHn9qIWMIyQIA4rbXdGEygkg",
  authDomain: "dual-axis-sun-tracker.firebaseapp.com",
  databaseURL: "https://dual-axis-sun-tracker-default-rtdb.firebaseio.com",
  projectId: "dual-axis-sun-tracker",
  storageBucket: "dual-axis-sun-tracker.appspot.com",
  messagingSenderId: "597011271555",
  appId: "1:597011271555:web:8fa84154b6fc9ef5be70b6",
  measurementId: "G-3Z8RDCBNTH",
};

firebase.initializeApp(config);

export default firebase;