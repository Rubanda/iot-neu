
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
import { healthSchema } from "@/lib/validations/health";
import { toast } from "sonner";
import React from "react";
import { catchError, cn } from "@/lib/utils";
import { Icons } from "../icons";
import { Tag, TagInput } from 'emblor';
import { Textarea } from "../ui/textarea";
import { createHealth } from "@/app/_action/health";

interface EditProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}
const AddHealth = () => {
    const [open, setOpen] = React.useState(false);
    const form = useForm<z.infer<typeof healthSchema>>({
        resolver: zodResolver(healthSchema),
    });
    const [tags, setTags] = React.useState<Tag[]>([]);
    const [activeTagIndex, setActiveTagIndex] = React.useState<number | null>(null);

    const { setValue } = form;

    const [isSaving, setIsSaving] = React.useState(false);
    const [isPending, startTransition] = React.useTransition();

    function onSubmit(data: z.infer<typeof healthSchema>) {
    
        startTransition(async () => {
            try {
                await createHealth(data);

                form.reset();
                toast.success("health added successfully.");
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
                        New
                    </Button>
                </DialogTrigger>
                <DialogContent className=" mx-auto rounded-xl max-w-[90%] md:max-w-[500px]  overflow-y-auto bg-background">
                    <DialogHeader>
                        <DialogTitle>Add Health Info</DialogTitle>
                    </DialogHeader>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="flex flex-col gap-3 "
                        >
                            <div className=" flex flex-col gap-3 border-none ">
                                <FormField
                                    control={form.control}
                                    name="skinConditions"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col">
                                            <FormLabel>Skin Condition</FormLabel>
                                            <Input id="skinConditions" className="col-span-3" {...field} />
                                        </FormItem>
                                    )}
                                />
                                <FormField

                                    control={form.control}
                                    name="allergies"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col">
                                            <FormLabel>Allergies</FormLabel>
                                            <FormControl className="w-full">
                                            <TagInput {...field} id="allergies" className="h-full"
                                                placeholder="Enter an allergies"
                                                tags={tags}
                                                setTags={(newTags) => {
                                                    setTags(newTags);
                                                    setValue('allergies', newTags as [Tag, ...Tag[]]);
                                                }}
                                                activeTagIndex={activeTagIndex}
                                                setActiveTagIndex={setActiveTagIndex}
                                            />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="otherDetails"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col">
                                            <FormLabel>More Info</FormLabel>
                                            <Textarea id="otherDetails" className="col-span-3" {...field} />
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

export { AddHealth };