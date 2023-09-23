export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    quantity: number;

    created_at?: string;
    updated_at?: string;
}