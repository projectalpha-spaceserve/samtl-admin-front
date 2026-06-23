"use client"

import { useOrganizationStore } from "@/stores/org-store"
import { useRouter } from "next/navigation"
import { useEffect } from "react"


export default function Dashboard() {

    const router = useRouter()
    const organization =
        useOrganizationStore(
            (state) => state.organization
        )

    {/* reroute the user to the organization selection page if no organization is selected */ }

    useEffect(() => {
        if (!organization) {
            router.push("organisations")
        }
    }, [organization])

    return (

        <div>
            <h1>
                Dashboard
            </h1>
            <p>
                Current Org:
                {organization}
            </p>
        </div>
    )


}