'use client'
import React from 'react'
import { Icons } from '../icons'
import Link from 'next/link'
import { Button } from '../ui/button'
import { AddSocial } from './add-social'

export default function Social({ social }: { social: any }) {
    const [openSocial, setOpenSocial] = React.useState(false)

    return (
        <div className="flex flex-col gap-3">
            <h4 className='text-xl font-bold'>Social</h4>
            <div>{social && social.length > 0 ? (
                <div className='flex flex-col gap-3 p-3 text-foreground rounded-xl bg-gray-50 dark:bg-gray-800'>
                    <div className='flex flex-col items-start '>
                        {social.map((social: { id: number, name: string, url: string }) => (
                            <Link key={social?.id} href={social?.url} className='flex items-center justify-center '>
                                <Icons.check className='h-4 w-4 mr-2' />{social?.name}
                            </Link>
                        ))}

                    </div>
                </div>
            ) : null}
                <AddSocial />

            </div>
        </div>
    )
}
