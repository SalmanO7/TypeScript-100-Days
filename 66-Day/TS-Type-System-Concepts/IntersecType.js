"use strict";
//  **Intersection Type**
Object.defineProperty(exports, "__esModule", { value: true });
const person = {
    name: 'John Doe',
    age: 30,
    address: '123 Main St',
    phone: '123-456-7890'
};
// In this example, we have two types, `FirstType` and `SecondType`.
// We then create a new type `CombinedType` by using the `&` (intersection) operator, which combines the properties of both `FirstType` and `SecondType`.
// The `CombinedType` includes all properties from both types, allowing you to use them together.
