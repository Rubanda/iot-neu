'use client'
import React, { useState, useEffect } from 'react';
import { Icons } from '../icons';
import { Button } from '../ui/button';
import { EditProfile } from './edit-profile';
interface ProfileProps {
  profile: any
  username: string | null | undefined
}
export const Profile = ({ profile, username }: ProfileProps) => {
  const [edit, setEdit] = useState(false)
  const handleOpenEdit = () => {
    setEdit(true)
  }
  console.log('profile::get', profile)
  return (
    <div className="flex flex-col gap-3">
      <div className='flex items-center justify-start gap-6' >
        <Button variant='outline' onClick={handleOpenEdit} className='flex items-center' >
          <Icons.add className='h-4 w-4' /> add profile
        </Button>
      </div>
      <h4 className='text-xl font-bold'>University</h4>
      {profile?.Profile?.university ?
        <p className='text-muted-foreground'>{profile?.Profile?.university}</p>
        : (
          <p className='text-muted-foreground'>No university added yet</p>
        )

      }
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
      {edit && <EditProfile profile={profile?.Profile} open={edit} setOpen={setEdit} />}

    </div>
  )
}