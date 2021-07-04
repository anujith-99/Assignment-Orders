import { Order } from "../models/Order.model";
import { ProductService } from "./Product.service";

export class OrderService {
  private static orderCount = 0;
  private orders: Array<Order> = [];
  private pService: ProductService = new ProductService();

  constructor() {}

  public getAllOrders() {
    return this.orders;
  }

  public createOrder(order: { customerID: number; items: Array<number> }) {
    let orderID = ++OrderService.orderCount;
    let products = this.pService.getOrderProducts(order.items);
    let newOrder = new Order(
      orderID,
      order.customerID,
      products.productsInfo,
      products.totalPrice
    );

    this.orders.push(newOrder);

    return newOrder;
  }

  public getOrdersByCustomer(customerID: number) {
    return this.orders.filter((o) => o.customerID === customerID);
  }
}
