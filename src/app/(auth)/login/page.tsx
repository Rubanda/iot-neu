// import { Metadata } from "next"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { UserAuthForm } from "@/components/user-auth-form"
import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
}

export default function Page() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-4 top-4 md:left-8 md:top-8"
        )}
      >
        <>
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          Back
        </>
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
        <Image src='/logo/air-logo.png' width={400} height={400} alt="ai neu logo" />
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="text-sm text-muted-foreground">
            sign in to your account with Google
          </p>
        </div>
        <UserAuthForm className="dark:fill-white" />
        <p className="px-8 text-center text-sm text-muted-foreground">
         
        </p>
      </div>
    </div>
  )
}
