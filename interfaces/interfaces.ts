import { StaticImageData } from "next/image";
import { ProductProps } from "interfaces/products";

export type updateQtyProps = {
  type: "INCREMENT" | "DECREMENT";
  id: string;
};

export interface cartProductType {
  id: string;
  quantity: number;
  product: ProductProps;
}

export interface CartState {
  cartProducts: cartProductType[];
  total: number;
  shipping: number;
  vat: number;
  grandTotal: number;
}

export interface CurrentProductProps {
  slug: string;
  name: string;
  image: {
    mobile: StaticImageData | any | string;
    tablet: StaticImageData | any | string;
    desktop: StaticImageData | any | string;
  };
}
