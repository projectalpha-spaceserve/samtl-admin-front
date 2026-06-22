"use client"


import React, { useState } from 'react'
import { DataTable } from "@/components/shared/data-table";
import { filterByDateRange } from "../../../lib/date";
import type { DateRange } from "react-day-picker"


function page() {


    const customerActions = [
        {
            label: "Account Reset",
            value: "account_reset",
        },
        {
            label: "Password Reset",
            value: "password_reset",
        },
        {
            label: "Question Request",
            value: "question_request",
        },
    ]


    const columns = [
        {
            key: "sn",
            label: "S/N",
            className: "text-gray-600",
        },
        {
            key: "remark",
            label: "Remark",
            className: "text-gray-600",
        },
        {
            key: "action",
            label: "Action",
            className: "text-gray-600",
        },
        {
            key: "date",
            label: "Date",
            className: "text-gray-600",
        },
        {
            key: "status",
            label: "Status",
            render: (row: any) => (
                <div className={`font-medium ${row.status === "success" ? "bg-[#D9F9EB] text-[#3B6A56]" : "bg-[#FDDED2] text-[#FA4B08]"} px-2 py-1 rounded-full w-fit`}>
                    {row.status === "success" ? "success" : "failed"}
                </div>
            )
        },
    ]
    const data = [
        {
            sn: 1,
            remark: "Executed James",
            action: "Account Reset",
            date: "2026-06-01",
            status: "success",
        },
        {
            sn: 2,
            remark: "Resolved Sarah",
            action: "Password Reset",
            date: "2026-06-02",
            status: "success",
        },
        {
            sn: 3,
            remark: "Assigned Michael",
            action: "Ticket Reassignment",
            date: "2026-06-03",
            status: "success",
        },
        {
            sn: 4,
            remark: "Executed David",
            action: "Email Update Request",
            date: "2026-06-04",
            status: "failed",
        },
        {
            sn: 5,
            remark: "Resolved Amanda",
            action: "Access Permission Update",
            date: "2026-06-05",
            status: "success",
        },
        {
            sn: 6,
            remark: "Reviewed Daniel",
            action: "System Issue Report",
            date: "2026-06-06",
            status: "success",
        },
        {
            sn: 7,
            remark: "Executed Grace",
            action: "Account Unlock",
            date: "2026-06-07",
            status: "failed",
        },
        {
            sn: 8,
            remark: "Assigned John",
            action: "Hardware Support Request",
            date: "2026-06-08",
            status: "success",
        },
        {
            sn: 9,
            remark: "Resolved Olivia",
            action: "Password Change",
            date: "2026-06-09",
            status: "success",
        },
        {
            sn: 10,
            remark: "Executed Chris",
            action: "Profile Update",
            date: "2026-06-10",
            status: "failed",
        },
        {
            sn: 11,
            remark: "Reviewed Sophia",
            action: "Network Issue Ticket",
            date: "2026-06-11",
            status: "success",
        },
        {
            sn: 12,
            remark: "Resolved Ethan",
            action: "Software Installation",
            date: "2026-06-12",
            status: "success",
        },
        {
            sn: 13,
            remark: "Assigned Emily",
            action: "Ticket Escalation",
            date: "2026-06-13",
            status: "failed",
        },
        {
            sn: 14,
            remark: "Executed Robert",
            action: "User Account Creation",
            date: "2026-06-14",
            status: "success",
        },
        {
            sn: 15,
            remark: "Resolved Jessica",
            action: "Database Access Request",
            date: "2026-06-15",
            status: "success",
        },
        {
            sn: 16,
            remark: "Reviewed William",
            action: "Application Error Fix",
            date: "2026-06-16",
            status: "failed",
        },
        {
            sn: 17,
            remark: "Executed Linda",
            action: "Two Factor Authentication Reset",
            date: "2026-06-17",
            status: "success",
        },
        {
            sn: 18,
            remark: "Assigned Kevin",
            action: "Server Access Request",
            date: "2026-06-18",
            status: "success",
        },
        {
            sn: 19,
            remark: "Resolved Nancy",
            action: "Ticket Closure",
            date: "2026-06-19",
            status: "failed",
        },
        {
            sn: 20,
            remark: "Executed Mark",
            action: "Password Reset",
            date: "2026-06-20",
            status: "success",
        },
        {
            sn: 21,
            remark: "Reviewed Laura",
            action: "User Verification",
            date: "2026-06-21",
            status: "success",
        },
        {
            sn: 22,
            remark: "Assigned Peter",
            action: "Technical Support",
            date: "2026-06-22",
            status: "failed",
        },
        {
            sn: 23,
            remark: "Executed Henry",
            action: "Account Recovery",
            date: "2026-06-23",
            status: "success",
        },
        {
            sn: 24,
            remark: "Resolved Rachel",
            action: "Ticket Update",
            date: "2026-06-24",
            status: "success",
        },
        {
            sn: 25,
            remark: "Reviewed Andrew",
            action: "Security Review",
            date: "2026-06-25",
            status: "failed",
        },
        {
            sn: 26,
            remark: "Executed Victoria",
            action: "Access Reset",
            date: "2026-06-26",
            status: "success",
        },
        {
            sn: 27,
            remark: "Assigned Brian",
            action: "Issue Investigation",
            date: "2026-06-27",
            status: "success",
        },
        {
            sn: 28,
            remark: "Resolved Megan",
            action: "Ticket Resolution",
            date: "2026-06-28",
            status: "failed",
        },
        {
            sn: 29,
            remark: "Executed Kevin",
            action: "Account Suspension Review",
            date: "2026-06-29",
            status: "success",
        },
        {
            sn: 30,
            remark: "Reviewed Natalie",
            action: "Final Ticket Approval",
            date: "2026-06-30",
            status: "success",
        },
    ]


    const [showActions, setShowActions] = useState(false)

    const [dateRange, setDateRange] = useState<DateRange | undefined>()

    const customer = {
        firstname: "Alex",
        lastname: "Davison",
        accountNumber: "1234567890",
        email: "alex.davison@example.com",
        phone: "+1 (123) 456-7890",
        location: "New York, NY"
    }
    const name = `${customer.firstname} ${customer.lastname}`

    const filteredData = filterByDateRange(data, dateRange, "date")

    const getInitials = (name: string) => {
        return name
            .split(" ")
            .slice(0, 2)
            .map(word => word[0])
            .join("")
            .toUpperCase();
    }

    const handleAction = (Action: string) => {
        switch (Action) {
            case "account_reset":
                console.log("Account Reset")
                break;
            case "password_reset":
                console.log("Password Reset")
                break;
            case "question_request":
                console.log("Question Request")
                break;
            default:
                console.log("No action selected")
        }
    }

    const handleMenuClick = (row: any) => {
        console.log("Menu clicked", row)
    }

    return (
        <div>
            <div className='h-16 w-full'></div>
            <div className='flex items-center justify-between w-full px-4 mb-7'>
                <h1 className='text-3xl font-bold'>Customers Profile</h1>
                <div className='relative'>

                    <button
                        onClick={() => setShowActions((prev) => !prev)}
                        className="bg-[#561922] hover:bg-[#3a121a] text-white font-bold py-2 px-4 rounded-2xl flex items-center gap-2"
                    >
                        Action
                    </button>

                    {showActions && (
                        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg z-10">
                            {customerActions.map((action) => (
                                <button
                                    key={action.value}
                                    onClick={() => {
                                        handleAction(action.value);
                                        setShowActions(false);
                                    }}
                                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                >
                                    {action.label}
                                </button>
                            ))}
                        </div>
                    )}

                </div>

                {/*<Image
                    src="/icon.png"
                    alt="Logo"
                    width={20}
                    height={20}
                />*/}

            </div>
            <div className='grid grid-cols-1 md:grid-cols-[30%_70%] gap-4 p-4'>
                <div className='flex flex-col gap-4'>
                    <div className='pb-3 bg-[linear-gradient(to_bottom,#561922_20%,white_20%)] rounded-2xl shadow-2xl flex flex-col pt-8 gap-4'>
                        <div className='flex items-center justify-center'>
                            <div className='mt-8 h-30 w-30 bg-[#FFFFFF] rounded-full flex items-center justify-center border bg-rose-50'>
                                <span className='text-4xl text-[$3a121a] font-bold'>{getInitials(name)}</span>
                            </div>
                        </div>

                        <div className='flex flex-col items-center justify-center gap-2'>
                            <h1 className='text-2xl font-bold text-[#1C1B1B]'>{name}</h1>
                            <p className='text-[#5F5E5F]'>Acc No: {customer.accountNumber}</p>
                        </div>

                        {/* Customer details*/}
                        <div className='pl-8 flex flex-col gap-6'>
                            <div className='flex'>
                                <div>{/* this holds the icon */}</div>
                                <div className='flex flex-col'>
                                    <p className='text-[#5F5E5F] text-lg'>EMAIL ADDRESS</p>
                                    <p className='text-[#1C1B1B]'>{customer.email}</p>
                                </div>
                            </div>

                            <div className='flex'>
                                <div>{/* this holds the icon */}</div>
                                <div className='flex flex-col'>
                                    <p className='text-[#5F5E5F] text-lg'>PHONE NUMBER</p>
                                    <p className='text-[#1C1B1B]'>{customer.phone}</p>
                                </div>
                            </div>

                            <div className='flex'>
                                <div>{/* this holds the icon */}</div>
                                <div className='flex flex-col'>
                                    <p className='text-[#5F5E5F] text-lg'>LOCATION</p>
                                    <p className='text-[#1C1B1B]'>{customer.location}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col p-8 items-center bg-white shadow-2xl justify-content gap-4'>
                        <h1 className='text-[#5F5E5F] text-xl font-bold'>ENGAGEMENT SUMMARY</h1>
                        <div className='flex gap-4'>
                            <div className='flex flex-col p-4 gap-4 bg-[#F6F3F2] rounded-lg'>
                                <h1 className='font-bold text-2xl'>17</h1>
                                <p className='text-[#5F5E5F]'>Total Tickets</p>
                            </div>
                            <div className='flex flex-col p-4 gap-4 rounded-lg bg-[#F6F3F2]'>
                                <h1 className='font-bold text-2xl'>17</h1>
                                <p className='text-[#5F5E5F]'>Open Tickets</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="shadow-md">
                    <DataTable
                        columns={columns}
                        data={filteredData}
                        onMenuClick={handleMenuClick}
                        showDatePicker
                        dateRange={dateRange}
                        onDateChange={setDateRange}
                        onClearDate={() => setDateRange(undefined)}
                    />
                </div>
            </div>
        </div>
    )
}

export default page