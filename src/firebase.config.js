/*| firebase is a complete backend services package |*/
/*| it is a BaaS - Backend as a service which provides|*/
/*| backend server, authentication, database services |*/

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'  //added import to use database services

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBd9Lge4R4LmGnHncXdA9MxH7b4dMHF98k",
  authDomain: "property-bazaar-c18f4.firebaseapp.com",
  projectId: "property-bazaar-c18f4",
  storageBucket: "property-bazaar-c18f4.appspot.com",
  messagingSenderId: "395241436565",
  appId: "1:395241436565:web:c82e5274775d9d97b9b29c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore()   //added export to use firebase as a database