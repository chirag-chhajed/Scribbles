import { type FirebaseApp, initializeApp } from "firebase/app";
import { type Auth, getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import * as firebase from "firebase/app";

// console.log(process.env.NEXT_PUBLIC_MEASUREMENT_ID);

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

let app: FirebaseApp; // Declare the app variable outside the if statement

// Check if Firebase app has already been initialized
if (firebase.getApps().length === 0) {
  // Initialize Firebase
  app = initializeApp(firebaseConfig);
} else {
  // If Firebase app already exists, use the existing instance
  app = firebase.getApp();
}

export const auth: Auth = getAuth(app);
// export const analytics: Promise<void | Analytics> = isSupported().then(
//   (yes) => {
//     console.log(yes);
//     return yes ? getAnalytics(app) : console.log("Analytics not supported");
//   },
// );
export const analytics = () => {
  if (typeof window !== undefined) {
    return getAnalytics(app);
  } else {
    console.log("Analytics not supported");
    return null;
  }
};

export default app;
