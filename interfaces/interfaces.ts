import { StaticImageData } from "next/image";

export interface ProductsProps {
  id: number;
  slug: string;
  name: string;

  image: {
    mobile: StaticImageData | any | string;
    tablet: StaticImageData | any | string;
    desktop: StaticImageData | any | string;
  };

  category: string;

  categoryImage: {
    mobile: StaticImageData | any | string;
    tablet: StaticImageData | any | string;
    desktop: StaticImageData | any | string;
  };

  new: boolean;
  price: number;
  description: string;
  features: string;

  others: {
    slug: string;
    name: string;
    image: {
      mobile: StaticImageData | any | string;
      tablet: StaticImageData | any | string;
      desktop: StaticImageData | any | string;
    };
  }[];

  including: {
    quantity: number;
    item: string;
  }[];

  gallery: {
    first: {
      desktop: StaticImageData | any | string;
      tablet: StaticImageData | any | string;
      mobile: StaticImageData | any | string;
    };
    second: {
      desktop: StaticImageData | any | string;
      tablet: StaticImageData | any | string;
      mobile: StaticImageData | any | string;
    };
    third: {
      desktop: StaticImageData | any | string;
      tablet: StaticImageData | any | string;
      mobile: StaticImageData | any | string;
    };
  };
}

export interface ProductsState {
  products: ProductsProps[];
}

export type updateQtyProps = {
  type: "INCREMENT" | "DECREMENT";
  id: string;
};

export interface cartProductType {
  id: string;
  quantity: number;
  product: ProductsProps;
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

export interface FormValuesProps {
  fullName: string;
  email: string;
  phoneNumber: number | null|undefined;
  address: string;
  zipCode: number | null|undefined;
  city: string;
  country: string;
  paymentMethod: string;
      eMoneyNumber: null|undefined;
    eMoneyPin:null|undefined;

}
