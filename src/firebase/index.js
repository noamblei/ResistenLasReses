import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyBjNzjox_64bQX8BICKiQLb9BYW5YcIaBI",
    authDomain: "resisten-las-reses.firebaseapp.com",
    projectId: "resisten-las-reses",
    storageBucket: "resisten-las-reses.appspot.com",
    messagingSenderId: "23932722675",
    appId: "1:23932722675:web:167d4914f9d14b7e4ac686",
    measurementId: "G-Y7H21MYEJ5"
});

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
} 