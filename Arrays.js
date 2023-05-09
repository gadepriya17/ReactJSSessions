

// 'fruits' array created using array literal notation.
const fruits = ["Apple", "Banana"];
console.log(fruits.length);
// 'fruits2' array created using the Array() constructor.
const fruits2 = new Array("Apple", "Banana");
console.log(fruits2.length);

const fruits1 = ["Apple", "Banana"];
const fruitsString = fruits.join(", ");
console.log(fruitsString);
// "Apple, Banana"


const fruitss = ["Apple", "Banana","guava"];

// The index of an array's first element is always 0.
fruitss[0]; // Apple

// The index of an array's second element is always 1.
fruitss[1]; // Banana

// The index of an array's third element is always 2.
fruitss[2]; // 
console.log(fruitss);

// Using an index number larger than the array's length
// returns 'undefined'.
fruitss[99]; // undefined

const fruit2 = ["Apple", "Banana"];
console.log(fruit2.indexOf("Banana"));

//append an item  to an array
const fruit5 = ["Apple", "Banana"];
const newLength = fruit5.push("Orange");
console.log(fruit5);
// ["Apple", "Banana", "Orange"]
console.log(newLength);
// 3

//remove last element from array
const fruits6 = ["Apple", "Banana", "Orange"];
const removedItem = fruits6.pop();
console.log(fruits6);
// ["Apple", "Banana"]
console.log(removedItem);
// Orange


//remove multipme items from array
const fruits7 = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
const start = -3;
console.log(fruits7);
const removedItems = fruits7.splice(start);
console.log(fruits7);
// ["Apple", "Banana"]
console.log(removedItems);
// ["Strawberry", "Mango", "Cherry"]

//truncate the fruits array down to just its first 2 items.
const fruits8 = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
const start1 = 2;
const removedItems1 = fruits8.splice(start1);
console.log(fruits8);
// ["Apple", "Banana"]
console.log(removedItems1);
// ["Strawberry", "Mango", "Cherry"]


//add a new first elemtn to array

const fruits9 = ["Banana", "Mango"];
const newLength1 = fruits9.unshift("Strawberry");
console.log(fruits9);
// ["Strawberry", "Banana", "Mango"]
console.log(newLength1);
// 3

//iterate an array
const fruits10 = ["Apple", "Mango", "Cherry"];
for (const fruit of fruits10) {
  console.log(fruit);
}


//merge maultiple aaray nto 1

const fr = ["Apple", "Banana", "Strawberry"];
const moreFruits = ["Mango", "Cherry"];
const combinedFruits = fr.concat(moreFruits);
console.log(combinedFruits);
// ["Apple", "Banana", "Strawberry", "Mango", "Cherry"]

// The 'fruits' array remains unchanged.
console.log(fr);
// ["Apple", "Banana", "Strawberry"]

// The 'moreFruits' array also remains unchanged.
console.log(moreFruits);
// ["Mango", "Cherry"]



//copy an array
const ft = ["Strawberry", "Mango","chikoo"];

// Create a copy using spread syntax.
const fruitsCopy = [...ft];
// ["Strawberry", "Mango"]

// Create a copy using the from() method.
const fruitsCopy2 = Array.from(ft);
// ["Strawberry", "Mango"]

// Create a copy using the slice() method.
const fruitsCopy3 = ft.slice();
// ["Strawberry", "Mango","chikoo"]

// console.log(ft);
// console.log(fruitsCopy);
// console.log(fruitsCopy2);
// console.log(fruitsCopy3);

//length
// const clothing = ['shoes', 'shirts', 'socks', 'sweaters'];
// console.log(clothing.length);

//iterataring over an array

const numbers = [1, 2, 3, 4, 5];
const length =numbers.length;
for(let i = 0 ;i<length;i++)
{
    numbers[i]*=2;
}
console.log(numbers);
