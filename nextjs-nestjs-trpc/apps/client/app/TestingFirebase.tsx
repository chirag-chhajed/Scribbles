"use client";

import { Button } from "@client/components/ui/button";
import { auth } from "@client/lib/firebase";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const Testing = () => {
  const googleLogin = async () => {
    try {
      const res = await signInWithPopup(auth, new GoogleAuthProvider());
      const { user } = res;
      // make a post requst to 4000/api/testing-firebase sending user variable
      await fetch("http://localhost:4000/api/testing-firebase", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <Button onClick={googleLogin} size={"lg"} variant={"default"}>
        Log In
      </Button>
      <Button onClick={() => signOut(auth)} size={"lg"} variant={"default"}>
        Log out
      </Button>
    </div>
  );
};

export default Testing;
