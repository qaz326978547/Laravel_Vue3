export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;

    stock: number;
    quantity: number;

    created_at?: string;
    updated_at?: string;
}