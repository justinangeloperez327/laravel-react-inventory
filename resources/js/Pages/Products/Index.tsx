import { Card, CardContent, CardHeader } from '@/Components/ui/card';
import { Product, User } from '@/types';

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { ColumnDef } from '@tanstack/react-table';
import DataTable from '@/Components/DataTable';
import DeleteButton from '@/Components/Buttons/DeleteButton';
import EditButton from '@/Components/Buttons/EditButton';
import { Head } from '@inertiajs/react';

interface Props {
    products: {
        data: Product[];
        links: any[];
        next_page_url: string;
        prev_page_url: string;
    };
}

const ProductsTable = ({ products }: Props) => {
    const columns: ColumnDef<Product, keyof Product>[] = [
        {
            header: 'ID',
            key: 'id',
        },
        {
            header: 'Name',
            key: 'name',
        },
        {
            header: 'Price',
            key: 'price',
        },
        {
            header: 'Actions',
            key: 'actions',
            render: (product: Product) => (
                <div>
                    <EditButton />
                    <DeleteButton />
                </div>
            ),
        },
    ]
    return (
        <DataTable columns={columns} data={products.data} links={products.links}/>
    )
}

export default function ProductIndex({ products }: Props) {

    return (
        <>
            <AuthenticatedLayout>
                <Head title="Products" />
                <Card>
                    <CardHeader>
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">Products</h2>
                    </CardHeader>
                    <CardContent>
                    <ProductsTable products={products} />
                    </CardContent>
                </Card>
            </AuthenticatedLayout>
        </>
    );
}

