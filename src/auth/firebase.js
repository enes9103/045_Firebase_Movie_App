import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDdVlW1A4L-K5dlxKet-vbM7Bn-sohq66k",
    authDomain: "firstproject-288b4.firebaseapp.com",
    projectId: "firstproject-288b4",
    storageBucket: "firstproject-288b4.appspot.com",
    messagingSenderId: "1014601001605",
    appId: "1:1014601001605:web:3b03ba75caf5138c5817ec"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser = async (email, password, navigate) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    navigate("/");
    console.log(userCredential);
  } catch (err) {
    alert(err.message);
  }
};

export const signIn = async (email, password, navigate) => {
  try {
    let userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    navigate("/");
    console.log(userCredential);
  } catch (err) {
    alert(err.message);
  }
};

export const logOut = () => {
  signOut(auth);
  alert("logged out successfully");
};