import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import Table from '@/Components/Table';

interface PurchaseOrderIndexProps {
    purchaseOrders: any[];
}

export const PurchaseOrderIndex = ({ purchaseOrders } : PurchaseOrderIndexProps) => {

    const columns = [
        { header: 'PO ID', accessor: (row: { id: any; }) => row.id },
        { header: 'Price', accessor: (row: { price: any; }) => row.price },
    ];

    return (
        <>
            <div className="p-4">
                <div className="flex justify-between mb-4">
                    <input
                        type="text"
                        placeholder="Search"
                        className="border-2 border-gray-300 p-2 rounded-md"
                    />
                    <Link href="/orders/create" className="bg-blue-500 text-white px-4 py-2 rounded-md">Add Purchase Order</Link>
                </div>
                <Table columns={columns} data={purchaseOrders} />
                <div className="flex justify-center mt-4">
                    {/* Add pagination buttons here */}
                </div>
            </div>
        </>
    );
};
