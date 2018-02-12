const js_style = require('./src/index.js')

const defaultPosition = 'relative';

const basicCell = js_style()
  .selector('.cell')
  .position(defaultPosition)
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
