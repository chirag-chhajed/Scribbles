import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { Button } from "~/components/ui/button";
import { auth } from "~/lib/firebase";

const Index = () => {
  const router = useRouter();

  return (
    <div className="flex h-screen flex-col place-content-center items-center justify-center gap-4 bg-slate-400">
      <h1 className="text-4xl font-bold text-slate-800">
        This is an example of a protected page
      </h1>
      <Button
        onClick={() => {
          void signOut(auth);
          void router.push("/");
        }}
      >
        Sign Out
      </Button>
    </div>
  );
};

export default Index;
