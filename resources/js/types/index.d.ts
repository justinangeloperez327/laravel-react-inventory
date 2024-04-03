import { LucideIcon } from "lucide-react";

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export interface Color {
    id: number;
    name: string;
}

export interface Category {
    id: number;
    name: string;
}

export interface Product {
    id: number;
    name: string;
    price: number;
}

// purchase orders table fields
// 'description',
// 'date',
// 'expected_date',
// 'status',
// 'user_id',
// 'supplier_id',
export interface PurchaseOrder {
    id: number;
    description: string;
    date: string;
}

export interface PurchaseRequisition {
    id: number;
    description: string;
    date: string;
}

//products is array of Product
export interface Products {
    products: Product[];
}
export interface Size {
    id: number;
    name: string;
}

export type ProductProps = {
    product: Product;
};

export type CategoryProps = {
    category: Category;
};

export type SizeProps = {
    size: Size;
};

export type ColorProps = {
    color: Color;
};


export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
    products: Product[];
    category: Category;
    size: Size;
    color: Color;
};

export interface SidebarItems {
    links: Array <{
        label: string;
        href: string;
        icon?: LucideIcon;
    }>
}
