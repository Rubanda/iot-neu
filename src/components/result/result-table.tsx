'use client'
import React from 'react'
import { ColumnDef } from '@tanstack/react-table';
import { useDataTable } from "@/hooks/use-data-table";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '../ui/button';
import { Icons } from '../icons';
import { Prisma } from '@prisma/client';
import { DataTable } from '../data-table/data-table-initial';
import { Badge } from '../ui/badge';
import { truncateString } from '@/lib/utils';
import Image from 'next/image';
type Result = {
    id: string;
    userId: string;
    result: string;
    image: string | null;
    confidence:     number | null;
    recommendation: string | null;
    createdAt: Date;
}
interface ResultDepartmentTableProps {
    data: Result[]
    pageCount: number;

}

export default function ResultTableShell({
    data,
    pageCount,

}: ResultDepartmentTableProps) {
    const columns = React.useMemo<ColumnDef<Result, unknown>[]>(
        () => [

            {
                accessorKey: "image",

                cell: ({ row }) => (
                    <Image src={row.original?.image!} alt="test image" width={30} height={30} className="rounded-lg"/>
                ),
            },
            {
                accessorKey: "result",
                cell: ({ row }) => {
                    
                   
                    return (
                        <div className='flex gap-2 ' >
                           
                                <Badge>{row.original?.result}</Badge>
                           
                        </div>
                    )
                }
            },
            {
                accessorKey: "confidence",
                cell: ({ row }) => {
                    return (
                        <div className='flex gap-2' >
                            
                                    <Badge >{row.original?.confidence}</Badge>
                            
                        </div>)

                }
            },
            {
                accessorKey: "recomendation",
                cell: ({ row }) => (
                    <p>{row.original.recommendation ? truncateString(row.original?.recommendation, 20) : '--'}</p>
                )
            },
            {
                id: "actions",
                cell: function Cell({ row }) {
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                aria-label="Open menu"
                                variant="ghost"
                                className="flex h-6 w-6 p-0 data-[state=open]:bg-muted"
                            >
                                <Icons.ellipsis className="h-4 w-4" aria-hidden="true" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" >
                            <DropdownMenuItem
                            // onSelect={() => setShowEditMember(true)}
                            // onClick={() => handleEdit(row.original?.memberId)}
                            >
                                Edit
                            </DropdownMenuItem>

                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                            // onSelect={() => setShowDeleteMember(true)}
                            // onClick={() => handleDelete(row.original?.memberId)}
                            >
                                Delete
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                },
            },
        ], []
    );

    const { table } = useDataTable({
        data,
        columns,
        pageCount,
        initialState: {

        },
        getRowId: (originalRow, index) => `${originalRow.id}-${index}`,
        clearOnDefault: true,
    })

    return (
        <DataTable className='container mx-auto'
            table={table}
        >

        </DataTable>
    )
}
