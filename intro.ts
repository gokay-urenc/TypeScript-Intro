function greeter(name: string) {
    return "Hello" + name;
}

// let message = greeter(5); // If name is a type of any it doesn't show an error.
let message = greeter('Negan'); // But it's a type of string.

let number: Number;
number = 10;
number = 10.4;

let city: string = "Las Vegas";
city = "Los Angeles";
city = "New York";
// city = 10; // City is a type of string. So it doesn't allow you to assign it to a number.

let isTrue: boolean = true;
isTrue = false;
isTrue = true;

// let numbers = [1, 2, 3, "String"];
let numbers: number[] = [1, 2, 3 /*, "String"*/];

let numbers2: Array<number> = [1, 2, 3];

let array: [number, string] = [2, "Los Angeles"];

enum Color {
    Red = 1, Black, Blue, Green
}
let color: Color = Color.Red;

let value: any = "String";
value = 5;
value = {};

let value2: void = undefined;

function greeter2(): void {
    console.log("Hello");
    // return 5; // Void methods can't return any values.
}

let age: number; // => undefined

class Customer {
} // => It has no reference. It's null.