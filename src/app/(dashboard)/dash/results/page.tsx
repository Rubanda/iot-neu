import { findResults } from '@/app/_action/prediction'
import ConfidenceChart from '@/components/dashboard/graph-result'
import { DataTableSkeleton } from '@/components/data-table/data-table-skeleton'
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/page-header'
import ResultTableShell from '@/components/result/result-table'
import { Shell } from '@/components/shell/shell'
import { Card, CardTitle } from '@/components/ui/card'
import { getCurrentUser } from '@/lib/session'
import React, { Suspense } from 'react'

export default async function Page() {
    const user = await getCurrentUser()
    const data = await findResults()
    const pageCount = 10
    return (
        <Shell variant="sidebar" className="flex-1 space-y-4   pt-6 ">
            <div className="space-y-4 overflow-auto container">
                <div className='flex items-center justify-between'>
                    <PageHeader
                        id="dashboard-department-page-header"
                        aria-labelledby="dashboard-department-page-header-heading"
                    >
                        <div className="flex   space-x-4">
                            <PageHeaderHeading size="sm" className="flex-1">
                                Result History 
                            </PageHeaderHeading>

                        </div>
                        <PageHeaderDescription size="sm">
                            Previous test report for 
                        </PageHeaderDescription>
                    </PageHeader>
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
                    <ResultTableShell
                        data={data ?? []}
                        pageCount={pageCount}
                    // refetch={refetch}
                    />
                    <ConfidenceChart data={data ?? []} />
                </Suspense>

                {/* <EmptyState icon='box' title='No department' text="No record found." /> */}
            </div>
        </Shell>
    )
}
