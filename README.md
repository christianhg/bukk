# bukk 🐐

> A functional library for Norwegians.

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

## Usage

Install using `yarn`:

```
yarn add bukk
```

Or `npm`:

```
npm install --save bukk
```

Import module:

```js
const B = require('bukk')
```

## Development

Install dependencies:

```
yarn install
```

### Running tests

Test once:

```
yarn run test
```

Test in watch mode:

```
yarn run watch:test
```

## "Bukk"?

"Bukk" means "ram" in Norwegian :)
