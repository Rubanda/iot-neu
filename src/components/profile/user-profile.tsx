'use client'
import React, { useState, useEffect } from 'react'
import { Skeleton } from '../ui/skeleton'
import Link from 'next/link'
import { Icons } from '../icons'
import { CopyToClipboard } from '../copy-user-url'
import { AddSocial } from './add-social'
import { Button } from '../ui/button'
import { AddProfile } from './add-profile'
interface ProfileProps {
  profile: any
  username: string | null | undefined
}
export const Profile = ({ profile, username }: ProfileProps) => {
  console.log(profile)
  return (
    <div className="flex flex-col gap-3">
      <h4 className='text-xl font-bold'>Department</h4>

      {profile?.Profile?.department ?
        <p className='text-muted-foreground'>{profile?.Profile?.department}</p>

        : (
          <p className='text-muted-foreground'>No department added yet</p>
        )

      }
      <h4 className='text-xl font-bold'>Student ID</h4>
      {profile?.Profile?.studentId ?
        <p className='text-muted-foreground'>{profile?.Profile?.studentId}</p>

        : (
          <p className='text-muted-foreground'>No studentId added yet</p>
        )

      }
      <div className="flex items-center justify-between">
        {/* <AddProfile /> */}
      </div>
    </div>
  )
}