import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDAavIkt2FoaO6wulx0yQ2leqNs_QUagJM",
  authDomain: "notes-react-app-6df79.firebaseapp.com",
  projectId: "notes-react-app-6df79",
  storageBucket: "notes-react-app-6df79.appspot.com",
  messagingSenderId: "629751051349",
  appId: "1:629751051349:web:b866796b568d9c5c7110dc"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")