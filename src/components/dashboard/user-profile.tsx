'use client'
import React, { useState, useEffect } from 'react'
import { Skeleton } from '../ui/skeleton'
import Link from 'next/link'
import { Icons } from '../icons'
import { CopyToClipboard } from '../copy-user-url'
interface UserProfileProps {
    profile: any
    username: string | null | undefined
    }
export const UserProfile = ({profile,username}:UserProfileProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="flex flex-col gap-3 p-3">

            <h4 className='text-xl font-bold'>Bio</h4>
            { profile?.Profile?.bio ?
              <p className="text-muted-foreground">
                {profile?.Profile?.bio}
              </p>
              : (
                <p className="text-muted-foreground">
                  No bio added yet
                </p>
              )
            }
            <h4 className='text-xl font-bold'>Skill</h4>

            { profile?.Profile?.skills ?
              <p className='text-muted-foreground'>{profile?.Profile?.skills}</p>

              : (
                <p className='text-muted-foreground'>No skills added yet</p>
              )

            }
          </div>

          <div className="flex flex-col gap-3 p-3">

            <CopyToClipboard username={username} />

            <div className='flex flex-col gap-3 p-3 text-foreground rounded-xl  bg-gray-50 dark:bg-gray-800'>
              <Icons.map className='w-4 h-4' />
              <div className='flex items-center '><Icons.contact className='mr-2' />
                Member since {" "}
                { profile?.createdAt ? new Date(profile?.createdAt).toLocaleDateString(
                  undefined, { month: 'long', day: 'numeric', year: 'numeric' }
                ) : 'No date added yet'}
              </div>
            </div>
            <h4 className='text-xl font-bold'>Social</h4>
            <div>{profile?.Social && profile?.Social.length > 0 ? (
              <div className='flex flex-col gap-3 p-3 text-foreground rounded-xl bg-gray-50 dark:bg-gray-800'>
                <div className='flex flex-col items-start '>
                  {profile?.Social.map((social: { id: number, name: string, url: string }) => (
                    <Link key={social?.id} href={social?.url} className='flex items-center justify-center '>
                      <Icons.check className='h-4 w-4 mr-2' />{social?.name}
                    </Link>
                  ))}

                </div>
              </div>
            ) : (<Link href="/dash/settings">Add Social</Link>)}</div>
          </div>
        </div>
  )
}