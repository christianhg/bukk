# bukk 🐐

> Functional programming for Norwegians ⛷️

[![npm module](https://badge.fury.io/js/bukk.svg)](https://www.npmjs.org/package/bukk)
[![Coverage Status](https://coveralls.io/repos/github/christianhg/bukk/badge.svg?branch=master)](https://coveralls.io/github/christianhg/bukk?branch=master)
[![Build Status](https://travis-ci.org/christianhg/bukk.svg?branch=master)](https://travis-ci.org/christianhg/bukk)
[![Dependencies](https://david-dm.org/christianhg/bukk.svg)](https://david-dm.org/christianhg/bukk)
[![devDependencies Status](https://david-dm.org/christianhg/bukk/dev-status.svg)](https://david-dm.org/christianhg/bukk?type=dev)

- [Why?](#why)
- [Goals and philosophies](#goals-and-philosophies)
- [Examples](#examples)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- ["Bukk"?](#bukk)
- [API](#api)

## Why?

Not exactly. Well, not only for Norwegians. Inspired by [Ramda](https://github.com/ramda/ramda), this an automatically curried, data-last, functional JavaScript library.

## Goals and philosophies

- **Declarative code**<br>
*Much favored over "smart" code. As an example it is preferred to use existing higher-order functions like `Array.prototype.every()` instead of reimplementing similar logic using loops.*

- **Predictable behaviors**<br>
*`B.map(B.inc, 1)` should return `2`. Not `[]`, `[undefined]` or `[2]`. Just `2`.*

- **ES6 compliant**<br>
*It is totally fine to do `B.map(B.inc, new Set([1, 2, 3]))`. This will simply return `Set {2, 3, 4}`.*

- **Feature-rich**<br>
*As seen above, `B.map` knows how to handle `Sets`. Similarly, other `B` functions that can operate on Arrays, typically knows how to operate on other data structures as well.*

- **[No dependencies](https://david-dm.org/christianhg/bukk)**

- **[Great code coverage](https://coveralls.io/github/christianhg/bukk)**

## Examples

```js
const incCollection = B.map(B.inc)

incCollection([1, 2, 3])
// => [2, 3, 4]

incCollection(new Set([1, 2, 3]))
// => Set {2, 3, 4}
```

```js
const isFoo = B.equals('foo')
const allIsFoo = B.all(isFoo)

allIsFoo({x: 'foo', y: 'foo', z: 'foo'})
// => true

allIsFoo(['foo', 'bar', 'baz'])
// => false
```

```js
const takeTwo = B.take(2)

takeTwo(new Map([[1, 'a'], [2, 'b'], [3, 'c']]))
// => Map { 1 => 'a', 2 => 'b' }

takeTwo('foobar')
// => 'fo'
```

```js
const double = B.multiply(2)
const addFive = B.add(5)
const incDoubleAndAddFive = B.compose(addFive, double, B.inc)

incDoubleAndAddFive(1)
// => 9
```

```js
const sqrtOfProduct = B.pipe(B.multiply, Math.sqrt)

sqrtOfProduct(3, 12)
// => 6
```

```js
const multiplyThree = (a, b, c) => a * b * c
const multiplyThreeCurried = B.curry(multiplyThree)

multiplyThreeCurried(2)
// => Function

multiplyThreeCurried(2)(3)
multiplyThreeCurried(2, 3)
// => Function

multiplyThreeCurried(2)(3)(4)
multiplyThreeCurried(2, 3)(4)
multiplyThreeCurried(2)(3, 4)
// => 24
```

## Installation

Install using `yarn`:

```bash
yarn add bukk
```

Or `npm`:

```bash
npm install --save bukk
```

## Usage

Import module:

```js
const B = require('bukk')
```

Or add the `B` variable to global scope:

```html
<script src="nodule_modules/bukk/dist/bukk.js"></script>
```

## Development

Install dependencies:

```bash
yarn install
```

Build:

```bash
yarn run build
```

Will lint the source code, run tests and generate code coverage, and build a minified version of the library.

### Running tests

Test once:

```bash
yarn run test
```

Test in watch mode:

```bash
yarn run watch:test
```

## "Bukk"?

"Bukk" means "ram" in Norwegian :)

## API

### `B.add`

`Number --> Number --> Number`

---

### `B.all`

`(* --> Boolean) --> Array | Map | Object | Set | String --> Boolean`

---

### `B.and`

`a --> b --> a | b`

---

### `B.any`

`(* --> Boolean) --> Array | Map | Object | Set | String --> Boolean`

---

### `B.append`

`* --> Array | Map | Set | String --> Array | Map | Set | String`

---

### `B.both`

`(*... --> b) --> (*... --> d) --> b | d`

---

### `B.compose`

`Function... --> Function`

---

### `B.concat`

`Array | Map | Set | String --> Array | Map | Set | String --> Array | Map | Set | String`

---

### `B.curry`

`Function --> Function`

---

### `B.dec`

`Number --> Number`

---

### `B.divide`

`Number --> Number --> Number`

---

### `B.either`

`(*... --> b) --> (*... --> d) --> b | d`

---

### `B.equals`

`* --> * --> Boolean`

---

### `B.filter`

`Array | Map | Object | Set | String --> (* --> Boolean) --> Array | Map | Object | Set | String`

---

### `B.find`

`(* --> Boolean) --> Array | Map | Object | Set | String --> *`

---

### `B.flatten`

`Array --> Array`

---

### `B.gt`

`Number --> Number --> Boolean`

---

### `B.gte`

`Number --> Number --> Boolean`

---

### `B.head`

`Array | Map | Set | String --> *`

---

### `B.inc`

`Number --> Number`

---

### `B.init`

`Array | Map | Set | String --> Array | Map | Set | String`

---

### `B.kind`

`* --> String`

---

### `B.last`

`Array | Map | Set | String --> *`

---

### `B.lt`

`Number --> Number --> Boolean`

---

### `B.lte`

`Number --> Number --> Boolean`

---

### `B.map`

`Function --> * --> *`

---

### `B.max`

`Number --> Number --> Number`

---

### `B.min`

`Number --> Number --> Number`

---

### `B.multiply`

`Number --> Number --> Number`

---

### `B.none`

`(* --> Boolean) --> Array | Map | Object | Set | String --> Boolean`

---

### `B.or`

`a --> b --> a | b`

---

### `B.pipe`

`Function... --> Function`

---

### `B.prepend`

`* --> Array | Map | Set | String --> Array | Map | Set | String`

---

### `B.prop`

`String --> Object --> *`

---

### `B.range`

`Number --> Number --> Array`

---

### `B.reduce`

`(a --> b --> a) --> a --> Array | Map | Object | Set | String --> a`

---

### `B.reject`

`(* --> Boolean) --> Array | Map | Object | Set | String --> Array | Map | Object | Set | String`

---

### `B.slice`

`Number --> Number --> Array | Map | Set | String --> Array | Map | Set | String`

---

### `B.subtract`

`Number --> Number --> Number`

---

### `B.tail`

Array | Map | Set | String --> Array | Map | Set | String`

---

### `B.take`

`Number --> Array | Map | Set | String --> Array | Map | Set | String`

---

### `B.trim`

`String --> String`

---

### `B.type`

`* --> String`

---

### `B.zip`

`Array --> Array --> Array`
