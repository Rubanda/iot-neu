import {redirect} from "next/navigation";
import {PageHeader, PageHeaderDescription, PageHeaderHeading} from "@/components/page-header";
import {Shell} from "@/components/shell/shell";
import {Separator} from "@/components/ui/separator";
import {getCurrentUser} from "@/lib/session";
import {authOptions} from "@/lib/auth";
import BreadCrumb from "@/components/bread-crump";

export const metadata = {
  title: "Settings",
  description: "Manage account and website settings.",
}

export default async function SettingsPage() {
  const user = await getCurrentUser()
  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login")
  }
  return (


    <div className="mt-9">
      <div className="xxs:flex-row flex flex-col gap-4 pr-1">
        <BreadCrumb items={[{ link: "/dash/settings", title: "Settings" }]} />

      </div>
      <Shell variant="sidebar" className="max-w-5xl mx-auto flex-1 space-y-4  p-4 pt-6 md:p-8">
        <PageHeader
          id="dashboard-department-page-header"
          aria-labelledby="dashboard-department-page-header-heading"
        >
          <div className="flex   space-x-4">
            <PageHeaderHeading size="sm" className="flex-1">
              Settings
            </PageHeaderHeading>
          </div>
          <PageHeaderDescription size="sm">
            Manage your Settings
          </PageHeaderDescription>
        </PageHeader>
        <Separator />
        
      </Shell>

    </div>
  )
}