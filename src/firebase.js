
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDs0LnVsI5FR0EwxWbJAWsqoXZ2g-nb09M",
  authDomain: "vocalvibes-8b0a8.firebaseapp.com",
  projectId: "vocalvibes-8b0a8",
  storageBucket: "vocalvibes-8b0a8.appspot.com",
  messagingSenderId: "980722114045",
  appId: "1:980722114045:web:455edabd7728b84ee3cd94",
  measurementId: "G-TVCP96ER9X"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };