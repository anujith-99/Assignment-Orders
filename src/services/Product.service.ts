import { Product } from "../models/Product.model";

export class ProductService {
  private products: Array<Product> = [];

  constructor() {
    this.products.push(new Product(1, "TV", 20000));
    this.products.push(new Product(2, "Laptop", 30000));
    this.products.push(new Product(3, "AC", 17000));
    this.products.push(new Product(4, "Mobile Phone", 8000));
    this.products.push(new Product(5, "Phone Charger", 800));
    this.products.push(new Product(6, "Tablet", 10000));
  }

  public getAllProducts() {
    return this.products;
  }

  public getOrderProducts(items: Array<number>) {
    let totalPrice = 0;
    let productsInfo: Array<Product> = [];
    items.forEach((itemID) => {
      let product = this.products.find((p) => p.pid === itemID);
      if (product) {
        totalPrice += product.price;
        productsInfo.push(product);
      }
    });

    return { totalPrice, productsInfo };
  }
}
