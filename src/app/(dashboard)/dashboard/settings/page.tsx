import { redirect } from "next/navigation"

import { authOptions } from "@/lib/auth"
import { getAuthSession } from "@/lib/auth"
import { DashboardHeader } from "@/components/header"
import { DashboardShell } from "@/components/shell"
import { UserNameForm } from "@/components/user-name-form"
import { db } from "@/lib/db"
import { Card } from "@/components/ui/card"
import { ProfileForm } from "./profile-form"
import { Separator } from "@/components/ui/separator"
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/page-header"
import { Shell } from "@/components/shells/shell"

export const metadata = {
  title: "Settings",
  description: "Manage account and website settings.",
}

export default async function SettingsPage() {
  const session = await getAuthSession()
  const user = session?.user
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
  const social = userData?.Social.map(social => {
    return { value: social.url }
  })
  return (


    <Shell variant="sidebar">
      <div className="flex flex-col gap-4 pr-1 xs:flex-row">
        <PageHeader className="flex-1">
          <PageHeaderHeading size="sm">Settings</PageHeaderHeading>
          <PageHeaderDescription size="sm">
            Manage your settings
          </PageHeaderDescription>
        </PageHeader>
      </div>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Profile</h3>
          <p className="text-sm text-muted-foreground">
            This is how others will see you on the site.
          </p>
        </div>
        <Separator />
        <ProfileForm
          profile={{ skills: skills || "", bio: bio || "" }}
          social={social}
          user={{
            id: user?.id || "", name: user?.name || "",

          }}
        />
      </div>

    </Shell>
  )
}