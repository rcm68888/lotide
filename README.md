# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @rcm68888/lotide`

**Require it:**

`const _ = require('@rcm68888/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

➛ assertArraysEqual(actual, expected): determines if arrays are identical

➛ assertEqual(actual, expected): determines if the two items are identical

➛ assertObjectsEqual(actual, expected): determines if the two objects are identical

➛ countLetters(inputString): counts the number of occurences of the same letter in a given string

➛ countOnly(allItems, itemsToCount): counts the number of times the name in an object occurs

➛ eqArrays(actual, expected): checks if two arrays are equal or identical

➛ eqObjects(object1, object2): takes in two objects and returns true if they are a perfect match or false if not

➛ findKey(object, callback): takes an object and a callback function, calls the function to report the first occurence of a key

➛ findKeyByValue(object, value): takes an object and a value and returns the first key which contains the given value

➛ flatten(array): takes in an array and if the array has other arrays, it then removes the nested arrays

➛ head(actual): returns the first item in an array

➛ letterPositions(sentence): takes in a sentence and returns the indices where each letter occurs in the sentence

➛ map(array, callback): takes in an array and a callback function and runs the callback on the item

➛ middle(array): takes in an array and returns the middle element of the input array

➛ tail(actual): takes in an array and returns the last value in the array

➛ takeUntil(array, callback): takes in an array, returns a new array and stops where the callback returns a truthy value

➛ without(array, remove): takes in an array and returns a new array with only those elements from source that are not removed