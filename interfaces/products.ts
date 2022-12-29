export enum productsCategories {
  headphones = "headphones",
  earphones = "earphones",
  speakers = "speakers",
}
export interface ProductProps {
  id: string;
  _id: string;
  slug: string;
  new: Boolean;
  name: string;
  price: number;
  quantityInStock: number;
  inStock: Boolean;
  image: string;
  description: string;
  features: string;
  productImageGallery: [string];
  ratingsAverage: number;
  ratingsQuantity: number;
  categoryImage: string;
  createdAt: Date;
  category: productsCategories;
  includedItems: [{ quantity: number; item: string }];
  reviews: [];
}

export interface ProductsState {
  products: ProductProps[];
}
