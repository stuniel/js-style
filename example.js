const js_style = require("./index.js")

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
