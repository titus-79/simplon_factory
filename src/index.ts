import { Customer } from "./class/customer.js";
import { Product } from "./class/product.js";
import { ClothingSize } from "./class/clothingSize.js";
import { ShoeSize } from "./class/shoeSize.js";
import { Clothing } from "./class/clothing.js";
import { Shoes } from "./class/shoes.js";

const message: string = "Hello World!";
console.log(message);

const person1 = new Customer(1,"Alice", "alice@mail.com");
console.log(person1.displayInfo());

class Derived extends Product {
};

const d = new Derived(12, "Nike", 350, 159.99);
console.log(d.displayDetails());

console.log("ClothingSize : " + ClothingSize.L)
console.log("ShoeSize : " + ShoeSize.D)

const c = new Clothing(123, "veste", 30, 149.99, ClothingSize.XL);
console.log("Clothing : " + JSON.stringify(c));

const s = new Shoes(23, "claquette", 104, 19.99,ShoeSize.K);
console.log("Shoes : " + JSON.stringify(s));