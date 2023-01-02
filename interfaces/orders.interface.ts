export enum OrderStatus {
  placed = "placed",
  shipped = "shipped",
  cancelled = "cancelled",
  confirmed = "confirmed",
  delivered = "delivered",
}

interface OrderProducts {
  product: string;
  quantity: number;
}

export interface OrderProps {
  orderItems: OrderProducts[];
  shippingInfo: { address: string; city: string; country: string; zipCode: string | number };
}
