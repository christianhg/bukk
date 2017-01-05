# bukk

> A functional library for Norwegians.

## Why?

Just kidding. Inspired by [ramda](https://github.com/ramda/ramda), this an automatically curried, data-last, functional JavaScript library.

### How is this better than ramda?

It's not. It exists mainly for the purpose of letting its author get more experienced with functional programming.

### "Bukk"?

"Bukk" means "ram" in Norwegian.

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

### Example

```js
const inc = B.add(1)
const incList = B.map(inc)

incList([1, 2, 3])
// ==> [2, 3, 4]
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
