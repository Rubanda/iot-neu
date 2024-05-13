"use client";
import { DashboardNav } from "./dashboard-nav";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navItems } from "@/constants/data";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LogoutButton from "../logout-button";
import { Icons } from "../icons";
import { config } from "@/utils/config";

// import { Playlist } from "../data/playlists";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  // playlists: Playlist[];
}

export function MobileSidebar({ className }: SidebarProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          {/* <Icons.close /> */}
          <Icons.panelLeftClose />
        </SheetTrigger>
        <SheetContent side="left" className="!px-0">
          <div className="space-y-4 py-4">
            <div className="space-y-4 px-3 py-2">
              <Link href="/">
                {config.backendUrl === "https://njc.masata.app" ? (
                  <Image
                    src="https://res.cloudinary.com/de3rkyslr/image/upload/v1703757199/njc-logo_vfld8q.png" // Replace with your logo path
                    alt="Logo"
                    width={50} // Adjust the size as needed
                    height={50}
                    className="pb-8"
                  />
                ) : (
                  <span className="text-2xl font-bold ">Masata</span>
                )}
              </Link>
              <div className="space-y-1">
                <DashboardNav
                  items={navItems}
                  setOpen={setOpen}
                  isCollapsed={false}
                />
              </div>
            </div>
            <div className="px-3 py-2">
              <LogoutButton />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
