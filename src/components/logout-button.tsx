"use client";

import { signOut } from "next-auth/react";
import { Button } from "./ui/button";
import { Icons } from "./icons";

export default function LogoutButton() {
  return (
    <Button onClick={() => signOut()} variant="ghost" size="icon">
      <Icons.close className=" h-4 w-4" />
    </Button>
  );
}