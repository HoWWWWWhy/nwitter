import * as firebase from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: "https://nwitter-99c72.firebaseio.com",
  projectId: "nwitter-99c72",
  storageBucket: "nwitter-99c72.appspot.com",
  messagingSenderId: "854569373034",
  appId: "1:854569373034:web:c782cf9601854f80f02913",
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
