import React from 'react'
import { Skeleton } from '../ui/skeleton'
import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link'

type Props = {
    user:any
}
const User = ({user}:Props) => {
  return (
    <>
        <div className="flex flex-col gap-3 items-center justify-center p-3 md:flex-row">
        {!user ? (
          <div className="flex flex-col md:flex-row items-center space-x-4">
            <Skeleton className="h-[150px] w-[150px] rounded-full mb-2" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        ) :
          (<div className='flex flex-col gap-3 items-center md:flex-row'>
            {/* @ts-ignore */}
            <Image src={user?.image} alt="avatar" className='rounded-full' width={150} height={150} />

            <div className='flex flex-col gap-3'>
              <h2 className="text-2xl font-bold">{user.name}</h2>
              <p className="text-lg text-muted-foreground">{user.email}</p>
              <Button asChild>
                <Link href="/dash/settings">Edit Profile</Link>
              </Button>
            </div>
          </div>)
        }
      </div>
    </>
  )
}

export  {User}