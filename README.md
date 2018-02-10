# js-style

**js-style is an easy JavaScript based CSS preprocessor**.

## Using

The first step is to clone the repo:

```
git clone https://github.com/stuniel/js-style.git
```

or if you use npm:

```
npm install js-style
```

To use js-style you have to import the module

```
const js_style = require("js-style")
```

or if you are using ES6 syntax.

```
import jsStyle from 'js-style'
```

After you import the module you can assign it to a variable.

```
const table = js_style()
```

Now you are ready to use all the methods that the library provides.

After you write your code in a JavaScript file you can run

```
node file.js > file.css
```

in your terminal to compile it to a CSS file.

## Methods

js-style uses JavaScript methods to create CSS styles.

To declare a selector use `.selector()` method with selector name as an attribute:

```
.selector('body')
```

will result in

```
body {
```

The style names match the CSS names, except names are written using camel casing. So we will write `fontSize` instead of `font-size`.

js-style gives methods for all the style names with values as attributes.

```
.color('#3e3e3e')
```

will result in

```
color: #3e3e3e;
```

After declaring all the properties you have to use `.close()` method to render the output.

A simple example will look like this

```js
const table = js_style()

table
  .selector('.table')
  .position('relative')
  .color('#3e3e3e')
  .backgroundColor('#ffffff')
  .close()
```

and will result in

```css
table {
  position: relative;
  color: #3e3e3e;
  background-color: #ffffff;
}
```

### Extend

js-styles provides `.extend()` method that lets you share a set of CSS properties from one selector to another.

This code

```js
const table = js_style()

const basicTable = table
  .selector('.table')
  .position('relative')
  .color('#3e3e3e')
  .backgroundColor('#ffffff')
  .close()

const bigTable = js_style()

bigTable
  .selector('.table--big')
  .extend(basicTable)
  .width('100%')
  .height('100%')
  .close()
```

will result in

```css
.table {
  position: relative;
  color: #3e3e3e;
  background-color: #ffffff;
}

.table--big {
  position: relative;
  color: #3e3e3e;
  background-color: #ffffff;
  width: 100%;
  height: 100%;
}

```

### Variables

Use the same color all over the place?
js-style lets you use JavaScript variables to store values that you want to use multiple times.

```js
const primaryColor = '#e3e3e3'

const table = js_style()

table
  .selector('.table')
  .position('relative')
  .color(primaryColor)
  .backgroundColor('#ffffff')
  .close()
```

As simple as that.

js-style is licensed under the MIT License.
