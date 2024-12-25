import React from 'react'
import { getCurrentUser } from '@/lib/session';
import { db } from '@/lib/db';
import { Shell } from '@/components/shell/shell';
import { User } from '@/components/profile/user';
import { Profile } from '@/components/profile/user-profile';
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/page-header';
import BreadCrumb from '@/components/bread-crump';
import { Icons } from '@/components/icons';

export default async function AccountPage() {

    const session = await getCurrentUser();
    const userInfo = await db.user.findUnique({
        where: {
            id: session?.id
        },
        include: {
            Profile: true,
        },
    });
    console.log(userInfo)
    const user = session
    const username = user?.username

    return (
        <Shell variant="sidebar" className="flex-1 space-y-4  p-4 pt-6 md:p-8">
            <div className="xxs:flex-row flex flex-col gap-4 pr-1">
                <BreadCrumb items={[{ link: "/dash/profile", title: "Profile" }]} />

            </div>
            <Shell className="max-w-5xl mx-auto flex-1 space-y-4  p-4 pt-6 md:p-8">
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
                <section
                    id="user-account-info"
                    aria-labelledby="user-account-info-heading"
                    className="w-full space-y-5 overflow-hidden"
                >
                    <User user={user} />
                    <hr />
                    <div className="grid grid-cols-1 sm:grid-cols-2 mt-4">
                        <Profile
                            profile={userInfo}
                            username={username}
                        />
                        <div className="">
                            <div className='flex flex-col gap-3 p-3 text-foreground rounded-xl  bg-gray-50 dark:bg-gray-800'>
                                <div className='flex items-center '>
                                    <Icons.contact className='mr-2' />
                                    Member since {" "}
                                    {userInfo?.createdAt ? new Date(userInfo?.createdAt).toLocaleDateString(
                                        undefined, { month: 'long', day: 'numeric', year: 'numeric' }
                                    ) : 'No date added yet'}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Shell>
        </Shell>
    )
}
