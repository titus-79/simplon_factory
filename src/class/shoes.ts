import { Product } from "./product.js";
import type { ShoeSize } from "./shoeSize.js";

export class Shoes extends Product {
    size: ShoeSize;

    constructor(productId: number, name: string, weight: number, price: number, size: ShoeSize) {
        super(productId, name, weight, price);
        this.size = size;
    }

    displayDetails(): string {
        return `Product ID: ${this.productId}, Name: ${this.name}, Weight: ${this.weight}, Size: ${this.size}, Price: ${this.price} €`}

}