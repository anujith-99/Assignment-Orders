import { Product } from "./Product.model";
export class Order {
  constructor(
    public orderID: number,
    public customerID: number,
    public items: Array<Product>,
    public totalPrice: number
  ) {}
}
