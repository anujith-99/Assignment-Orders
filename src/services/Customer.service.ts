import { Customer } from "../models/Customer.model";
export class CustomerService {
  private customers: Array<Customer> = [];

  constructor() {
    this.customers.push(new Customer(1, "Raj"));
    this.customers.push(new Customer(2, "Rajesh"));
    this.customers.push(new Customer(3, "Varun"));
  }

  public isCustomerValid(id: number) {
    return this.customers.find((c) => c.id === id) ? true : false;
  }
}
