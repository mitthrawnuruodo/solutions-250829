/************************************************************
  1) Grouping related data with an object
  Create an object called `book` with properties:
  title (string), author (string), pages (number).
  Log title + author with dot notation.
  Change pages using bracket notation.
*************************************************************/
console.log("\n1) Grouping related data");
const book = { title: "The Silent Planet", author: "C.S. Lewis", pages: 250 };
console.log("Title & Author:", book.title, "-", book.author);
book["pages"] = 260;
console.log("Updated pages:", book.pages);

/************************************************************
  2) Adding a method
  Add `describe` that prints: "Title by Author, Pages pages".
  Call the method.
*************************************************************/
console.log("\n2) Adding a method");
book.describe = function () {
  console.log(`${this.title} by ${this.author}, ${this.pages} pages`);
};
book.describe();

/************************************************************
  3) Creating objects in different ways
  Make book2 with new Object() and add props.
  Make book3 with constructor function Book(title, author, pages).
*************************************************************/
console.log("\n3) Creating objects in different ways");
// new Object()
const book2 = new Object();
book2.title = "Deep Work";
book2.author = "Cal Newport";
book2.pages = 296;
console.log("book2:", book2);

// constructor function
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.describe = function () {
    console.log(`${this.title} by ${this.author}, ${this.pages} pages`);
  };
}
const book3 = new Book("Clean Code", "Robert C. Martin", 464);
book3.describe();

/************************************************************
  4) Destructuring properties
  From movie = { title, year, rating }:
  - destructure title & rating
  - rename title -> movieTitle
  - default genre = "unknown"
*************************************************************/
console.log("\n4) Destructuring properties");
const movie = { title: "Inception", year: 2010, rating: 8.8 };
const { title: movieTitle, rating, genre = "unknown" } = movie;
console.log("movieTitle:", movieTitle, "| rating:", rating, "| genre:", genre);

/************************************************************
  5) Destructuring in function parameters
  Write printUser({ name, age=18, role="guest" }).
  Call with examples.
*************************************************************/
console.log("\n5) Destructuring in function parameters");
function printUser({ name, age = 18, role = "guest" } = {}) {
  console.log(`Name: ${name}, Age: ${age}, Role: ${role}`);
}
printUser({ name: "Lina", age: 22 });
printUser({ name: "Omar", role: "admin" });

/************************************************************
  6) Prototypes and shared methods
  Dog(name) sets this.name.
  Add bark() on Dog.prototype -> "Woof, I’m name!"
  Create two dogs and show they share bark (same function).
*************************************************************/
console.log("\n6) Prototypes and shared methods");
function Dog(name) {
  this.name = name;
}
Dog.prototype.bark = function () {
  console.log(`Woof, I’m ${this.name}!`);
};
const dog1 = new Dog("Rex");
const dog2 = new Dog("Milo");
dog1.bark();
dog2.bark();
console.log("Same bark function?", dog1.bark === dog2.bark);

/************************************************************
  7) Prototype chain lookup
  Add Dog.prototype.species = "canine".
  Show dog1.species works and that it's not an own property.
*************************************************************/
console.log("\n7) Prototype chain lookup");
Dog.prototype.species = "canine";
console.log("dog1.species:", dog1.species);
console.log("Is 'species' own on dog1?", Object.hasOwn(dog1, "species"));
console.log("'species' in dog1?", "species" in dog1);

/************************************************************
  8) Classes as syntax sugar
  Rewrite Dog as a class with constructor + bark().
*************************************************************/
console.log("\n8) Classes as syntax sugar");
class DogClass {
  constructor(name) {
    this.name = name;
  }
  bark() {
    console.log(`Woof (class), I’m ${this.name}!`);
  }
}
const dog3 = new DogClass("Zoe");
dog3.bark();

/************************************************************
  9) Inheritance with extends
  GuideDog extends DogClass:
  - assist(): "Guiding my owner safely."
  - override bark(): "Woof! (guide dog)"
*************************************************************/
console.log("\n9) Inheritance with extends");
class GuideDog extends DogClass {
  constructor(name) {
    super(name);
  }
  assist() {
    console.log("Guiding my owner safely.");
  }
  bark() {
    console.log("Woof! (guide dog)");
  }
}
const guide = new GuideDog("Buddy");
guide.bark();
guide.assist();

/************************************************************
  10) Four pillars quick practice
  Give a tiny example/line for each pillar:
  - Encapsulation (data+behavior together)
  - Inheritance (reuse/extend)
  - Abstraction (simple interface hides detail)
  - Polymorphism (same method, different behavior)
*************************************************************/
console.log("\n10) Four pillars quick practice");
// Encapsulation
class Counter {
  #value = 0; // private field hides detail
  inc() { this.#value++; }
  getValue() { return this.#value; }
}
const c = new Counter();
c.inc(); c.inc();
console.log("Encapsulation getValue():", c.getValue());

// Inheritance
class Vehicle { drive() { console.log("Driving…"); } }
class Car extends Vehicle {}
new Car().drive();

// Abstraction
function startTrip(vehicle) { vehicle.drive(); } // we don't care how drive() is implemented
startTrip(new Car());

// Polymorphism
class Bike extends Vehicle { drive() { console.log("Pedaling…"); } }
class Plane extends Vehicle { drive() { console.log("Flying…"); } }
[ new Car(), new Bike(), new Plane() ].forEach(v => v.drive());
