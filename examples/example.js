const js_style = require('.././src/index.js')

const defaultPosition = 'relative';

const basicCell = js_style()
  .selector('.cell')
  .position(defaultPosition)
  .add({'font-size': '16px'})
  .color('#444444')
  .backgroundColor('#ffffff')
  .webkitAnimationDelay('3s')
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

/* ------------------------------------------------------------------------------------------------*/

  let media
const sizes = {
  l: '64em',
  m: '48em',
  s: '24em',
}

const mediaSelector = (size) => {
  return `@media only screen and (max-width: ${size})`
}

const colSelector = (size, number) => {
  return `col-${size}-${number}`
}

const colWidth = (number) => {
  return `calc(${number}/12 * 100%)`
}

Object
  .keys(sizes)
  .forEach(size => {
    let column, columns = []
    for (let i = 0; i < 12; i++) {
      column = js_style()
      .selector(colSelector(size, i+1))
      .add({
        'flex-basis': colWidth(i+1),
        'max-width': colWidth(i+1),
      })
      .use()
      columns.push(column)
    }

    media = js_style()
      .selector(mediaSelector(sizes[size]))
      .include(columns)
      .render()
})

js_style().write([
  {
    input: basicPage,
    output: 'basicPage'
  },
  {
    input: media,
    output: 'media'
  },
])
