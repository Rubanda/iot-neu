import { notFound, redirect } from "next/navigation";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { Shell } from "@/components/shells/shell"
import { getAuthSession } from "@/lib/auth";
import { UserTabs } from "@/components/navs/dashboard-nav";
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
  const storeId = Number(params.storeId)

  const user = await getAuthSession()

  if (!user) {
    redirect("/signin")
  }

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
        <UserTabs />
        {children}
      </div>
    </Shell>
  )
}