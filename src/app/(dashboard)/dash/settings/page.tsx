import { redirect } from "next/navigation";
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "../../../../components/page-header";
import { Shell } from "../../../../components/shell/shell";
import { Separator } from "../../../../components/ui/separator";
import { getCurrentUser } from "../../../../lib/session";
import { db } from "../../../../lib/db";
import { authOptions } from "../../../../lib/auth";
import { ProfileForm } from "./profile-form";
import BreadCrumb from "@/components/bread-crump";

export const metadata = {
  title: "Settings",
  description: "Manage account and website settings.",
}

export default async function SettingsPage() {
  const session = await getCurrentUser()
  const user = session
  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login")
  }
  const userData = await db.user.findUnique({
    where: {
      id: user?.id,
    },
    include: {
      Profile: true,
      Social: true
    },
  });
  const skills = userData?.Profile?.skills
  const bio = userData?.Profile?.bio
  const social = userData?.Social?.map((social: any) => {
    return { value: social.url }
  })
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