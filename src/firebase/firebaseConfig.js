 import { initializeApp } from "firebase/app";
 import { getAuth} from 'firebase/auth'
 import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyCGPTP1T4i-SufueLwlV36uLAIWerxGoRU",
  authDomain: "ecommerce-ebf36.firebaseapp.com",
  projectId: "ecommerce-ebf36",
  storageBucket: "ecommerce-ebf36.appspot.com",
  messagingSenderId: "674813028022",
  appId: "1:674813028022:web:32d764a66b7c410a0ca817"
};
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app)
const auth = getAuth(app);

export {fireDb, auth};