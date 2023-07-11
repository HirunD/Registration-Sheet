import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAaiCnEEEa8r7jhSGv2JtvODvCkbNk1x1E",
    authDomain: "rcmu-98032.firebaseapp.com",
    projectId: "rcmu-98032",
    storageBucket: "rcmu-98032.appspot.com",
    messagingSenderId: "943175207682",
    appId: "1:943175207682:web:86aee8232e382de05d501b",
    measurementId: "G-DEK5D15ZGD"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);