"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { LayoutDashboard, Users, UserCog, Menu, X } from "lucide-react";
import { useAuthStore } from "@/stores/auth.store";
import DashboardBreadcrumb from "@/components/layout/breadcrumb";

const routes = [
    {
        name: "Dashboard",
        path: "/dashboard",
        icon: LayoutDashboard
    },
    {
        name: "Users",
        path: "/customers",
        icon: Users
    },
    {
        name: "Admin Management",
        path: "/admin-management",
        icon: UserCog,
        role: "super_admin"
    }
];

const getInitials = (name: string) => {
    return name
        .split(" ")
        .slice(0, 2)
        .map(word => word[0])
        .join("")
        .toUpperCase();
};

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const { hasRole, user } = useAuthStore();
    const name = user?.name + " " + user?.lastName;

    // Controls whether the full sidebar is expanded on mobile
    const [mobileOpen, setMobileOpen] = useState(false);

    const filteredRoutes = routes.filter(route => !route.role || hasRole(route.role));

    return (
        <section className="flex min-h-screen">


            <aside className="hidden md:flex w-64 bg-[#561922] text-white p-4 flex-col shrink-0">
                <div className="relative w-30 h-20 mb-4">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

                <nav className="flex flex-col gap-4">
                    {filteredRoutes.map((route) => {
                        const Icon = route.icon;
                        const active = pathname === route.path;
                        return (
                            <Link
                                key={route.path}
                                href={route.path}
                                className={`
                                    flex items-center gap-3 p-2 rounded-md transition-colors
                                    ${active
                                        ? "bg-[#D8C1C2] text-[#561922]"
                                        : "text-[#D8C1C2] hover:bg-[#6e2330]"
                                    }
                                `}
                            >
                                <Icon size={20} />
                                <span>{route.name}</span>
                            </Link>
                        );
                    })}
                </nav>
            </aside>

            <aside className="md:hidden flex flex-col items-center bg-[#561922] text-white py-4 w-14 shrink-0 z-30">
                {/* Toggle button */}
                <button
                    onClick={() => setMobileOpen(prev => !prev)}
                    className="p-2 mb-4 rounded-md text-[#D8C1C2] hover:bg-[#6e2330] transition-colors"
                    aria-label="Toggle sidebar"
                >
                    {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                </button>

                {/* Icon-only nav links */}
                {filteredRoutes.map((route) => {
                    const Icon = route.icon;
                    const active = pathname === route.path;
                    return (
                        <Link
                            key={route.path}
                            href={route.path}
                            onClick={() => setMobileOpen(false)}
                            title={route.name}
                            className={`
                                p-2 rounded-md mb-2 transition-colors
                                ${active
                                    ? "bg-[#D8C1C2] text-[#561922]"
                                    : "text-[#D8C1C2] hover:bg-[#6e2330]"
                                }
                            `}
                        >
                            <Icon size={22} />
                        </Link>
                    );
                })}
            </aside>


            {mobileOpen && (
                <>

                    <div
                        className="md:hidden fixed inset-0 bg-black/40 z-20"
                        onClick={() => setMobileOpen(false)}
                    />


                    <div className="md:hidden fixed top-0 left-14 h-full w-48 bg-[#561922] text-white p-4 z-20 shadow-xl flex flex-col">
                        <div className="relative w-28 h-16 mb-6">
                            <Image
                                src="/logo.png"
                                alt="Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>

                        <nav className="flex flex-col gap-3">
                            {filteredRoutes.map((route) => {
                                const Icon = route.icon;
                                const active = pathname === route.path;
                                return (
                                    <Link
                                        key={route.path}
                                        href={route.path}
                                        onClick={() => setMobileOpen(false)}
                                        className={`
                                            flex items-center gap-3 p-2 rounded-md transition-colors
                                            ${active
                                                ? "bg-[#D8C1C2] text-[#561922]"
                                                : "text-[#D8C1C2] hover:bg-[#6e2330]"
                                            }
                                        `}
                                    >
                                        <Icon size={20} />
                                        <span className="text-sm font-medium">{route.name}</span>
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>
                </>
            )}

            <main className="flex-1 bg-[#F6F3F2] min-w-0">
                <div className="h-14 bg-white border-b flex items-center px-6 justify-between">
                    <DashboardBreadcrumb />
                    <div className="flex items-center gap-4">
                        <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-medium">
                            {getInitials(name)}
                        </div>
                    </div>
                </div>
                <div className="p-6">
                    {children}
                </div>
            </main>
        </section>
    );
}