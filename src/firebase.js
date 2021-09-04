import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAZMa_kxM3WwzzeKC9-8-64tdYCBh839iU",
  authDomain: "clone-fd5d2.firebaseapp.com",
  projectId: "clone-fd5d2",
  storageBucket: "clone-fd5d2.appspot.com",
  messagingSenderId: "552675412496",
  appId: "1:552675412496:web:f4f865c3d039d156095895",
  measurementId: "G-26BSS9EW91",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
