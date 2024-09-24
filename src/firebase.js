import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFXKNv7qThAsWLu7hKbzcO8_HDPuHTY9U",
  authDomain: "fir-trading-app-f0adb.firebaseapp.com",
  projectId: "fir-trading-app-f0adb",
  storageBucket: "fir-trading-app-f0adb.appspot.com",
  messagingSenderId: "851084644358",
  appId: "1:851084644358:web:9ed48156c92b5dbce3f387",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
