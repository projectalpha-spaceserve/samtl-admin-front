"use client"

import { usePathname } from "next/navigation"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from "next/link"

export default function DashboardBreadcrumb() {

    const pathname = usePathname()

    const paths = pathname
        .split("/")
        .filter(Boolean)

    return (

        <Breadcrumb>

            <BreadcrumbList>

                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link href="/dashboard">
                            Home
                        </Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>

                {
                    paths.map((path, index) => {
                        const href = "/" + paths
                            .slice(0, index + 1)
                            .join("/")

                        const label = path
                            .replace("-", " ")
                            .replace(/\b\w/g, char => char.toUpperCase())

                        return (
                            <div key={href} className="flex items-center gap-2">
                                <BreadcrumbSeparator />

                                <BreadcrumbItem>
                                    <BreadcrumbLink href={href}>
                                        {label}
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                            </div>
                        )
                    })
                }
            </BreadcrumbList>
        </Breadcrumb>

    )
}