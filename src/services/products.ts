export interface Product {
  id: number
  name: string
  price: number
  image: string
  description: string
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Laptop',
    price: 999.99,
    image: 'https://via.placeholder.com/150',
    description: 'A powerful laptop designed for professionals and gaming enthusiasts.',
  },
  {
    id: 2,
    name: 'Smartphone',
    price: 499.99,
    image: 'https://via.placeholder.com/150',
    description: 'A sleek smartphone with cutting-edge features and a stunning display.',
  },
  {
    id: 3,
    name: 'Headphones',
    price: 79.99,
    image: 'https://via.placeholder.com/150',
    description: 'High-quality wireless headphones with noise-canceling technology.',
  },
  {
    id: 4,
    name: 'Camera',
    price: 299.99,
    image: 'https://via.placeholder.com/150',
    description: 'A compact digital camera with superior image quality and features.',
  },
];

