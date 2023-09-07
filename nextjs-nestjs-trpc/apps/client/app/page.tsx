import { trpc } from "@client/app/trpc";
import ClientSide from "./ClientSide";
import { Button } from "@client/components/ui/button";

export default async function Home() {
  const { greeting } = await trpc.hello.query({ name: `Tom` });
  return (
    <div>
      <ClientSide />
      <Button size={"lg"} variant={"destructive"}>
        Click me
      </Button>
      {greeting}
    </div>
  );
}
