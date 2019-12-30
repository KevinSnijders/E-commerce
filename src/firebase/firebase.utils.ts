import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAAVJBBxNve0dqpVKOJ4kJsQYp_6HWslbQ",
  authDomain: "firestone-95ea4.firebaseapp.com",
  databaseURL: "https://firestone-95ea4.firebaseio.com",
  projectId: "firestone-95ea4",
  storageBucket: "firestone-95ea4.appspot.com",
  messagingSenderId: "978586150544",
  appId: "1:978586150544:web:764ef8470cd03ae099da15",
  measurementId: "G-2CS7CEQBEC"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (
  userAuth: any,
  additonalData?: any
) => {
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additonalData
      });
    } catch (err) {
      console.log("Error creating  user", err.message);
    }
  }

  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
