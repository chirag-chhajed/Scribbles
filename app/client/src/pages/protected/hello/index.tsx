import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { Button } from "~/components/ui/button";
import { Skeleton } from "~/components/ui/skeleton";
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
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    </div>
  );
};

export default Index;
