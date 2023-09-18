/* eslint-disable react-hooks/exhaustive-deps */
import { type User, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateValue } from "store/features/user";
import { auth } from "~/lib/firebase";

const AuthComponent = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  // auth.currentUser
  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await new Promise<User | null>((resolve, reject) => {
          onAuthStateChanged(
            auth,
            (user) => {
              resolve(user);
            },
            reject,
          );
        });

        if (user) {
          const token = (await user.getIdTokenResult()).token;
          dispatch(updateValue(token));
          void router.push("/protected/hello");
        } else {
          console.log("user is logged out");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    void fetchData();
  }, []);

  return <div>{children}</div>;
};

export default AuthComponent;
