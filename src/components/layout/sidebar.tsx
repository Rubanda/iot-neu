// sidebar.tsx
"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { DashboardNav } from "./dashboard-nav";
import { navItems } from "@/constants/data";
import { UserNav } from "./user-nav";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { config } from "@/utils/config";
import { Icons } from "../icons";
import LogoutButton from "../logout-button";

interface SidebarProps {
  user: any;
  className?: string;
}
const LogoSection = ({ logo }: { logo: string }) => (
  <div className="logo-container space-y-4 flex justify-center items-center py-4 md:block">
    <Link href="/">
      <div
        className="logo-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Image
          src={logo}
          alt="Church Logo"
          className="logo-image py-2"
          width={150}
          height={50}
        />
      </div>
    </Link>
  </div>
);

const UserInfoSection = ({
  user,
  isCollapsed,
}: {
  user: any;
  isCollapsed: boolean;
}) => (
  <div className="flex items-center justify-center gap-2 py-6">
    <UserNav user={user} />
    <div
      className={`hide-when-collapsed transition-all ${isCollapsed ? "hidden" : ""
        }`}
    >
      <p className="text-sm font-medium leading-none">{user?.name}</p>
      <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
    </div>
  </div>
);

const NavigationSection = ({ isCollapsed }: { isCollapsed: boolean }) => (
  <div className="px-3 py-2">
    <Separator className="mb-4" />
    <DashboardNav items={navItems} isCollapsed={isCollapsed}/>
    <div className="flex items-center flex-1 hover:bg-">
      <LogoutButton />
    </div>
  </div>
);

const FooterSection = ({
  theme,
  setTheme,
  isCollapsed,
  toggleCollapse,
}: {
  theme: string;
  setTheme: Function;
  isCollapsed: boolean;
  toggleCollapse: Function;
}) => (
  <footer className="absolute bottom-0 pl-[1.85rem] pr-[1.75rem] py-6">
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            className=""
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <Icons.sun
              className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
              strokeWidth={1}
            />
            <Icons.moon
              className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
              strokeWidth={1}
            />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Light/Dark</TooltipContent>
      </Tooltip>
    </TooltipProvider>

    <TooltipProvider delayDuration={50}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={(event) => toggleCollapse()}
            className="p-2"
            variant="ghost"
          >
            {isCollapsed ? (
              <Icons.chevronRightSquare
                className="h-[1.2rem] w-[1.2rem]"
                strokeWidth={1}
              />
            ) : (
              <Icons.chevronLeftSquare
                className="h-[1.2rem] w-[1.2rem]"
                strokeWidth={1}
              />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>Toggle sidebar</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </footer>
);

export default function Sidebar({ className, user }: SidebarProps) {
  const { theme = "light", setTheme } = useTheme(); // Default to 'light' if theme is undefined
  const [logo, setLogo] = useState("/logo/logo black.png");
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const savedCollapseState = localStorage.getItem("sidebarCollapsed");
    setIsCollapsed(savedCollapseState === "true");
  }, []);

  const toggleCollapse = () => {
    const newCollapsedState = !isCollapsed;
    setIsCollapsed(newCollapsedState);
    if (typeof window !== "undefined") {
      localStorage.setItem("sidebarCollapsed", String(newCollapsedState));
    }
  };

  useEffect(() => {
    const effectiveTheme = theme === "system" ? "light" : theme;
    setLogo(
      effectiveTheme === "light"
        ? "/logo/logo black.png"
        : "/logo/logo white.png"
    );
  }, [theme]);
  return (
    <div
      className={` p-4 sidebar flex  flex-col h-full  ${className} ${isCollapsed ? "collapsed" : ""
        }`}
    >
      <div className=" flex bg-muted h-full  rounded-3xl flex-grow flex-col overflow-auto">
        <LogoSection logo={logo} />
        <UserInfoSection user={user} isCollapsed={isCollapsed} />
        <NavigationSection isCollapsed={isCollapsed}/>
        <div className=" align-center bottom-0 flex items-center justify-center gap-2 py-6">
          <FooterSection
            theme={theme}
            setTheme={setTheme}
            isCollapsed={isCollapsed}
            toggleCollapse={toggleCollapse}
          />
        </div>
      </div>
    </div>
  );
}
