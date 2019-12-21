# Dinero.js currencies

Pass currency definitions to Dinero objects and benefit from automatic exponent detection and rich formatting options.

## Install

```sh
npm install @dinero.js/currencies

// or

yarn add @dinero.js/currencies
```

## Usage

Currency objects carry everything there is to know about them: name, symbol, exponent, and more. Instead of passing currencies as strings, you can pass a currency definition.

```js
import Dinero from "dinero.js";
import { EUR } from "@dinero.js/currencies";

const d = Dinero({ amount: 100, currency: EUR });
```

### Creating custom currencies

You can create fully custom currencies and pass them to your Dinero objects.

A currency object takes at least a name and an exponent.

```js
const Credit = {
  name: "credit",
  exponent: 2
};
```

The name is useful when formatting a Dinero object into a fully written out form, such as "100 dollars". The exponent expresses the relationship between a major currency unit and its corresponding minor currency unit. For example, a United States dollar is equal to 100 of its minor currency unit, the cent. Therefore, it has exponent 2 (10 to the power 2 is 100, which is the number of cents in a dollar).

**The exponent assumes a decimal system.** If you want to create a currency with no sub-unit, you can set the exponent to 0.

A currency can also take a sign, which is the symbol to display when formatting a Dinero object into a short form, such as "$100".

```js
const Credit = {
  name: "credit",
  sign: "C",
  exponent: 2
};
```

If you're using TypeScript, you can directly implement the exposed `Currency` type.

```ts
const Credit: Currency = {
  // ...
};
```
