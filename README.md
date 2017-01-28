# bukk 🐐

> A functional library for Norwegians.

[![dependencies](https://david-dm.org/christianhg/bukk.svg)](https://david-dm.org/christianhg/bukk)
[![npm module](https://badge.fury.io/js/bukk.svg)](https://www.npmjs.org/package/bukk)
[![Build Status](https://travis-ci.org/christianhg/bukk.svg?branch=master)](https://travis-ci.org/christianhg/bukk)
[![Coverage Status](https://coveralls.io/repos/github/christianhg/bukk/badge.svg?branch=master)](https://coveralls.io/github/christianhg/bukk?branch=master)

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

## Examples

```js
const incList = B.map(B.inc)

incList([1, 2, 3])
// => [2, 3, 4]

const isFoo = B.equals('foo')
const allIsFoo = B.all(isFoo)

allIsFoo({x: 'foo', y: 'foo', z: 'foo'})
// => true
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
