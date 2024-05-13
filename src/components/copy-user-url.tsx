'use client'
import React from 'react'
import { Input } from './ui/input'
import { Icons } from './icons'
type Props = {
    username: string | null | undefined
}
export const CopyToClipboard= ({username}:Props) => {
    return (
        <div className="flex w-full max-w-sm items-center space-x-2">
            <Input
                type="text"
                defaultValue={`https://masatafit.com/dashboard/${username}`}
                placeholder="Email"
            />
            <Icons.copy
                className='cursor-pointer hover:text-brand'
                onClick={() => navigator.clipboard.writeText(`https://masatafit.com/dashboard/${username}`)}
            />
        </div>
    )
}
