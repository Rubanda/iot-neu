"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { profileSchema } from "@/lib/validations/profile";
import { toast } from "sonner";
import React from "react";
import { catchError, cn } from "@/lib/utils";
import { Icons } from "../icons";
import { createprofile, updatedProfile } from "@/app/_action/profile";

interface EditProps{
  profile: any;
  open: boolean;
  setOpen: (open: boolean)=> void;
}
const EditProfile = ({profile, open, setOpen}: EditProps) => {
  const profileInfo = {
    department: profile?.department,
    university: profile?.university,
    studentId: profile?.studentId,
  }
  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    values: profileInfo,
    mode: 'onChange'
  });

  const [isSaving, setIsSaving] = React.useState(false);
  const [isPending, startTransition] = React.useTransition();

    // const { data: branch, isLoading: branchLoading } = getprofile();
  function onSubmit(data: z.infer<typeof profileSchema>) {
    console.log('data:get',[data]);
    startTransition(async () => {
      try {
        await updatedProfile(profile?.id, data);

        form.reset();
        toast.success("profile added successfully.");
        setOpen(false);
      } catch (err) {
        catchError(err);
      }
    });
  }

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            className={cn(
              buttonVariants({
                size: "sm",
                variant: "outline",
              }),
              "text-foreground"
            )}
            size="default"
          >
            {" "}
            <Icons.add className="h-4 w-4" />
            Edit profile
          </Button>
        </DialogTrigger>
        <DialogContent className=" mx-auto rounded-xl max-w-[90%] md:max-w-[500px]  overflow-y-auto bg-background">
          <DialogHeader>
            <DialogTitle>Add Student info</DialogTitle>
          </DialogHeader>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-3 "
              >
                <div className=" flex flex-col gap-3 border-none ">
                  <FormField
                    control={form.control}
                    name="department"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Department</FormLabel>
                        <Input id="bio" className="col-span-3" {...field} />
                      </FormItem>
                    )}
                  />
                   <FormField
                    control={form.control}
                    name="university"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>University</FormLabel>
                        <Input id="university" className="col-span-3" {...field} />
                      </FormItem>
                    )}
                  />
                        <FormField
                    control={form.control}
                    name="studentId"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Student Id</FormLabel>
                        <Input id="url" className="col-span-3" {...field} />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex items-end justify-end gap-3 border-none p-3 ">
                  <DialogTrigger asChild>
                    <Button variant="outline" className="shadow-2xl">
                      Cancel
                    </Button>
                  </DialogTrigger>
                  <Button type="submit" className="shadow-2xl">
                    Save
                  </Button>
                </div>
              </form>
            </Form>

        </DialogContent>
      </Dialog>
    </>
  );
};

export { EditProfile };
