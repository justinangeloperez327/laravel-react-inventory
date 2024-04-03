import { Head, Link } from '@inertiajs/react';
import { PurchaseRequisition, User } from '@/types';

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DangerButton from '@/Components/DangerButton';
import Pagination from '@/Components/Pagination';
import PrimaryButton from '@/Components/PrimaryButton';
import Table from '@/Components/Table';

interface PurchaseRequisitionIndexProps {
    auth: {
        user: User;
    };
    purchaseRequisitions: {
        data: PurchaseRequisition[];
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
        render: (product: PurchaseRequisition) => (
            <div>
                <PrimaryButton onClick={() => handleEdit(product.id)}>Edit</PrimaryButton>
                <DangerButton onClick={() => handleDelete(product.id)}>Delete</DangerButton>
            </div>
        ),
    },
]

const PurchaseRequisitionIndex = ({ auth, purchaseRequisitions } : PurchaseRequisitionIndexProps) => {

    return (
        <>
            <AuthenticatedLayout
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Purchase Requisitions</h2>}
            >
                <Head title="Purchase Requisitions" />
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white shadow-sm sm:rounded-lg">
                            <div className="relative p-2">
                                <Table columns={columns} data={purchaseRequisitions.data} />

                                <div>
                                    <Pagination links={purchaseRequisitions.links} />
                                </div>
                            </div>
                    </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
};

export default PurchaseRequisitionIndex
