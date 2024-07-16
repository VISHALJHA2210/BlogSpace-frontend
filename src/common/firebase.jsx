import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAPYJxaBn3Lmc7qUrLXeKfEeBUm3dBbIT4",
  authDomain: "mern-blogging-d64fc.firebaseapp.com",
  projectId: "mern-blogging-d64fc",
  storageBucket: "mern-blogging-d64fc.appspot.com",
  messagingSenderId: "828935457329",
  appId: "1:828935457329:web:be141505084e62e58a2310"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//google auth

const provider= new GoogleAuthProvider();
const auth = getAuth();

export const authWithGoogle = async ()=>{

    let user=null;
    await signInWithPopup(auth, provider)
    .then((result)=>{
        user = result.user;
    })
    .catch((err)=>{
        console.log(err);
    })

    return user;
}