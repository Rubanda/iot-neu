import { redirect } from "next/navigation";
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "../../../../components/page-header";
import { Shell } from "../../../../components/shell/shell";
import { Separator } from "../../../../components/ui/separator";
import { getCurrentUser } from "../../../../lib/session";
import { db } from "../../../../lib/db";
import { authOptions } from "../../../../lib/auth";
import { ProfileForm } from "./profile-form";

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