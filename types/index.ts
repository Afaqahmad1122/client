export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  categoryId: string;
  inStock: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
