import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { Button } from "~/components/ui/button";
import { auth } from "~/lib/firebase";

const Index = () => {
  const router = useRouter();

  return (
    <div>
      <Button
        onClick={() => {
          void signOut(auth);
          void router.push("/");
        }}
      >
        Sign Out
      </Button>
      hello
    </div>
  );
};

export default Index;
