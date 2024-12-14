import { Shell } from '@/components/shell/shell'
import { Card, CardTitle } from '@/components/ui/card'
import React from 'react'

export default function Page () {
  return (
 <Shell variant="sidebar" className="flex-1 space-y-4  p-4 pt-6 md:p-8">
    <h2>Health</h2>
    <div className='flex gap-3 ' >
        <Card className='p-4'>
            <CardTitle>
                John Doe
            </CardTitle>
        </Card>
    </div>
</Shell>
  )
}
