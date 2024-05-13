import type { Metadata } from "next";
import { Shell } from "@/components/shells/shell";
import { User } from "@/components/dashboard/user";
import { TabsDemo } from "../page";
import { getAuthSession } from "@/lib/auth";
import { UserProfile } from "@/components/dashboard/user-profile";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { db } from "@/lib/db";



export default async function AccountPage() {

    const session = await getAuthSession();

    const userInfo =await db.user.findUnique({
        where: {
            id: session?.user?.id
        },
        include: {
            Post: true,
            Social: true,
            Profile: true,
        },
    });
    
    const user = session?.user
    const username = user?.username

    return (
        <Shell variant="sidebar">
            <section
                id="user-account-info"
                aria-labelledby="user-account-info-heading"
                className="w-full overflow-hidden"
            >
                <User user={user} />
                <hr />
                <UserProfile profile={userInfo}  username={username} />
            </section>
        </Shell>
    )
}