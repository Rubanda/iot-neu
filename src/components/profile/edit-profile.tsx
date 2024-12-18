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
import { createprofile } from "@/app/_action/profile";

interface EditProps{
  open: boolean;
  setOpen: (open: boolean)=> void;
}
const EditProfile = ({open, setOpen}: EditProps) => {
  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
  });

  const [isSaving, setIsSaving] = React.useState(false);
  const [isPending, startTransition] = React.useTransition();

    // const { data: branch, isLoading: branchLoading } = getprofile();
  function onSubmit(data: z.infer<typeof profileSchema>) {
    const payload = JSON.stringify({
      ...data
    });
    console.log(payload);
    startTransition(async () => {
      try {
        await createprofile(payload);

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
            <DialogTitle>Add Departmen & Studend Id</DialogTitle>
          </DialogHeader>
          <DialogDescription className="text-foreground">
            Add Department.
          </DialogDescription>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-3 "
              >
                <div className=" flex flex-col gap-3 border-none ">
                  <FormField
                    control={form.control}
                    name="bio"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Bio</FormLabel>
                        <Input id="bio" className="col-span-3" {...field} />
                      </FormItem>
                    )}
                  />
                   <FormField
                    control={form.control}
                    name="skills"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Talent</FormLabel>
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
