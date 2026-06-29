"use client"

import { DataTable } from '@/components/shared/data-table'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import OnboardingModal from '@/components/admin-management/onbarding'
import { useToastAlert } from '@/constants/toast-provider'
import { useAuthStore } from '@/stores/auth.store'


function Admin() {

    const { hasRole } = useAuthStore();

    const [showModal, setShowModal] = useState(false)
    const columns = [
        {
            key: "name",
            label: "Admin Name",
            className: "text-gray-600",
        },
        {
            key: "email",
            label: "Admin email",
            className: "text-gray-600",
        },
        {
            key: "status",
            label: "Status",
            render: (row: any) => (
                <div className={`font-medium ${row.status === "Active" ? "bg-[#D9F9EB] text-[#3B6A56]" : "bg-[#FDDED2] text-[#FA4B08]"} px-2 py-1 rounded-full w-fit`}>
                    {row.status === "Active" ? "Active" : "Deactivated"}
                </div>
            )
        },
    ]

    const data = [
        { id: "1", name: "John Doe", email: "john.doe@example.com", status: "Active" },
        { id: "2", name: "Mary Johnson", email: "mary.johnson@example.com", status: "Deactivated" },
        { id: "3", name: "David Smith", email: "david.smith@example.com", status: "Active" },
        { id: "4", name: "Linda Brown", email: "linda.brown@example.com", status: "Deactivated" },
        { id: "5", name: "Michael Williams", email: "michael.williams@example.com", status: "Active" },
        { id: "6", name: "Sarah Davis", email: "sarah.davis@example.com", status: "Deactivated" },
        { id: "7", name: "James Wilson", email: "james.wilson@example.com", status: "Active" },
        { id: "8", name: "Patricia Taylor", email: "patricia.taylor@example.com", status: "Deactivated" },
        { id: "9", name: "Robert Anderson", email: "robert.anderson@example.com", status: "Active" },
        { id: "10", name: "Jennifer Thomas", email: "jennifer.thomas@example.com", status: "Deactivated" },
    ];

    const handleMenuClick = (row: any) => {
        console.log("Menu clicked for row:", row);
    }
    if (!hasRole("super_admin")) {

        return (
            <div>
                Unauthorized to access this page. Please contact your administrator for assistance.
            </div>
        )

    }
    return (
        <div className='h-screen'>
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h1 className='font-bold text-2xl'>Admin Management</h1>
                    <p className='text-gray-500'>Showing data of admin </p>
                </div>
                <Button onClick={() => setShowModal(true)}>
                    Add Admin
                </Button>
            </div>
            <DataTable
                columns={columns}
                data={data}
                showMenu
                onMenuClick={handleMenuClick}
            />
            <OnboardingModal open={showModal} onClose={() => setShowModal(false)} buttonText="Add Admin" />
        </div>
    )
}

export default Admin