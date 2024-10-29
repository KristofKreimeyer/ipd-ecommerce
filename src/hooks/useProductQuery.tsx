import { useQuery } from '@tanstack/react-query';
import { Product } from '../interfaces/product';

const fetchProduct = async (id: string): Promise<Product> => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!response.ok) {
    throw new Error('Fehler beim Laden des Produkts');
  }
  return response.json();
};

export const useProductQuery = (id: string) => {
  return useQuery<Product, Error>({
    queryKey: ['product', id],
    queryFn: () => fetchProduct(id),
  });
};
