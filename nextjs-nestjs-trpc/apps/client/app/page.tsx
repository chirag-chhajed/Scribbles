import Hello from "./Hello";

export default async function Home() {
  // const { greeting } = await trpc.hello.query({ name: `Tom` });

  return (
    <div>
      <Hello />
    </div>
  );
}
