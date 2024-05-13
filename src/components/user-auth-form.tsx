"use client"

import * as React from "react"
import { useSearchParams } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn, signOut } from "next-auth/react"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { cn } from "@/lib/utils"
import { userAuthSchema } from "@/lib/validations/auth"
import { buttonVariants } from "@/components/ui/button"
import { toast } from "sonner"
import { Icons } from "@/components/icons"
import { useMutation } from "@tanstack/react-query"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

type FormData = z.infer<typeof userAuthSchema>

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userAuthSchema),
  })
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [isGoogleLoading, setIsGoogleLoading] = React.useState<boolean>(false)
  const searchParams = useSearchParams()

  async function handleSendEmail() {
    setIsLoading(true)
  }
  async function onSubmit(data: FormData) {
    
    // send a api to localhost:3000/api/send 
    // with the data.email 
  }

  // const { mutate: createCommunity, isLoading } = useMutation({
  //   mutationFn: async (data: FormData) => {
  //     const payload: CreateNameBiotPayload = {
  //       name: data.name,
  //       bio: data.bio,
  //       skills: data.skills
  //     };
  //     const { data: newData } = await axios.post('/api/profile', payload);
  //     return newData
  //   },
  //   onError: (err) => {
  //     if (err instanceof AxiosError) {
  //       if (err.response?.status === 401) {
  //         return loginToast()
  //       }
  //     }

  //     toast({
  //       title: 'There was an error.',
  //       description: 'Error Creating.',
  //       variant: 'destructive',
  //     })
  //   },
  //   onSuccess: (data) => {
  //     toast({
  //       title: 'created.',
  //       description: 'created successful.',
  //     })
  //     router.refresh()

  //     router.push(`/dashboard`)
  //   },
  // })


  //   const signInResult = await signIn("email", {
  //     email: data.email.toLowerCase(),
  //     redirect: false,
  //     callbackUrl: searchParams?.get("from") || "/dashboard",
  //   })

  //   setIsLoading(false)

  //   if (!signInResult?.ok) {
  //     return toast({
  //       title: "Something went wrong.",
  //       description: "Your sign in request failed. Please try again.",
  //       variant: "destructive",
  //     })
  //   }

  //   return toast({
  //     title: "Check your email",
  //     description: "We sent you a login link. Be sure to check your spam too.",
  //   })
  // }

  return (
    <div className="grid gap-6" {...props}>
      <button
        type="button"
        className={cn(buttonVariants({ variant: "outline" }), className)}
        onClick={() => {
          setIsGoogleLoading(true)
          signIn('google', { callbackUrl: '/dashboard' })
        }}
        disabled={isLoading || isGoogleLoading}
      >
        {isGoogleLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}{" "}Google
      </button>
    </div>
  )
}
