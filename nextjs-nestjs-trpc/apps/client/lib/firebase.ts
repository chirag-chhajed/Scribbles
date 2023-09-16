import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDniY3DIZgb5BEL_yFuOxCfg0N1qh-R81w",
  authDomain: "doodle-battle.firebaseapp.com",
  projectId: "doodle-battle",
  storageBucket: "doodle-battle.appspot.com",
  messagingSenderId: "870332384597",
  appId: "1:870332384597:web:8565056ead05bffbef1bdc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
