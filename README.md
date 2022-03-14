# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ryanak/lotide`

**Require it:**

`const _ = require('@ryanak/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns the element of a given array
* `tail(array)`: returns a new array with the head (first element) removed
* `middle(array)`: returns an array with the middle element(s)
* `countLetters(string)`: returns and object that counts the number of times each character occurs in a string 
* `countOnly(allItems, itemsToCount)`: returns an object that counts the number of times a specific item occurs in the input array
* `findKey(object, callback)`: returns the key of an object based on the callback function
* `findKeyByValue(object, value)`: return the key value of an object based on the input key
* `letterPositions(sentence)`: returns an object with each letter and its index position as key value pairs
* `map(array, callback)`: returns a new array based on the input array and the callback function modification
* `takeUntil(array, callback)`: returns a new array with each element of the given array until the callback function returns true
* `without(source, itemsToRemove)`: returns a new array with the given item removed 