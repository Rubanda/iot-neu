import { notFound, redirect } from "next/navigation"

import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { UserTabs } from "@/components/navs/dashboard-nav"
import { Shell } from "@/components/shells/shell"
import { getAuthSession } from "@/lib/auth"
import { db } from "@/lib/db"

interface StoreLayoutProps {
  children: React.ReactNode
  params: {
    storeId: string
  }
}

export default async function StoreLayout({
  children,
  params,
}: StoreLayoutProps) {
  const userId = Number(params.storeId)

  const session = await getAuthSession()

  if (!session) {
    redirect("/signin")
  }

//   const user = await db.user.findUnique({
//     where: {
//       id: user?.user?.id,
//     },
//   })


//   if (!store) {
//     notFound()
//   }


  return (
    <Shell variant="sidebar">
      <div className="flex flex-col gap-4 pr-1 xxs:flex-row">
        <PageHeader className="flex-1">
          <PageHeaderHeading size="sm">Dashboard</PageHeaderHeading>
          <PageHeaderDescription size="sm">
            Manage your store
          </PageHeaderDescription>
        </PageHeader>
      </div>
      <div className="space-y-8 overflow-auto">
        {/* <UserTabs userId={userId} /> */}
        {children}
      </div>
    </Shell>
  )
}