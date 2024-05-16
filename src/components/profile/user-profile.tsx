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
  return (
    <div className="flex flex-col gap-3">

      <h4 className='text-xl font-bold'>Bio</h4>
      {profile?.Profile?.bio ?
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

      {profile?.Profile?.skills ?
        <p className='text-muted-foreground'>{profile?.Profile?.skills}</p>

        : (
          <p className='text-muted-foreground'>No skills added yet</p>
        )

      }
      <div className="flex items-center justify-between">
        <AddProfile />
      </div>
    </div>
  )
}