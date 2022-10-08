// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBIokGkF_6VM-xLei_ew5lonpT0k4Iffk",
  authDomain: "prueba-web-cfd63.firebaseapp.com",
  projectId: "prueba-web-cfd63",
  storageBucket: "prueba-web-cfd63.appspot.com",
  messagingSenderId: "985368272053",
  appId: "1:985368272053:web:81630274f6a56f219bf2fc",
  measurementId: "G-HJ1CVDM7VY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const firebaseStorage = getStorage(app)

export {app, auth, firebaseStorage}