import { useQuery } from '@tanstack/react-query';
import { Product } from '../interfaces/product';

const fetchProducts = async (): Promise<Product[]> => {
    const response = await fetch('https://fakestoreapi.com/products');
    
    if (!response.ok) {
        throw new Error('Fehler beim Laden der Produkte');
    }

    return response.json();
};

export const useProductsQuery = () => {
    return useQuery<Product[], Error>({ queryKey: ['products'], queryFn: fetchProducts });
};
