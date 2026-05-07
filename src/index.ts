import {Customer} from "./class/customer.js";
import {ProductId} from "./class/productId.js";

const message: string = "Hello World!";
console.log(message);

const person1 = new Customer(1,"Alice", "alice@mail.com");
console.log(person1.displayInfo());

class Derived extends ProductId {
};

const d = new Derived(12, "Nike", 350, 159.99);
console.log(d.displayDetails());