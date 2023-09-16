"use client";
import { Button } from "@client/components/ui/button";
// import { auth } from "@client/lib/firebase";
// import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

export default function Home() {
  // const { greeting } = await trpc.hello.query({ name: `Tom` });
  // const googleLogin = async () => {
  //   try {
  //     const res = await signInWithPopup(auth, new GoogleAuthProvider());
  //     const { user } = res;
  //     console.log(user.getIdTokenResult);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  return (
    <div>
      <Button size={"lg"} variant={"link"}>
        <a href="http://localhost:4000/api/auth/google/login">
          Login With Google
        </a>
      </Button>
      <Button size={"lg"} variant={"link"}>
        <a href="http://localhost:4000/api/auth/logout">Log Out</a>
      </Button>
    </div>
  );
}
