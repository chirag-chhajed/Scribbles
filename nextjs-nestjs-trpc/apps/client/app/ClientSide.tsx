"use client";

import { trpc } from "@client/app/trpc";
import { useEffect, useState } from "react";

export default function ClientSide() {
  const [greeting, setGreeting] = useState("");
  useEffect(() => {
    trpc.greet
      .query({ personName: "Client" })
      .then(({ message }) => setGreeting(message));
  }, []);
  return <p>I am client side: {greeting}</p>;
}
