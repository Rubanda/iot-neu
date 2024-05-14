import React from 'react'
import { getCurrentUser } from '../../../../lib/session';
import { db } from '../../../../lib/db';
import { Shell } from '../../../../components/shell/shell';
import { User } from '../../../../components/dashboard/user';
import { UserProfile } from '../../../../components/dashboard/user-profile';

export default async function AccountPage() {

  const session = await getCurrentUser();
  console.log(session)
  const userInfo =await db.user.findUnique({
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
