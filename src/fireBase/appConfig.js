import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINGSENDER,
  appId: import.meta.env.VITE_FIREBASE_APPID,
};
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

const auth = getAuth(app);
export { provider, app, auth };
