import { LandingConfig } from "../types";

export const landingConfig: LandingConfig = {

  mainNav: [
    {
      title: "Home",
      href: "/",
      // icon: "blog",
    },
    {
      title: "About",
      href: "/about",
      // icon: "about",
    }
  ],
  sidebarNav: [

    {
      title: "Dashboard",
      href: "/dashboard/",
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
