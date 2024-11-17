/* Hashmap
? What is a Hashmap?
* A Hashmap is a data structure that stores key-value pairs. It helps in faster retrieval/ insertion/ search/ deletion of data in constant time O(1). 

? How to create a Hashmap?
* 1. Using the Map constructor.
* 2. Using an object literal.

? Where to use a Hashmap?
* 1. Storing the frequency of elements in an array.
* 2. Finding duplicate/ non-repeating elements in an array.

? How to iterate over a Hashmap?
* Using the for-of loop on map.entries(), using [key, value] destructuring.
* Using forEach() method => map.forEach((value, key) => {});

! Difference between Map and Object
* 1. Map is a class, Object is a built-in constructor.
* 2. Map is iterable, Object is not.
* 3. Map is a data structure, Object is a data type.
* 4. Map by default contains no keys, Object by default has prototype.
* 5. Key in Map can be of any data type, key in Object must be a string or a Symbol.
* 6. Map is faster than Object.

! Note: Values in map can be set same as Object but will not be recognized by the methods.
* const wrongMap = new Map();
* wrongMap["bla"] = "blaa";
* console.log(wrongMap); => Map { bla: "blaa" }

* wrongMap.has("bla") => false
* wrongMap.get("bla") => undefined
* wrongMap.delete("bla") => false
! Still no change in the map
* console.log(wrongMap) => Map { bla: "blaa" }

! Two Maps when equated using === will not be equal.
*/

const map = new Map();

// Key can be any of data-type
map.set("a", 1);
map.set(function sum(a, b) {
  return a + b;
}, 2);

console.log(map.entries());

const kvArray = [
  ["key1", "value1"],
  ["key2", "value2"],
];

const map2 = new Map(kvArray);
console.log(map2.get("key1"));

const first = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);

const second = new Map([
  [1, "uno"],
  [2, "dos"],
]);

// Merge maps with an array. The last repeated key wins.
const merged = new Map([...first, ...second, [1, "un"]]);

/* 
! Map.groupBy() is not working!!

const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 9 },
  { name: "bananas", type: "fruit", quantity: 5 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 12 },
  { name: "fish", type: "meat", quantity: 22 },
];

const restock = { restock: true };
const sufficient = { restock: false };

const result = Map.groupBy(inventory, ({ quantity }) =>
  quantity < 6 ? restock : sufficient
);
console.log(result);
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*/

//* Map Methods

// Map.clear() => Removes all the elements from the map.
// Map.delete() => Removes a specific element from the map.
