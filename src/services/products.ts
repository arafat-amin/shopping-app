export interface Product {
  id: number
  name: string
  price: number
  image: string
}

export const products: Product[] = [
  { id: 1, name: 'Laptop', price: 999.99, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Smartphone', price: 499.99, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Headphones', price: 79.99, image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Camera', price: 299.99, image: 'https://via.placeholder.com/150' },
]
