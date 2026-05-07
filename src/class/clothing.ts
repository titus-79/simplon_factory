import type { ClothingSize } from "./clothingSize.js";
import { Product } from "./product.js";
export class Clothing extends Product {

    size: ClothingSize;

    constructor(productId: number, name: string, weight: number, price: number, size: ClothingSize){
        super(productId, name, weight, price);
        this.size = size;
    }

     displayDetails(): string {
        return `Product ID: ${this.productId}, Name: ${this.name}, Weight: ${this.weight}, Size: ${this.size}, Price: ${this.price} €`}

}