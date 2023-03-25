import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyClwSowPVAB_hoRfFnECI3GIzHI-V3HE08",
  authDomain: "marketplace-3a1b9.firebaseapp.com",
  projectId: "marketplace-3a1b9",
  storageBucket: "marketplace-3a1b9.appspot.com",
  messagingSenderId: "618485702852",
  appId: "1:618485702852:web:f7d15e566877b5c8f4e991",
  measurementId: "G-7QYCPKS4F2",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
