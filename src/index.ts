import {Customer} from "./class/customer.js";

const message: string = "Hello World!";
console.log(message);

const person1 = new Customer(1,"Alice", "alice@mail.com");
console.log(person1.displayInfo());
