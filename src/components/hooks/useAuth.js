import React, { useState, useEffect, useContext, createContext } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();
const firebaseConfig = {
  apiKey: "AIzaSyBCTmhwBuLgoOSkdSgdh2PFYSkSITWx1YA",
  authDomain: "whatsappclone-892db.firebaseapp.com",
  projectId: "whatsappclone-892db",
  storageBucket: "whatsappclone-892db.appspot.com",
  messagingSenderId: "730502252356",
  appId: "1:730502252356:web:a4af14247c6bba8ae6b911",
  measurementId: "G-FJG4M52Y7L",
};

const app = initializeApp(firebaseConfig);
app();
const AuthContext = React.createContext();

// Hook for child components to get the auth object...
// and re-render when it changes

export const useAuth = () => {
  return useContext(AuthContext);
};

// Provider hook that creates auth object and handles state

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticating, setIsAuthentication] = useState(true);
  // const sendSignInLinkToEmail = (email) => {
  //   return firebase;
  //   auth
  //     .sendSignInLinkToEmail(email, {
  //       url: "http://localhost:3000/confirm",
  //       handleCodeInApp: true,
  //     })
  //     .then(() => {
  //       return true;
  //     });
  // };
  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((useCredential) => {
        console.log(useCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // const signInWithEmailLink = (email, code) => {
  //   return firebase
  //     .auth()
  //     .signInWithEmailLink(email, code)
  //     .then((result) => {
  //       setUser(result.user);
  //       return true;
  //     });
  // };
  // const logout = () => {
  //   return firebase
  //     .auth()
  //     .signOut()
  //     .then(() => {
  //       setUser(null);
  //     });
  // };

  // useEffect(() => {
  //   const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
  //     setUser(user);
  //     setIsAuthentication(false);
  //   });
  //   // Cleanup subscription on unmount
  //   return () => unsubscribe();
  // }, []);
  const values = {
    user,
    // isAuthenticating,
    // sendSignInLinkToEmail,
    // signInWithEmailLink,
    // logout,
    signup,
  };

  return (
    <AuthContext.Provider value={values}>
      {!isAuthenticating && children}
    </AuthContext.Provider>
  );
};
