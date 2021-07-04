import express, { Request, Response } from "express";
import { CustomerService } from "./services/Customer.service";
import { ProductService } from "./services/Product.service";
import { OrderService } from "./services/Order.service";
import { Order } from "./models/Order.model";

const app = express();

app.use(express.json());

const cService = new CustomerService();
const pService = new ProductService();
const oService = new OrderService();

app.get("/", (req: Request, res: Response) => {
  res.send("Base request");
});

app.get("/products", (req: Request, res: Response) => {
  const products = pService.getAllProducts();
  res.json({ products });
});

app.get("/orders", (req: Request, res: Response) => {
  const orders = oService.getAllOrders();
  res.json({ orders });
});

app.get("/orders/:customerID", (req: Request, res: Response) => {
  let customerID = eval(req.params.customerID);
  if (cService.isCustomerValid(customerID)) {
    const orders = oService.getOrdersByCustomer(customerID);
    res.json({ orders, orderCount: orders.length });
  } else {
    res.json({ message: "Invalid Customer ID" });
  }
});

app.post("/orders", (req: Request, res: Response) => {
  const order = req.body;
  if (cService.isCustomerValid(order.customerID)) {
    const createdOrder = oService.createOrder(order);

    res.json({ order: createdOrder });
  } else {
    res.json({ message: "Invalid Customer ID" });
  }
});

app.listen(9090, () => console.log("Server listening on port 9090"));
