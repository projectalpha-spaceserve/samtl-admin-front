"use client"

import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import {
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableHead,
    TableCell,
} from "@/components/ui/table"

import type { DateRange } from "react-day-picker"

type Column<T> = {
    key: string
    label: string


    render?: (row: T) => React.ReactNode


    className?: string
    headerClassName?: string
}

type DataTableProps<T> = {
    columns: Column<T>[]
    data: T[]

    // Menu
    showMenu?: boolean
    onMenuClick?: (row: T) => void

    // Date Picker
    showDatePicker?: boolean
    dateRange?: DateRange
    onDateChange?: (range: DateRange | undefined) => void
    onClearDate?: () => void

}

export function DataTable<T extends Record<string, any>>({
    columns,
    data,
    showMenu = false,
    onMenuClick,

    showDatePicker = false,
    dateRange,
    onDateChange,
    onClearDate,
}: DataTableProps<T>) {
    const [currentPage, setCurrentPage] = React.useState(1)
    const rowsPerPage = 12


    const totalPages = Math.ceil(data.length / rowsPerPage)

    const paginatedData = data.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    )

    React.useEffect(() => {
        setCurrentPage(1)
    }, [data])

    return (
        <div className="w-full bg-[#FFFFFF] rounded-lg shadow-2xl p-4">


            {showDatePicker && (
                <div className="flex items-center gap-2 bg-[#FFFFFF] justify-end mb-4">
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                className="w-[240px] justify-start text-left font-normal"
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {dateRange?.from ? (
                                    dateRange.to ? (
                                        <>
                                            {format(dateRange.from, "LLL dd, y")} -{" "}
                                            {format(dateRange.to, "LLL dd, y")}
                                        </>
                                    ) : (
                                        format(dateRange.from, "LLL dd, y")
                                    )
                                ) : (
                                    <span>Select date range</span>
                                )}
                            </Button>
                        </PopoverTrigger>

                        <PopoverContent className="w-auto p-0">

                            <Calendar
                                mode="range"
                                required={false}
                                selected={dateRange}
                                onSelect={onDateChange}
                                numberOfMonths={2}
                                autoFocus
                            />
                        </PopoverContent>
                    </Popover>
                    {dateRange?.from && (
                        <button
                            onClick={onClearDate}
                            className="text-sm text-red-500 hover:underline"
                        >
                            Clear
                        </button>
                    )}
                </div>
            )}

            {/*  Table */}
            <div className="overflow-x-auto">
                <Table className="border border-gray-200 rounded">

                    {/* Header */}
                    <TableHeader className="bg-gray-50">
                        <TableRow className="border-b-gray-100 shadow">
                            {columns.map((column, index) => (
                                <TableHead
                                    key={column.label || column.key || index}
                                    className={`text-gray-700 font-semibold ${column.headerClassName || ""}`}
                                >
                                    {column.label}
                                </TableHead>
                            ))}

                            {showMenu && <TableHead />}
                        </TableRow>
                    </TableHeader>

                    {/* Body */}
                    <TableBody>
                        {paginatedData.map((row, index) => (
                            <TableRow
                                key={row.id || row.email || index}
                                className="hover:bg-gray-50 border-b-gray-200"
                            >
                                {columns.map((column) => (
                                    <TableCell
                                        key={`${row.id || row.email || index}-${column.key}`}
                                        className={`last:border-r-0 ${column.className || ""}`}
                                    >
                                        {column.render
                                            ? column.render(row)
                                            : row[column.key]}
                                    </TableCell>
                                ))}

                                {showMenu && (
                                    <TableCell>
                                        <button
                                            onClick={() => onMenuClick?.(row)}
                                            className="text-gray-500 shadow px-3 bg-white py-1 rounded hover:text-black"
                                        >
                                            ⋮
                                        </button>
                                    </TableCell>
                                )}
                            </TableRow>
                        ))}
                    </TableBody>

                </Table>
                <div className="flex items-center justify-between mt-4">

                    {/* Left */}
                    <p className="text-sm text-gray-500">
                        Page {currentPage} of {totalPages}
                    </p>

                    {/* Center - Page Numbers */}
                    <div className="flex items-center gap-2">
                        {Array.from({ length: totalPages }, (_, i) => i + 1)
                            .slice(
                                Math.max(currentPage - 2, 0),
                                Math.min(currentPage + 1, totalPages)
                            )
                            .map((page) => (
                                <button
                                    key={page}
                                    onClick={() => setCurrentPage(page)}
                                    className={`px-3 py-1 rounded ${currentPage === page
                                        ? "bg-gray-200 text-black"
                                        : "text-gray-500"
                                        }`}
                                >
                                    {page}
                                </button>
                            ))}
                    </div>


                    <div className="flex gap-2">
                        <button
                            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                            disabled={currentPage === 1}
                            className="px-3 py-1 border rounded disabled:opacity-50"
                        >
                            ← Previous
                        </button>

                        <button
                            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="px-3 py-1 border rounded disabled:opacity-50"
                        >
                            Next →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}