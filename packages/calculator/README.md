# Dinero.js calculator

The underlying calculator used by Dinero.js to perform calculations.

You can pass a custom calculator to use Dinero.js with different types than numbers.

## Install

```sh
npm install @dinero.js/calculator

# or

yarn add @dinero.js/calculator
```

## Usage

Calculators contain every arithmetic operation that Dinero.js needs in the form of functions.

### Creating a custom calculator

A calculator is bound to a specific type. By default, Dinero.js uses a `number` calculator, but you can create a custom one to use Dinero.js with different types (e.g., `bigint` or an arbitrary precision library).

```js
const bigIntCalculator = {
  add(a, b) {
    // ...
  },
  subtract(a, b) {
    // ...
  },
  // ...
};
```

If you're using TypeScript, you can directly implement the exposed `Calculator` type.

```ts
import { Calculator } from "@dinero.js/calculator";

const bigIntCalculator: Calculator<bigint> = {
  // ...
};
```

## Rounding modes

A calculator contains a `round` method, to which you can pass a rounding mode as a function. Dinero.js provides a number of existing rounding modes for use to use.

```js
import { numberCalculator as calculator, numberRoundDown as round } from "@dinero.js/calculator";

calculator.round(2.5, round);
```

You can also pass whatever method you like.

```js
calculator.round(2.5, Math.ceil);
```

If you're using TypeScript, you can implement the exposed `RoundingMode` type.

```ts
const roundUp: RoundingMode<number> = n => Math.ceil(n);
```
