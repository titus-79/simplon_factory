import type { Customer } from "./Customer.js";
import { Product } from "./Product.js";

export class Order {

    orderId: number;
    customer: Customer;
    productsList: Array<Product>;
    orderDate: Date;

    constructor(orderId: number, customer: Customer, productsList: Array<Product>, orderDate: Date) {
        this.orderId = orderId;
        this.customer = customer;
        this.productsList = productsList;
        this.orderDate = orderDate;
    }

    addProduct(product: Product) {
        this.productsList.push(product);
    }

    removeProduct(productId: number){
        return this.productsList = this.productsList.filter((product) => product.productId !== productId );
    }

    calculateWeight(): number {
        return this.productsList.reduce((sum: number, b: Product) => sum + b.weight, 0);
    }

    calculateTotal(): number {
        return this.productsList.reduce((sum: number, b: Product) => sum + b.price, 0);
    }

    displayOrder(): string {
        const products = this.productsList.map(p => p.displayDetails()).join("/ ");
        const total = this.calculateTotal().toFixed(2);
        return`Order ID: ${this.orderId}, Customer: ${this.customer.displayInfo()}, Product: ${products}, Total : ${total}`;

    }

}