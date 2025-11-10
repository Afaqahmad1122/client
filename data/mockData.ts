import { Product, Category } from "../types";

export const categories: Category[] = [
  { id: "all", name: "All", slug: "all" },
  { id: "1", name: "Electronics", slug: "electronics" },
  { id: "2", name: "Clothing", slug: "clothing" },
  { id: "3", name: "Home", slug: "home" },
  { id: "4", name: "Sports", slug: "sports" },
];

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    price: 99.99,
    image: "https://picsum.photos/300/300?random=1",
    description: "High-quality wireless headphones with noise cancellation",
    categoryId: "1",
    inStock: true,
  },
  {
    id: "2",
    name: "Smart Watch",
    price: 249.99,
    image: "https://picsum.photos/300/300?random=2",
    description: "Feature-rich smartwatch with health tracking",
    categoryId: "1",
    inStock: true,
  },
  {
    id: "3",
    name: "Cotton T-Shirt",
    price: 29.99,
    image: "https://picsum.photos/300/300?random=3",
    description: "Comfortable cotton t-shirt in multiple colors",
    categoryId: "2",
    inStock: true,
  },
  {
    id: "4",
    name: "Running Shoes",
    price: 89.99,
    image: "https://picsum.photos/300/300?random=4",
    description: "Lightweight running shoes for daily workouts",
    categoryId: "4",
    inStock: true,
  },
  {
    id: "5",
    name: "Coffee Maker",
    price: 79.99,
    image: "https://picsum.photos/300/300?random=5",
    description: "Automatic coffee maker with timer",
    categoryId: "3",
    inStock: true,
  },
  {
    id: "6",
    name: "Laptop Stand",
    price: 49.99,
    image: "https://picsum.photos/300/300?random=6",
    description: "Ergonomic laptop stand for better posture",
    categoryId: "1",
    inStock: true,
  },
];
