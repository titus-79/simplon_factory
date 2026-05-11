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

console.log("ClothingSize : " + ClothingSize.SIZE_L)
console.log("ShoeSize : " + ShoeSize.SIZE_39)

const jacket = new Clothing(123, "veste", 30, 149.99, ClothingSize.SIZE_XL);
console.log("Clothing : " + JSON.stringify(jacket));

const clapper = new Shoes(53, "claquette", 104, 19.99,ShoeSize.SIZE_45);
console.log("Shoes : " + JSON.stringify(clapper));

const  sneaker = new Shoes(12, "Nike", 350, 159.99, ShoeSize.SIZE_36);
console.log(sneaker.displayDetails());

const order1 = new Order(34, person1, [clapper, jacket], new Date());
console.log("Order : " + JSON.stringify(order1));

order1.addProduct(sneaker);
console.log("Order addProduct(s): " + JSON.stringify(order1));

order1.removeProduct(123);
console.log("Order removeProduct(123): " + JSON.stringify(order1));

console.log("calculateWeight() : " + order1.calculateWeight());

console.log("calculateTotal() : " + order1.calculateTotal().toFixed(2) + " €");

console.log("order1.displayOrder() : " + JSON.stringify(order1.displayOrder()));


