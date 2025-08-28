# Lesson Task: Objects and OOP in JavaScript

## 1) Grouping related data with an object
Create an object called `book` with the properties:
* `title` → any string
* `author` → any string
* `pages` → a number
Log the book’s title and author using **dot notation**.
Then change the number of pages using **bracket notation**.

## 2) Adding a method
Expand the `book` object with a method called `describe` that prints:
`"Title by Author, Pages pages"`
Call the method to check that it works.

## 3) Creating objects in different ways
Create a second `book` object using:
* `new Object()` and then add properties to it.
* A **constructor function** `Book(title, author, pages)` that creates new books.

Use both approaches to make a new `book2` and `book3`.

## 4) Destructuring properties
Given the object:
```js
const movie = { title: "Inception", year: 2010, rating: 8.8 };
```
* Use destructuring to create variables `title` and `rating`.
* Rename `title` to `movieTitle` in the process.
* Add a default value for `genre` (use `"unknown"`).

Log all three values.

## 5) Destructuring in function parameters
Write a function `printUser` that takes a `user` object and prints:
`"Name: X, Age: Y, Role: Z"`

Use **object destructuring directly in the function parameter**, 
with defaults for `age` (18) and `role` (`"guest"`).

Call it with:
```js
printUser({ name: "Lina", age: 22 });
printUser({ name: "Omar", role: "admin" });
```

## 6) Prototypes and shared methods
Write a constructor function `Dog(name)`.
Inside it, set `this.name = name`.

Then add a method `bark()` to `Dog.prototype` that logs `"Woof, I’m name!"`.

Create two dogs and show that both can `bark()`.
Check with `dog1.bark === dog2.bark` — should be `true`.

## 7) Prototype chain lookup
Add a property `species = "canine"` to `Dog.prototype`.
Show that `dog1.species` works even though the property wasn’t set on `dog1` itself.
Use `Object.hasOwn(dog1, "species")` to confirm that it comes from the prototype, not from the object.

## 8) Classes as syntax sugar
Rewrite the `Dog` example as an ES6 class with:
* a `constructor` setting `name`,
* a `bark()` method.

Create a new dog and call `bark()`.

## 9) Inheritance with `extends`
Create a `GuideDog` class that extends `Dog`.
* Add a new method `assist()` that prints `"Guiding my owner safely."`
* Override `bark()` so it prints `"Woof! (guide dog)"`.

Create a `GuideDog` and show that it can do both `bark()` and `assist()`.

## 10) Four pillars quick practice
For each pillar of OOP, give a **short example** (just one line of code or a comment is fine):
* **Encapsulation**: one thing that shows data + behavior bundled.
* **Inheritance**: one thing that shows a child class extending a parent.
* **Abstraction**: a method call where you don’t need to know the inner details.
* **Polymorphism**: two different classes with the same method name but different results.