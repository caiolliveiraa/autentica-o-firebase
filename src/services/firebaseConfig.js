import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDNaK-JVDfElO2ZZ6sz-kK-qQ9zijUXxQw",
  authDomain: "login-263e6.firebaseapp.com",
  projectId: "login-263e6",
  storageBucket: "login-263e6.appspot.com",
  messagingSenderId: "678763921491",
  appId: "1:678763921491:web:e04ce193d91c7b663406a6"
};


const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);

export { firebase, auth };