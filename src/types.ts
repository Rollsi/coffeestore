export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  origin: string;
  roast: string;
}

export interface CartItem extends Product {
  quantity: number;
}