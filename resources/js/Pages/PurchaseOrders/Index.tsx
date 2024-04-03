import { Head, Link } from '@inertiajs/react';
import { PurchaseOrder, User } from '@/types';

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DangerButton from '@/Components/DangerButton';
import Pagination from '@/Components/Pagination';
import PrimaryButton from '@/Components/PrimaryButton';
import Table from '@/Components/Table';

interface PurchaseOrderIndexProps {
    auth: {
        user: User;
    };
    purchaseOrders: {
        data: PurchaseOrder[];
        links: any[];
        next_page_url: string;
        prev_page_url: string;
    };
}

function handleEdit(id: number): void {
    // Implement your logic here
    console.log(`Editing product with ID: ${id}`);
}
function handleDelete(id: number): void {
    // Implement your logic here
    console.log(`Editing product with ID: ${id}`);
}

const columns = [
    {
        title: 'ID',
        key: 'id',
    },
    {
        title: 'Name',
        key: 'name',
    },
    {
        title: 'Price',
        key: 'price',
    },
    {
        title: 'Actions',
        key: 'actions',
        render: (product: PurchaseOrder) => (
            <div>
                <PrimaryButton onClick={() => handleEdit(product.id)}>Edit</PrimaryButton>
                <DangerButton onClick={() => handleDelete(product.id)}>Delete</DangerButton>
            </div>
        ),
    },
]

const PurchaseOrderIndex = ({ auth, purchaseOrders } : PurchaseOrderIndexProps) => {

    return (
        <>
            <AuthenticatedLayout
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Products</h2>}
            >
                <Head title="Products" />
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white shadow-sm sm:rounded-lg">
                            <div className="relative p-2">
                                <Table
                                    columns={columns}
                                    data={purchaseOrders.data}
                                />

                                <div>
                                    <Pagination links={purchaseOrders.links} />
                                </div>
                            </div>
                    </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
};

export default PurchaseOrderIndex
