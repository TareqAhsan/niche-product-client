import { useState, useEffect } from "react";
import axios from "axios";
import initializefirebase from "../Pages/Login/Firebase/firebaseinit";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  getIdToken,
} from "firebase/auth";

initializefirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState();
  const [isloading, setIsloading] = useState(true);
  const [admin, setAdmin] = useState();
  const [token, setToken] = useState();
  const auth = getAuth();
  const googleprovider = new GoogleAuthProvider();
  const registation = (email, password, name, history) => {
    setIsloading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser({ email, displayName: name });
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
        saveUser(email, name, "post");

        setError("");
        history.push("/");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsloading(false));
  };

  const signinwithemail = (email, password, location, history) => {
    setIsloading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const redirect = location?.state?.from || "/";
        history.push(redirect);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsloading(false));
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user).then((idToken) => setToken(idToken));
      } else {
        setUser({});
      }
      setIsloading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  const logout = (history) => {
    setIsloading(true);
    signOut(auth)
      .then(() => {
        history.push("/");
      })
      .catch((error) => {
        setError(error.message);
        console.log(error.message)
      })
      .finally(() => setIsloading(false));
  };

  const googlesignin = (location, history) => {
    setIsloading(true);
    signInWithPopup(auth, googleprovider)
      .then((result) => {
        const redirect = location?.state?.from || "/";
        history.push(redirect);
        const user = result.user;
        saveUser(user.email, user.displayName, "put");
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsloading(false));
  };

  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("https://fast-ravine-78519.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  useEffect(() => {
    axios(`https://fast-ravine-78519.herokuapp.com/users/${user?.email}`).then(
      (result) => {
        setAdmin(result.data.admin);
      }
    );
  }, [user?.email]);

  return {
    user,
    error,
    registation,
    googlesignin,
    signinwithemail,
    logout,
    isloading,
    admin,
    token,
  };
};

export default useFirebase;
