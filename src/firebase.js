import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA6OlOMXwIqBt5W5qF8AAfQXmNLh-N4hUo",
    authDomain: "webinar-dfe08.firebaseapp.com",
    projectId: "webinar-dfe08",
    storageBucket: "webinar-dfe08.appspot.com",
    messagingSenderId: "658239488209",
    appId: "1:658239488209:web:7e0380063461c5145045f0"
  };

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);