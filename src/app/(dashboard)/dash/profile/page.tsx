import React from 'react'
import { getCurrentUser } from '../../../../lib/session';
import { db } from '../../../../lib/db';
import { Shell } from '../../../../components/shell/shell';
import { User } from '../../../../components/dashboard/user';
import { UserProfile } from '../../../../components/dashboard/user-profile';
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/page-header';
import BreadCrumb from '@/components/bread-crump';

export default async function AccountPage() {

    const session = await getCurrentUser();
    const userInfo = await db.user.findUnique({
        where: {
            id: session?.id
        },
        include: {
            Post: true,
            Social: true,
            Profile: true,
        },
    });

    const user = session
    const username = user?.username

    return (
        <Shell variant="sidebar" className="flex-1 space-y-4  p-4 pt-6 md:p-8">
            <div className="xxs:flex-row flex flex-col gap-4 pr-1">
                <BreadCrumb items={[{ link: "/dash/profile", title: "Profile" }]} />
                <PageHeader
                    id="dashboard-department-page-header"
                    aria-labelledby="dashboard-department-page-header-heading"
                >
                    <div className="flex   space-x-4">
                        <PageHeaderHeading size="sm" className="flex-1">
                            Profile
                        </PageHeaderHeading>
                    </div>
                    <PageHeaderDescription size="sm">
                        Manage your Profile
                    </PageHeaderDescription>
                </PageHeader>
            </div>
            <section
                id="user-account-info"
                aria-labelledby="user-account-info-heading"
                className="w-full overflow-hidden"
            >
                <User user={user} />
                <hr />
                <UserProfile profile={userInfo} username={username} />
            </section>
        </Shell>
    )
}
