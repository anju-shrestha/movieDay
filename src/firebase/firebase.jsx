import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB22a-xwXgZJ_J0IX_MZlFPP_tU2VXzzHg",
  authDomain: "movieday-876f8.firebaseapp.com",
  projectId: "movieday-876f8",
  storageBucket: "movieday-876f8.appspot.com",
  messagingSenderId: "780438731612",
  appId: "1:780438731612:web:bf98d5977b9180050ddf99"
};

const app = initializeApp(firebaseConfig);

export const db= getFirestore(app);
export const moviesRef= collection(db, 'movies')
export const reviewsRef= collection(db, 'revies')
export const usersRef= collection(db, 'users')



export default app;