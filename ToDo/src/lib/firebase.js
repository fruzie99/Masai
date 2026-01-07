import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCogN_O_zmCesqe5QpkOavFS4DYvx7RZsA",
  authDomain: "todo-e2c74.firebaseapp.com",
  projectId: "todo-e2c74",
  storageBucket: "todo-e2c74.firebasestorage.app",
  messagingSenderId: "927840532142",
  appId: "1:927840532142:web:9bb1df98e0802dc5eedf3f"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
