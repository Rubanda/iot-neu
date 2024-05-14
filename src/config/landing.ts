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
      href: "/dash/",
      icon: "dashboard",
    },
    {
      title: "Profile",
      href: "/dash/profile",
      icon: "user",
    },
    {
      title: "Settings",
      href: "/dash/settings",
      icon: "settings",
    },
  ],
}
