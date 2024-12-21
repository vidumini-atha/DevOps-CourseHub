import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";


// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaL4YHqHy9jDO7tzeLRYDD3uuxt2QNm-Q",
  authDomain: "coursehub-27970.firebaseapp.com",
  projectId: "coursehub-27970",
  storageBucket: "coursehub-27970.firebasestorage.app",
  messagingSenderId: "703729326470",
  appId: "1:703729326470:web:87d3ec4ec4e8698c2e3407",
  measurementId: "G-8CZL0G35KM"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Get Auth instance
const auth = getAuth(firebaseApp);

// Initialize Google Auth Provider
const googleProvider = new GoogleAuthProvider();

// Export auth and provider
export { auth, googleProvider, signInWithPopup };
export default firebaseApp;

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
