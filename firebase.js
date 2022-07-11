import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {

    apiKey: "AIzaSyCRyYGc7rzgLg4NPOSnsa5il77ngI2-Qqc",
  
    authDomain: "whatsapp-clone-43c59.firebaseapp.com",

    databaseURL: "https://console.firebase.google.com/u/0/project/whatsapp-clone-43c59/firestore/data/~2Frooms~2FzoAalr4aTlVbhGydge7a",
  
    projectId: "whatsapp-clone-43c59",
  
    storageBucket: "whatsapp-clone-43c59.appspot.com",
  
    messagingSenderId: "223203136060",
  
    appId: "1:223203136060:web:ba9a81302f7c236692e939",
  
    measurementId: "G-C75T5CBK4B"
  
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;