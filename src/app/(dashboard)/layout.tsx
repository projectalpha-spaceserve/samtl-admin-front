"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    return (
        <section className="flex min-h-screen">
            {/* Sidebar */}
            <aside className="w-64 bg-[#561922] text-[#FFFFFF] p-4 hidden md:block">
                <div className="relative w-40 h-28">
                    <Image
                        src="/dashboard/logo.png"
                        alt="Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
                <nav className="flex flex-col justify-between gap-6 text-[#D8C1C2]">
                    <Link href="/dashboard" className={pathname === "/dashboard" ? "bg-[#D8C1C2] p-2 text-[#561922]" : ""}>dashboard</Link>
                    <Link href="/customers" className={pathname === "/customers" ? "bg-[#D8C1C2] p-2 text-[#561922]" : ""}>User</Link>
                    <Link href="/organisation" className={pathname === "/organisation" ? "bg-[#D8C1C2] p-2 text-[#561922]" : ""}>events</Link>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6 bg-[#F6F3F2]">
                {children}
            </main>
        </section>
    );
}