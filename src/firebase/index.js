import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA8vo1tHAO2gutzDR-rrwQsCFVe51Izlzw",
    authDomain: "library-af82d.firebaseapp.com",
    projectId: "library-af82d",
    storageBucket: "library-af82d.firebasestorage.app",
    messagingSenderId: "861421980366",
    appId: "1:861421980366:web:8b3550a7eb6635aa3f9e9f",
    measurementId: "G-SZ0S0VWM9P"
};

const app = initializeApp(firebaseConfig);
let db = getFirestore(app);

export {db};