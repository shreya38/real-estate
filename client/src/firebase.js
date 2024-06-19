// // Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: 'mern-estate.firebaseapp.com',
//   projectId: 'mern-estate',
//   storageBucket: 'mern-estate.appspot.com',
//   messagingSenderId: '1078482850952',
//   appId: '1:1078482850952:web:28f19139ab77246602fb3d',
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-25f7c.firebaseapp.com",
  projectId: "mern-estate-25f7c",
  storageBucket: "mern-estate-25f7c.appspot.com",
  messagingSenderId: "439417087996",
  appId: "1:439417087996:web:442bc7a3e69f287cde7479",
  measurementId: "G-W2X2H45YHZ"
};

// Initialize Firebase
export  const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);