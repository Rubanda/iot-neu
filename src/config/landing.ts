import { Icons } from "@/components/icons"
import { LandingConfig } from "types"

export const landingConfig: LandingConfig = {

  mainNav: [
    {
      title: "Blog",
      href: "/blog",
      // icon: "blog",
    },
    {
      title: "About",
      href: "/about",
      // icon: "about",
    },
    {
      title: "Events",
      href: "/event",
      // icon: "event",
    },
    {
      title: "Community",
      href: "/community",
      // icon: "showcase",
    },
  ],
  sidebarNav: [

    {
      title: "Dashboard",
      href: "/dashboard/workspace",
      icon: "dashboard",
    },
    {
      title: "Profile",
      href: "/dashboard/profile",
      icon: "user",
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: "settings",
    },
  ],
}
