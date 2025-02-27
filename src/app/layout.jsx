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
                {pathname !== '/' && (  // ✅ Sidebar layout for other pages
                    <div className="flex min-h-screen">
                        <SideNav />
                        <main className="flex-grow p-6 md:p-10">{children}</main>
                    </div>
                )}
                {pathname === '/' && children}  // ✅ No navbar here anymore
            </body>
        </html>
    );
}

