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
type Health = {
    id: string;
    userId: string;
    skinConditions: Prisma.JsonValue;
    allergies: Prisma.JsonValue;
    otherDetails: string | null;
    createdAt: Date;
}
interface HealthDepartmentTableProps {
    data: Health[]
    pageCount: number;

}

export default function HealthTableShell({
    data,
    pageCount,

}: HealthDepartmentTableProps) {
    const columns = React.useMemo<ColumnDef<Health, unknown>[]>(
        () => [

            // {
            //     accessorKey: "userId",

            //     cell: ({ row }) => (
            //         <p>{row.original.userId}</p>
            //     ),
            // },
            {
                accessorKey: "skinConditions",
                cell: ({ row }) => {
                    const skinConditions = row.original.skinConditions?.toString().split(',')
                    return (
                        <div className='flex gap-2 ' >
                            {skinConditions?.map((skin, i) => (
                                <Badge key={skin + i}>{skin}</Badge>
                            ))}
                        </div>
                    )
                }
            },
            {
                accessorKey: "allergies",
                cell: ({ row }) => {
                    const skinConditions = row.original.allergies as { id: string, text: string }[]
                    return (
                        <div className='flex gap-2' >
                            {
                                skinConditions?.map((allergy, i) =>
                                (
                                    <Badge key={allergy?.id + i}>{allergy?.text}</Badge>)
                                )
                            }
                        </div>)

                }
            },
            {
                accessorKey: "otherDetails",
                cell: ({ row }) => (
                    <p>{truncateString(row.original?.otherDetails!, 20)}</p>
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
        <DataTable className=''
            table={table}
        >

        </DataTable>
    )
}
