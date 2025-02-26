"use client";

import '@/app/ui/global.css'; // Import global styles
import { inter } from '@/app/ui/fonts'; // Import the Inter font
import Navbar from './components/navbar';
import SideNav from './components/sidenav';

import { usePathname } from 'next/navigation';

export default function RootLayout({ children }) {
    const pathname = usePathname();

    return (
        <html lang="en">
            <body className={`${inter.className} antialiased`}>
                {pathname === '/' ? (
                    <>
                        <Navbar />
                        <main className="p-6 md:p-10">{children}</main>  {/* ✅ Ensures spacing */}
                    </>
                ) : (
                    <div className="flex min-h-screen">  {/* ✅ Prevents weird height issues */}
                        <SideNav />
                        <main className="flex-grow p-6 md:p-10">{children}</main>
                    </div>
                )}
            </body>
        </html>
    );
}
