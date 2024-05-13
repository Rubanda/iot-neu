"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import * as z from "zod"
import { User } from "@prisma/client"
import axios, { AxiosError } from "axios"
import { cn } from "@/lib/utils"
import { useCustomToasts } from "@/hooks/use-customer-toast"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { useMutation } from "@tanstack/react-query"

const profileFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "name must be at least 2 characters.",
    })
    .max(30, {
      message: "name must not be longer than 30 characters.",
    }),
  skills: z
    .string({
      required_error: "Please select an skills to display.",
    }),
  bio: z.string().max(160).min(4),
  urls: z
    .array(
      z.object({
        value: z.string().url({ message: "Please enter a valid URL." }),
      })
    )
    .optional(),
})
interface UserNameFormProps extends React.HTMLAttributes<HTMLFormElement> {
  user: Pick<User, "id" | "name">
  profile: {
    skills: string
    bio: string
  }
  social: {
    value: string;
  }[] | undefined
}
type ProfileFormValues = z.infer<typeof profileFormSchema>



export function ProfileForm({ social, user, profile, className, ...props }: UserNameFormProps) {
  const router = useRouter();
  const { loginToast } = useCustomToasts();
  const [isSaving, setIsSaving] = useState<boolean>(false)
  // This can come from your database or API.
  const defaultValues: Partial<ProfileFormValues> = {
    name: user?.name || "",
    bio: profile?.bio || "",
    skills: profile?.skills || "",
    urls: social,
  }
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  })

  const { fields, append, remove } = useFieldArray({
    name: "urls",
    control: form.control,
  })

  function onSubmit(data: ProfileFormValues) {
    setIsSaving(true)
    createCommunity(data)
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // })
    setIsSaving(false)


  };
  const { mutate: createCommunity, isLoading } = useMutation({
    mutationFn: async (data: ProfileFormValues) => {
      const payload = {
        name: data.name,
        bio: data.bio,
        skills: data.skills
      };
      console.log('urls::', data.urls)
      if (data.urls) {
        await axios.post('/api/social', data.urls);
      }
      const { data: newData } = await axios.post('/api/profile', payload);
      return newData
    },
    onError: (err) => {
      if (err instanceof AxiosError) {
        if (err.response?.status === 401) {
          return loginToast()
        }
      }

      toast.error('There was an error.')
    },
    onSuccess: (data) => {
      toast.success( 'updated successful.')
      router.refresh()

      router.push(`/dashboard/profile`)
    },
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>name</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name. It can be your real name or a
                pseudonym.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="skills"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Skills</FormLabel>
              <FormControl>
                <Input placeholder="skills" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name. It can be your real name or a
                pseudonym.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about yourself"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                About you.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          {fields.map((field, index) => (
            <FormField
              control={form.control}
              key={field.id}
              name={`urls.${index}.value`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn(index !== 0 && "sr-only")}>
                    URLs
                  </FormLabel>
                  <FormDescription className={cn(index !== 0 && "sr-only")}>
                    Add links to your website, blog, or social media profiles.
                  </FormDescription>
                  <div className="flex gap-3">
                    <FormControl>
                      <Input {...field} />

                    </FormControl>
                    <Button
                      type="button"
                      variant="secondary"
                      className=""
                      onClick={() => remove(index)}
                    >Remove</Button>
                  </div>

                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="mt-2"
            onClick={() => append({ value: "" })}
          >
            Add URL
          </Button>

        </div>
        <Button type="submit">{isLoading ? 'Loading....' : "Update profile"}</Button>
      </form>
    </Form>
  )
}