import { useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";
import initializeFirebase from "../Login/Firebase/firebase.init";

initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const auth = getAuth();

  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = (location, history) => {
    signInWithPopup(auth, googleProvider).then((result) => {
      const destination = location?.state?.from || "/";
      history.replace(destination);
    });
  };

  const registerUser = (email, name, password, history, userPhoto) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const newUser = {
          email: email,
          displayName: name,
          photoURL: userPhoto,
        };
        setUser(newUser);

        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: userPhoto,
        })
          .then(() => {})
          .catch((error) => {});

        history.replace("/");
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const destination = location?.state?.from || "/";
        history.replace(destination);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);

  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };
  return {
    user,
    signInWithGoogle,
    logOut,
    isLoading,
    setIsLoading,
    registerUser,
    loginUser,
    authError,
  };
};

export default useFirebase;
