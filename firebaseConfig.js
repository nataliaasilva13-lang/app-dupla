
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDrvdbhUQm-VR5bx1NFu3aM0ZKm4AdG2S4",
  authDomain: "app-dupla.firebaseapp.com",
  projectId: "app-dupla",
  storageBucket: "app-dupla.firebasestorage.app",
  messagingSenderId: "199896541464",
  appId: "1:199896541464:web:befce033c1ec2b8527566d",
  measurementId: "G-FW6HPB22YX"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);