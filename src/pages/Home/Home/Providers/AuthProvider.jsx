import {
   GoogleAuthProvider,
   createUserWithEmailAndPassword,
   getAuth,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signInWithPopup,
   signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../../../firebase/firebase.config";
import Swal from "sweetalert2";

export const AuthContext = createContext();
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const loginUser = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   };

   const signWithGmail = () => {
      setLoading(true);
      return signInWithPopup(auth, provider)
         .then((result) => {
            const userLoggedIn = result.user;
            Swal.fire({
               title: "Login successfully!",
               text: "Do you want to continue",
               icon: "success",
               confirmButtonText: "Ok",
            });
         })
         .catch((err) => {
            console.log(err.message);
         });
   };

   const logoutUser = () => {
      return signOut(auth);
   };

   useEffect(() => {
      const unUnsubscribed = onAuthStateChanged(auth, (currentUser) => {
         console.log("current-user", currentUser);
         setUser(currentUser);
         setLoading(false);
      });
      return () => {
         return unUnsubscribed();
      };
   }, []);

   const authInfo = {
      user,
      loading,
      createUser,
      loginUser,
      logoutUser,
      signWithGmail,
   };

   return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
   );
};

export default AuthProvider;
