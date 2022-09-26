import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_ID,
    // measurementId: process.env.REACT_APP_FIREBASE_MEASEREMENT_ID
    apiKey: "AIzaSyDvMOj3XBXVTYQCmZdrwABhLMKNeqEX_FM",
    authDomain: "guitaruy-ecommerce.firebaseapp.com",
    projectId: "guitaruy-ecommerce",
    storageBucket: "guitaruy-ecommerce.appspot.com",
    messagingSenderId: "889388746420",
    appId: "1:889388746420:web:4343f143a98ca45ddb39e1",
    measurementId: "G-YTXWF5N7T8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

