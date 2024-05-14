'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useFieldArray, useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../../../../components/ui/form"
import { Input } from "../../../../components/ui/input"
import { Textarea } from "../../../../components/ui/textarea"
import { Button } from "../../../../components/ui/button"
import { cn } from "../../../../lib/utils"
import { toast } from "sonner"
// import { User } from "@prisma/client"

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
    user: any //Pick<User, "id" | "name">
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
    const [isSaving, setIsSaving] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
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
      toast.success('submitted')
      
      setIsSaving(false)
  
  
    };
  
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