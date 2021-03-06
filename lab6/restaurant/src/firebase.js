import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCliYVMXpmsMXKAn-UbCELYz4zuYmnP5Jk",
  authDomain: "restauracja-d01ce.firebaseapp.com",
  projectId: "restauracja-d01ce",
  storageBucket: "restauracja-d01ce.appspot.com",
  messagingSenderId: "518328041130",
  appId: "1:518328041130:web:45557608376a36cf98dad3",
  measurementId: "G-M6800W3Q9N",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
  auth.signInWithRedirect(provider);
};

export const generateUserDocument = async (user, additionalData) => {
  if (!user) {
    return;
  }

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;

    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData,
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }

  return getUserDocument(user.uid);
};

const getUserDocument = async (uid) => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();

    return {
      uid,
      ...userDocument.data(),
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};
