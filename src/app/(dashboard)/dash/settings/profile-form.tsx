'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useState, useTransition } from "react"
import { useFieldArray, useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../../../../components/ui/form"
import { Input } from "../../../../components/ui/input"
import { Textarea } from "../../../../components/ui/textarea"
import { Button } from "../../../../components/ui/button"
import { catchError, cn } from "../../../../lib/utils"
import { toast } from "sonner"
import { User } from "@prisma/client"
import { createProfile } from "@/app/_action/settings"
import { Card } from "@/components/ui/card"

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
    const [isPending, startTransition] = useTransition();
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
      const payload = JSON.stringify({
        ...data,
      });
      console.log('---->',payload)
      startTransition(async () => {
        try {
          await createProfile(payload);
  
          form.reset();
          toast.success("Department added successfully.");
        } catch (err) {
          catchError(err);
        }
      });
      setIsSaving(false)
  
  
    };
  
    return (
      <div className="w-full flex flex-col items-center flex-1 border-2 border-green-700">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mx-auto w-full space-y-8  flex-1">
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
          <Card className="p-3">
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
          <Button type="submit" className="flex items-center justify-end">{isSaving ? 'Saving....' : "Update profile"}</Button>
          </Card>
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
      </div>
    )
  }