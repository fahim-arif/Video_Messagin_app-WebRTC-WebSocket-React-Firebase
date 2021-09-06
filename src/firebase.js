import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
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

export default app;
