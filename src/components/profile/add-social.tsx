"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Card } from "../ui/card";
import { socialSchema } from "@/lib/validations/social";
import { toast } from "sonner";
import React from "react";
import { catchError, cn } from "@/lib/utils";
import { Icons } from "../icons";
import { createSocial } from "@/app/_action/health";

const AddSocial = () => {
  const form = useForm<z.infer<typeof socialSchema>>({
    resolver: zodResolver(socialSchema),
  });

  const [isSaving, setIsSaving] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [isPending, startTransition] = React.useTransition();

    // const { data: branch, isLoading: branchLoading } = getSocial();
  function onSubmit(data: z.infer<typeof socialSchema>) {
    const payload = JSON.stringify({
      ...data
    });
    console.log(payload);
    startTransition(async () => {
      try {
        await createSocial(payload);

        form.reset();
        toast.success("Social added successfully.");
        setOpen(!open);
      } catch (err) {
        catchError(err);
      }
    });
  }

  return (
    <>
      <Dialog open={open} onOpenChange={() => setOpen(!open)}>
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
            create Social
          </Button>
        </DialogTrigger>
        <DialogContent className=" mx-auto rounded-xl max-w-[90%] md:max-w-[500px]  overflow-y-auto bg-background">
          <DialogHeader>
            <DialogTitle>Add Social</DialogTitle>
          </DialogHeader>
          <DialogDescription className="text-foreground">
            Add any social You have.
          </DialogDescription>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-3 "
              >
                <div className=" flex flex-col gap-3 border-none ">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Name</FormLabel>
                        <Input id="name" className="col-span-3" {...field} />
                      </FormItem>
                    )}
                  />
                   <FormField
                    control={form.control}
                    name="url"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>URL</FormLabel>
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

export { AddSocial };
