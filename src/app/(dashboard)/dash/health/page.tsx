import { findManyHealth } from '@/app/_action/health'
import { DataTableSkeleton } from '@/components/data-table/data-table-skeleton'
import HealthTableShell from '@/components/health/health-table'
import { Icons } from '@/components/icons'
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/page-header'
import { Shell } from '@/components/shell/shell'
import { Button } from '@/components/ui/button'
import React, { Suspense } from 'react'
import { HealthInfoCards } from './health-cardinfo'
import { getCurrentUser } from '@/lib/session'
const data = [{

}]
export default async function Page() {
    const user = await getCurrentUser()
    const data = await findManyHealth()
    const pageCount = 10
    console.log('[health]report', data)
    return (
        <Shell variant="sidebar" className="flex-1 space-y-4  p-4 pt-6 md:p-8">
            <div className="space-y-4 overflow-auto">
                <div className='flex items-center justify-between'>
                    <PageHeader
                        id="dashboard-department-page-header"
                        aria-labelledby="dashboard-department-page-header-heading"
                    >
                        <div className="flex   space-x-4">
                            <PageHeaderHeading size="sm" className="flex-1">
                              Health data 
                            </PageHeaderHeading>

                        </div>
                        <PageHeaderDescription size="sm">
                             Health report for {user?.name}
                        </PageHeaderDescription>
                    </PageHeader>
                    <Button >
                        <Icons.add />
                        new
                    </Button>
                </div>
                <Suspense fallback={
                    <DataTableSkeleton
                        columnCount={5}
                        searchableColumnCount={1}
                        filterableColumnCount={2}
                        cellWidths={["10rem", "40rem", "12rem", "12rem", "8rem"]}
                        shrinkZero
                    />
                }>
                    <HealthTableShell
                        data={data ?? []}
                        pageCount={pageCount}
                    // refetch={refetch}
                    />
                </Suspense>

                <HealthInfoCards />
                {/* <EmptyState icon='box' title='No department' text="No record found." /> */}
            </div>
        </Shell>
    )
}
