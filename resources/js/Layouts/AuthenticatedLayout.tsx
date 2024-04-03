import { Box, Home, ScrollText, ShoppingCart } from "lucide-react";
import { PropsWithChildren, ReactNode, useState } from 'react';
import { SidebarItems, User } from '@/types';

import Navbar from "@/Components/Navbar";
import Sidebar from "@/Components/Sidebar";

const sidebarItems: SidebarItems = {
    links: [
        {
            label: 'dashboard',
            href: 'dashboard',
            icon: Home,
        },
        {
            label: 'purchase-orders',
            href: 'purchase-orders.index',
            icon: ShoppingCart,
        },
        {
            label: 'purchase-requisition',
            href: 'purchase-requisitions.index',
            icon: ScrollText,
        },
        {
            label: 'products',
            href: 'products.index',
            icon: Box,
        },
    ]
}

export default function AuthenticatedLayout({ children }: PropsWithChildren) {
    return (
        <>
            <Navbar />
            <Sidebar sidebarItems={sidebarItems}/>
            <main className="ml-[290px] mt-10 mr-10">
                {children}
            </main>
        </>
    );
}
