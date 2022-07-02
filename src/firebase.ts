// Import the functions you need from the SDKs you need
import { FirebaseError, initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiTSB6ThzUf99rhY2trTeA_btmwVpIiOo",
  authDomain: "team-6305-inventory-data.firebaseapp.com",
  databaseURL: "https://team-6305-inventory-data.firebaseio.com",
  projectId: "team-6305-inventory-data",
  storageBucket: "team-6305-inventory-data.appspot.com",
  messagingSenderId: "231579810138",
  appId: "1:231579810138:web:904bc280356100be6adb63"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);


export async function signIn(email: string, password: string) {
  try {
    let userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password)
    const user = userCredential.user;
    return user;
  }
  catch (error) {
    if (error instanceof FirebaseError) {
      const errorCode = error.code;
      const errorMessage = error.message
    }
    else {
      const errorMessage = String(error);
    }
  }
}