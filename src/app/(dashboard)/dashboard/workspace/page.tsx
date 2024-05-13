'use client'
import { DashboardShell } from '@/components/shell';
import React from 'react';
import { useSession } from 'next-auth/react';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { UserTabs } from '@/components/navs/dashboard-nav';

const sidebarNavItems = [
 
  {
    title: "Workouts",
    href: "/dashboard/account/workouts",
    disabled: false,
  },
  {
    title: "Profile",
    href: "/dashboard/account/details",
    disabled: false,
  },
  // {
  //   title: "Notifications",
  //   href: "/settings/notifications",
  //   disabled: false,
  // },
  // {
  //   title: "Account",
  //   href: "/settings/account",
  //   disabled: true,
  // },
  // {
  //   title: "Appearance",
  //   href: "/settings/appearance",
  //   disabled: true,
  // },

]
const Profile = () => {
  const { data, status } = useSession()
  const user = data?.user
  const username = user?.username

  return (
    <DashboardShell className='grid-cols-1'>
    </DashboardShell>
  )
}

export default Profile