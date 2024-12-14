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
  const handleOpenEdit = ()=>{
    setEdit(true)
  }
  console.log(profile)
  return (
    <div className="flex flex-col gap-3">
      <div className='flex items-center justify-start gap-6' >
        <h4 className='text-xl font-bold'>Department</h4>
        <Button variant='ghost' onClick={handleOpenEdit} >
          <Icons.pen className='h-4 w-4' />
        </Button>
      </div>

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
      {edit && <EditProfile open={edit} setOpen={setEdit} />}

    </div>
  )
}