import React from 'react'
import { Skeleton } from '../ui/skeleton'
import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Icons } from '../icons'

type Props = {
  user: any
}
const User = ({ user }: Props) => {
  return (
    <>
      <div className="w-full">
        {!user ? (
          <div className="flex flex-col md:flex-row items-center space-x-4">
            <Skeleton className="h-[150px] w-[150px] rounded-full mb-2" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        ) :
          (
            <div className='flex flex-col md:flex-row gap-3'>
              <div className='flex items-start'>
                <Image src={user?.image} alt="avatar" className='rounded-full' width={80} height={80} />
              </div>
              <div className='flex flex-col gap-3' >
                <div className='flex flex-col'>
                  <span className='text-muted-foreground'>UserName</span>
                  <h4 className='text-xl font-bold'>{user.username}</h4>
                </div>
                <div className='flex flex-col md:flex-row md:items-center  gap-4'>
                  <div className='flex flex-col'>
                    <span className='text-muted-foreground'>Name</span>
                    <h4 className="text-2xl font-bold">{user.name}</h4>
                    <div className='flex flex-col'>
                      <span className='text-muted-foreground'>User ID</span>
                      <p className="text-lg">{user.id}</p>
                    </div>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <div className='flex flex-col'>
                      <span className='text-muted-foreground'>Email</span>
                      <p className="text-lg ">{user.email}</p>
                    </div>
                    <div className='flex flex-col'>
                      <div className='flex items-center gap-2'>
                      <span className='text-muted-foreground'>Connected accounts</span>
                      <Icons.copy className='h-4 w-4 cursor-pointer hover:text-brand' />
                      </div>
                      <Image src='/google.png' width={150} height={150} alt='google' className="h-4 w-4 " />
                    </div>
                  </div>
                  {/* <EditUser /> */}
                </div>
              </div>
            </div>
          )
        }
      </div>
    </>
  )
}

export { User }