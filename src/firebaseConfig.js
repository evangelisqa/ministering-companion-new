import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAnWIUe8qEtD-9qhSYvT71Asgn3HXkWoRI",
  authDomain: "ministeringcompanionnew.firebaseapp.com",
  projectId: "ministeringcompanionnew",
  storageBucket: "ministeringcompanionnew.appspot.com",
  messagingSenderId: "1036016384255",
  appId: "1:1036016384255:web:5d6c56b5a8688dedb374ca",
  measurementId: "G-WBTMDJ0V7V"
};

const app = initializing(firebaseConfig);
const db = getFirestore(app);

export default app;
export { db };