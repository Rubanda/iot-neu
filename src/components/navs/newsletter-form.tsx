"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "@/components/ui/use-toast"
import type { z } from "zod"

import { emailSchema } from "@/lib/validations/email"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Icons } from "@/components/icons"
import { EnvelopeOpenIcon } from "@radix-ui/react-icons"
import Link from "next/link"

type Inputs = z.infer<typeof emailSchema>

export function SubscribeToNewsletterForm() {
    const [isPending, startTransition] = React.useTransition()

    // react-hook-form
    const form = useForm<Inputs>({
        resolver: zodResolver(emailSchema),
        defaultValues: {
            email: "",
        },
    })

    function onSubmit(data: Inputs) {
        console.log(data)
        //@ts-ignore 
        startTransition(async () => {
            const response = await fetch("/api/email/newsletter", {
                method: "POST",
                body: JSON.stringify({
                    email: data.email,
                    // This token is used as a search param in the email preferences page to identify the subscriber.
                    token: crypto.randomUUID(),
                    subject: "Welcome to Masatafit",
                }),
            })

            if (!response.ok) {
                switch (response.status) {
                    case 409:
                        toast({ description: "You are already subscribed to our newsletter." })
                        break
                    case 422:
                        toast({ description: "Invalid input." })
                        break
                    case 429:
                        toast({ description: "The daily email limit has been reached." })
                        break
                    case 500:
                        toast({ description: "Something went wrong. Please try again later." })
                        break
                    default:
                        toast({ description: "Something went wrong. Please try again later." })
                }
                return
            }
            console.log(data)
            toast({ description: "You have been subscribed to our newsletter." })
            form.reset()
        })
    }

    return (
        <Form {...form}>
            <form
                className="grid w-full"
                onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
            >
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="relative space-y-0">
                            <FormLabel className="sr-only">Email</FormLabel>
                            <FormControl>
                                <div className="flex gap-3">
                                    <Input
                                        placeholder="masatafit@gmail.com"
                                        className="pr-12 focus:outline-none  border-2 border-solid border-black dark:border-white"
                                        {...field}
                                    />

                                    <Button
                                        aria-label="subscribe to newsletter"
                                        className=""
                                        disabled={isPending}
                                    >
                                        {isPending ? (
                                            <Icons.spinner
                                                className="h-3 w-3 animate-spin"
                                                aria-hidden="true"
                                            />
                                        ) : (<Icons.send className="h-5 w-5" />)}

                                    </Button>
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </form>
            <p className="text-xs text-foreground">
                Subscribe to our newsletter.
            </p>
        </Form>
    )
}