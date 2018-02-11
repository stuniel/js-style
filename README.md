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

After declaring all the properties you have to use `.render()` method to render the output.

A simple example will look like this

```js
const table = js_style()
  .selector('.table')
  .position('relative')
  .color('#3e3e3e')
  .backgroundColor('#ffffff')
  .render()
```

and will result in

```css
table {
  position: relative;
  color: #3e3e3e;
  background-color: #ffffff;
}
```


### Use

If you want to use a variable add method `.use()` at the end.


### Extend

js-styles provides `.extend()` method that lets you share a set of CSS properties from one selector to another.

This code

```js
const basicTable = js_style()
  .selector('.table')
  .position('relative')
  .color('#3e3e3e')
  .backgroundColor('#ffffff')
  .use()

const bigTable = js_style()
  .selector('.table--big')
  .extend(basicTable)
  .width('100%')
  .height('100%')
  .render()
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


### Nest

js-style provides `.nest()` method that let's you nest CSS selectors.

This code

```js
const js_style = require('./src/index.js')

const defaultPosition = 'relative';

const basicCell = js_style()
  .selector('.cell')
  .position(defaultPosition)
  .color('#444444')
  .backgroundColor('#ffffff')
  .use()

const basicTable = js_style()
  .selector('.table')
  .nest(basicCell)
  .position(defaultPosition)
  .color('#3e3e3e')
  .backgroundColor('#ffffff')
  .use()

const basicPage = js_style()
  .selector('div')
  .nest(basicTable)
  .backgroundColor('red')
  .render()
```

will result in

```css
div {
  background-color: red
}

div .table {
  position: relative
  color: #3e3e3e
  background-color: #ffffff
}

div .table .cell {
  position: relative
  color: #444444
  background-color: #ffffff
}
```


### Variables

Use the same color all over the place?
js-style lets you use JavaScript variables to store values that you want to use multiple times.

```js
const primaryColor = '#e3e3e3'

const table = js_style()
  .selector('.table')
  .position('relative')
  .color(primaryColor)
  .backgroundColor('#ffffff')
  .render()
```

As simple as that.

js-style is licensed under the MIT License.
