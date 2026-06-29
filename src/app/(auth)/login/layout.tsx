import Image from 'next/image';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="flex min-h-screen">
            {/* Sidebar */}
            <aside className="w-[50%] md:bg-[#D8C1C2] hidden md:block text-white p-4 relative overflow-hidden">

                <div className='flex items-center justify-center h-full'>
                    <div className="absolute w-[60%] h-[60%] bg-[#490a0e] rounded-full opacity-3"></div>

                    <div className="absolute w-[50%] h-[50%] bg-white rounded-full opacity-4"></div>

                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={300}
                        height={500}
                        className="relative z-10 h-auto"
                    />
                </div>


            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6">
                {children}
            </main>
        </section>
    );
}