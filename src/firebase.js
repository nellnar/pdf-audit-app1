import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9KUgYUW2bKArbfRy2h7RMnrea0ZGRGDA",
  authDomain: "pdf-audit-app.firebaseapp.com",
  projectId: "pdf-audit-app",
  storageBucket: "pdf-audit-app.firebasestorage.app",
  messagingSenderId: "799468918757",
  appId: "1:799468918757:web:9af44c8c95685ec3aac10c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
