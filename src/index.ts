import { Customer } from "./class/Customer.js";
import { Product } from "./class/Product.js";
import { ClothingSize } from "./class/ClothingSize.js";
import { ShoeSize } from "./class/ShoeSize.js";
import { Clothing } from "./class/Clothing.js";
import { Shoes } from "./class/Shoes.js";
import { Order } from "./class/Order.js";

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

const s = new Shoes(53, "claquette", 104, 19.99,ShoeSize.K);
console.log("Shoes : " + JSON.stringify(s));

const o = new Order(34, person1, [c, d], new Date());
console.log("Order : " + JSON.stringify(o));

o.addProduct(s);
console.log("Order : " + JSON.stringify(o));

o.removeProduct(123);
console.log("Order : " + JSON.stringify(o));

console.log("calculateWeight() : " + o.calculateWeight());

console.log("calculateTotal() : " + o.calculateTotal().toFixed(2) + " €");

console.log("o.displayOrder() : " + JSON.stringify(o.displayOrder()));


