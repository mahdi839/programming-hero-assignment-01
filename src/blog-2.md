How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?


---
Generics allow you to create reusable code while still preserving strict type safety

The Problem Without Generics
-------------------

Imagine if we want to create a function that returns whatever value is passed into it.

Without generics, we might write:

function identity(value: any): any {
  return value;
}

on this no type safety. that's why we can write like this :

const result = identity("Hello");

result.toFixed(2);

typescript won't show any type error. 

generics solved the problem 

Now look at the generic version:

function identity<T>(value: T): T {
  return value;
}

Usage:

const result = identity("Hello");

Now TypeScript automatically understands:

result is string

So this becomes an error:

result.toFixed(2);

Because toFixed() exists only on numbers.

This is the power of generics.

