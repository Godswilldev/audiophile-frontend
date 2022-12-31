export enum OrderStatus {
  placed = "placed",
  shipped = "shipped",
  cancelled = "cancelled",
  confirmed = "confirmed",
  delivered = "delivered",
}

export interface OrderProps {
  orderItems: [
    {
      product: { id: string; slug: string; name: string; price: number; image: string };
      quantity: number;
    }
  ];

  user: { firstname: string; lastname: string; id: string; photo: string; email: string };
  shippingInfo: { address: string; city: string; country: string; zipCode: string };

  orderedAt: Date;
  orderStatus: OrderStatus;
  deliveredAt: Date;

  shippingFee: number;
  productsTotal: number;
  grandTotal: number;
}
