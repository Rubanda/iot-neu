'use client'
import { MainNavItem } from "../types"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet"
import { Icons } from "./icons"
import Link from "next/link"
import { cn } from "../lib/utils"
import { useSelectedLayoutSegment } from "next/navigation"

interface MobileNavProps {
  items: MainNavItem[];
}

export function SheetDemo({ items }: MobileNavProps) {
  const segment = useSelectedLayoutSegment()
  // console.log(segment)
  // console.log(items)
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <span className="flex cursor-pointer md:hidden" arial-label="logo on phone">  <Icons.media /></span>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="flex items-start ">
            <SheetClose asChild>
              <Link href="/" >
                <span className="font-bold">NEU IOT</span>
              </Link>
            </SheetClose>
          </SheetTitle>
        </SheetHeader>
        {items?.length ? (
          <nav className="flex flex-col gap-6">
            {items?.map((item, index) => (
              <SheetClose asChild key={index}>
                <Link

                  href={item.disabled ? "#" : item.href!}
                  className={cn(
                    "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                    item.href!.startsWith(`/${segment}`)
                      ? "text-foreground"
                      : "text-foreground/60",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                  scroll={false}
                >
                  {/* {item.icon && <item.icon className="w-6 h-6 mr-2" />} */}
                  {item.title}
                </Link>
              </SheetClose>

            ))}
          </nav>
        ) : null}

      </SheetContent>
    </Sheet>
  )
}
