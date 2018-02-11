const jsStyle = function() {
  let state = {
    body: {},
    nested: [],
  }

  jsStyle.convert = function(propName, value) {
    state.body[propName] = value
  }

  jsStyle.selector = function(selector) {
    state.body.selector = selector
    return this
  }

  jsStyle.render = function () {
    Object.keys(state.body).forEach(function(key) {
      key = (key.indexOf('ext-') != -1) ?
        key.slice(4) :
        key
      key === 'selector' ?
        console.log(`${state.body[key]} {`) :
        console.log(`  ${key}: ${state.body[key]}`);
    });
    console.log('}')
    console.log('')
    state.nested.forEach(nest => {
      Object.keys(nest).forEach(function(key) {
        key === 'selector' ?
          console.log(`${nest[key]} {`) :
          console.log(`  ${key}: ${nest[key]}`)
      });
      console.log('}')
      console.log('')
    })

    return state
  }

  jsStyle.extend = function (arr) {
    Object.keys(arr.body).slice(1).forEach(function(key) {
      state.body[`ext-${key}`] = arr.body[key]
    });
    return this
  }

  jsStyle.nest = function (arr) {
    Object
      .keys(arr.body)
      .map(key => {
        return key === 'selector' ?
          arr.body[key] = `${state.body[key]} ${arr.body[key]}` :
          key
      })

    state.nested.push(arr.body)
    arr.nested.forEach(nest => {
      Object
      .keys(nest)
      .map(key => {
        return key === 'selector' ?
        nest[key] = `${state.body[key]} ${nest[key]}` :
        key
      })
      state.nested.push(nest)
    })
    return this
  }

  jsStyle.use = function () {
    return state
  }

  jsStyle.alignContent = function (value) {
    this.convert('align-content', value)
    return this
  }

  jsStyle.alignItems = function (value) {
    this.convert('align-items', value)
    return this
  }

  jsStyle.alignSelf = function (value) {
    this.convert('align-self', value)
    return this
  }

  jsStyle.all = function (value) {
    this.convert('all', value)
    return this
  }

  jsStyle.animation = function (value) {
    this.convert('animation', value)
    return this
  }

  jsStyle.animationDelay = function (value) {
    this.convert('animation-delay', value)
    return this
  }

  jsStyle.animationDirection = function (value) {
    this.convert('animation-direction', value)
    return this
  }

  jsStyle.animationDuration = function (value) {
    this.convert('animation-duration', value)
    return this
  }

  jsStyle.animationFillMode = function (value) {
    this.convert('animation-fill-mode', value)
    return this
  }

  jsStyle.animationIterationCount = function (value) {
    this.convert('animation-iteration-count', value)
    return this
  }

  jsStyle.animationName = function (value) {
    this.convert('animation-name', value)
    return this
  }

  jsStyle.animationPlayState = function (value) {
    this.convert('animation-play-state', value)
    return this
  }

  jsStyle.animationTimingFunction = function (value) {
    this.convert('animation-timing-function', value)
    return this
  }

  jsStyle.backfaceVisibility = function (value) {
    this.convert('backface-visibility', value)
    return this
  }

  jsStyle.background = function (value) {
    this.convert('background', value)
    return this
  }

  jsStyle.backgroundAttachment = function (value) {
    this.convert('background-attachment', value)
    return this
  }

  jsStyle.backgroundBlendMode = function (value) {
    this.convert('background-blend-mode', value)
    return this
  }

  jsStyle.backgroundClip = function (value) {
    this.convert('background-clip', value)
    return this
  }

  jsStyle.backgroundColor = function (value) {
    this.convert('background-color', value)
    return this
  }

  jsStyle.backgroundImage = function (value) {
    this.convert('background-image', value)
    return this
  }

  jsStyle.backgroundOrigin = function (value) {
    this.convert('background-origin', value)
    return this
  }

  jsStyle.backgroundPosition = function (value) {
    this.convert('background-position', value)
    return this
  }

  jsStyle.backgroundRepeat = function (value) {
    this.convert('background-repeat', value)
    return this
  }

  jsStyle.backgroundSize = function (value) {
    this.convert('background-size', value)
    return this
  }

  jsStyle.border = function (value) {
    this.convert('border', value)
    return this
  }

  jsStyle.borderBottom = function (value) {
    this.convert('border-bottom', value)
    return this
  }

  jsStyle.borderBottomColor = function (value) {
    this.convert('border-bottom-color', value)
    return this
  }

  jsStyle.borderBottomLeftRadius = function (value) {
    this.convert('border-bottom-left-radius', value)
    return this
  }

  jsStyle.borderBottomRightRadius = function (value) {
    this.convert('border-bottom-right-radius', value)
    return this
  }

  jsStyle.borderBottomStyle = function (value) {
    this.convert('border-bottom-style', value)
    return this
  }

  jsStyle.borderBottomWidth = function (value) {
    this.convert('border-bottom-width', value)
    return this
  }

  jsStyle.borderCollapse = function (value) {
    this.convert('border-collapse', value)
    return this
  }

  jsStyle.borderColor = function (value) {
    this.convert('border-color', value)
    return this
  }

  jsStyle.borderImage = function (value) {
    this.convert('border-image', value)
    return this
  }

  jsStyle.borderImageOutset = function (value) {
    this.convert('border-image-outset', value)
    return this
  }

  jsStyle.borderImageRepeat = function (value) {
    this.convert('border-image-repeat', value)
    return this
  }

  jsStyle.borderImageSlice = function (value) {
    this.convert('border-image-slice', value)
    return this
  }

  jsStyle.borderImageSource = function (value) {
    this.convert('border-image-source', value)
    return this
  }

  jsStyle.borderImageWidth = function (value) {
    this.convert('border-image-width', value)
    return this
  }

  jsStyle.borderLeft = function (value) {
    this.convert('border-left', value)
    return this
  }

  jsStyle.borderLeftColor = function (value) {
    this.convert('border-left-color', value)
    return this
  }

  jsStyle.borderLeftStyle = function (value) {
    this.convert('border-left-style', value)
    return this
  }

  jsStyle.borderLeftWidth = function (value) {
    this.convert('border-left-width', value)
    return this
  }

  jsStyle.borderRadius = function (value) {
    this.convert('border-radius', value)
    return this
  }

  jsStyle.borderRight = function (value) {
    this.convert('border-right', value)
    return this
  }

  jsStyle.borderRightColor = function (value) {
    this.convert('border-right-color', value)
    return this
  }

  jsStyle.borderRightStyle = function (value) {
    this.convert('border-right-style', value)
    return this
  }

  jsStyle.borderRightWidth = function (value) {
    this.convert('border-right-width', value)
    return this
  }

  jsStyle.borderSpacing = function (value) {
    this.convert('border-spacing', value)
    return this
  }

  jsStyle.borderStyle = function (value) {
    this.convert('border-style', value)
    return this
  }

  jsStyle.borderTop = function (value) {
    this.convert('border-top', value)
    return this
  }

  jsStyle.borderTopColor = function (value) {
    this.convert('border-top-color', value)
    return this
  }

  jsStyle.borderTopLeftRadius = function (value) {
    this.convert('border-top-left-radius', value)
    return this
  }

  jsStyle.borderTopRightRadius = function (value) {
    this.convert('border-top-right-radius', value)
    return this
  }

  jsStyle.borderTopStyle = function (value) {
    this.convert('border-top-style', value)
    return this
  }

  jsStyle.borderTopWidth = function (value) {
    this.convert('border-top-width', value)
    return this
  }

  jsStyle.borderWidth = function (value) {
    this.convert('border-width', value)
    return this
  }

  jsStyle.bottom = function (value) {
    this.convert('bottom', value)
    return this
  }

  jsStyle.boxDecorationBreak = function (value) {
    this.convert('box-decoration-break', value)
    return this
  }

  jsStyle.boxShadow = function (value) {
    this.convert('box-shadow', value)
    return this
  }

  jsStyle.boxSizing = function (value) {
    this.convert('box-sizing', value)
    return this
  }

  jsStyle.captionSide = function (value) {
    this.convert('caption-side', value)
    return this
  }

  jsStyle.caretColor = function (value) {
    this.convert('caret-color', value)
    return this
  }

  jsStyle.charset = function (value) {
    this.convert('charset', value)
    return this
  }

  jsStyle.clear = function (value) {
    this.convert('clear', value)
    return this
  }

  jsStyle.clip = function (value) {
    this.convert('clip', value)
    return this
  }

  jsStyle.color = function (value) {
    this.convert('color', value)
    return this
  }

  jsStyle.columnCount = function (value) {
    this.convert('column-count', value)
    return this
  }

  jsStyle.columnFill = function (value) {
    this.convert('column-fill', value)
    return this
  }

  jsStyle.columnGap = function (value) {
    this.convert('column-gap', value)
    return this
  }

  jsStyle.columnRule = function (value) {
    this.convert('column-rule', value)
    return this
  }

  jsStyle.columnRuleColor = function (value) {
    this.convert('column-rule-color', value)
    return this
  }

  jsStyle.columnRuleStyle = function (value) {
    this.convert('column-rule-style', value)
    return this
  }

  jsStyle.columnRuleWidth = function (value) {
    this.convert('column-rule-width', value)
    return this
  }

  jsStyle.columnSpan = function (value) {
    this.convert('column-span', value)
    return this
  }

  jsStyle.columnWidth = function (value) {
    this.convert('column-width', value)
    return this
  }

  jsStyle.columns = function (value) {
    this.convert('columns', value)
    return this
  }

  jsStyle.content = function (value) {
    this.convert('content', value)
    return this
  }

  jsStyle.counterIncrement = function (value) {
    this.convert('counter-increment', value)
    return this
  }

  jsStyle.counterReset = function (value) {
    this.convert('counter-reset', value)
    return this
  }

  jsStyle.cursor = function (value) {
    this.convert('cursor', value)
    return this
  }

  jsStyle.direction = function (value) {
    this.convert('direction', value)
    return this
  }

  jsStyle.display = function (value) {
    this.convert('display', value)
    return this
  }

  jsStyle.emptyCells = function (value) {
    this.convert('empty-cells', value)
    return this
  }

  jsStyle.filter = function (value) {
    this.convert('filter', value)
    return this
  }

  jsStyle.flex = function (value) {
    this.convert('flex', value)
    return this
  }

  jsStyle.flexBasis = function (value) {
    this.convert('flex-basis', value)
    return this
  }

  jsStyle.flexDirection = function (value) {
    this.convert('flex-direction', value)
    return this
  }

  jsStyle.flexFlow = function (value) {
    this.convert('flex-flow', value)
    return this
  }

  jsStyle.flexGrow = function (value) {
    this.convert('flex-grow', value)
    return this
  }

  jsStyle.flexShrink = function (value) {
    this.convert('flex-shrink', value)
    return this
  }

  jsStyle.flexWrap = function (value) {
    this.convert('flex-wrap', value)
    return this
  }

  jsStyle.float = function (value) {
    this.convert('float', value)
    return this
  }

  jsStyle.font = function (value) {
    this.convert('font', value)
    return this
  }

  jsStyle.fontFace = function (value) {
    this.convert('font-face', value)
    return this
  }

  jsStyle.fontFamily = function (value) {
    this.convert('font-family', value)
    return this
  }

  jsStyle.fontKerning = function (value) {
    this.convert('font-kerning', value)
    return this
  }

  jsStyle.fontSize = function (value) {
    this.convert('font-size', value)
    return this
  }

  jsStyle.fontSizeAdjust = function (value) {
    this.convert('font-size-adjust', value)
    return this
  }

  jsStyle.fontStretch = function (value) {
    this.convert('font-stretch', value)
    return this
  }

  jsStyle.fontStyle = function (value) {
    this.convert('font-style', value)
    return this
  }

  jsStyle.fontVariant = function (value) {
    this.convert('font-variant', value)
    return this
  }

  jsStyle.fontWeight = function (value) {
    this.convert('font-weight', value)
    return this
  }

  jsStyle.grid = function (value) {
    this.convert('grid', value)
    return this
  }

  jsStyle.gridArea = function (value) {
    this.convert('grid-area', value)
    return this
  }

  jsStyle.gridAutoColumns = function (value) {
    this.convert('grid-auto-columns', value)
    return this
  }

  jsStyle.gridAutoFlow = function (value) {
    this.convert('grid-auto-flow', value)
    return this
  }

  jsStyle.gridAutoRows = function (value) {
    this.convert('grid-auto-rows', value)
    return this
  }

  jsStyle.gridColumn = function (value) {
    this.convert('grid-column', value)
    return this
  }

  jsStyle.gridColumnEnd = function (value) {
    this.convert('grid-column-end', value)
    return this
  }

  jsStyle.gridColumnGap = function (value) {
    this.convert('grid-column-gap', value)
    return this
  }

  jsStyle.gridColumnStart = function (value) {
    this.convert('grid-column-start', value)
    return this
  }

  jsStyle.gridGap = function (value) {
    this.convert('grid-gap', value)
    return this
  }

  jsStyle.gridRow = function (value) {
    this.convert('grid-row', value)
    return this
  }

  jsStyle.gridRowEnd = function (value) {
    this.convert('grid-row-end', value)
    return this
  }

  jsStyle.gridRowGap = function (value) {
    this.convert('grid-row-gap', value)
    return this
  }

  jsStyle.gridRowStart = function (value) {
    this.convert('grid-row-start', value)
    return this
  }

  jsStyle.gridTemplate = function (value) {
    this.convert('grid-template', value)
    return this
  }

  jsStyle.gridTemplateAreas = function (value) {
    this.convert('grid-template-areas', value)
    return this
  }

  jsStyle.gridTemplateColumns = function (value) {
    this.convert('grid-template-columns', value)
    return this
  }

  jsStyle.gridTemplateRows = function (value) {
    this.convert('grid-template-rows', value)
    return this
  }

  jsStyle.hangingPunctuation = function (value) {
    this.convert('hanging-punctuation', value)
    return this
  }

  jsStyle.height = function (value) {
    this.convert('height', value)
    return this
  }

  jsStyle.justifyContent = function (value) {
    this.convert('justify-content', value)
    return this
  }

  jsStyle.left = function (value) {
    this.convert('left', value)
    return this
  }

  jsStyle.letterSpacing = function (value) {
    this.convert('letter-spacing', value)
    return this
  }

  jsStyle.lineHeight = function (value) {
    this.convert('line-height', value)
    return this
  }

  jsStyle.listStyle = function (value) {
    this.convert('list-style', value)
    return this
  }

  jsStyle.listStyleImage = function (value) {
    this.convert('list-style-image', value)
    return this
  }

  jsStyle.listStylePosition = function (value) {
    this.convert('list-style-position', value)
    return this
  }

  jsStyle.listStyleType = function (value) {
    this.convert('list-style-type', value)
    return this
  }

  jsStyle.margin = function (value) {
    this.convert('margin', value)
    return this
  }

  jsStyle.marginBottom = function (value) {
    this.convert('margin-bottom', value)
    return this
  }

  jsStyle.marginLeft = function (value) {
    this.convert('margin-left', value)
    return this
  }

  jsStyle.marginRight = function (value) {
    this.convert('margin-right', value)
    return this
  }

  jsStyle.marginTop = function (value) {
    this.convert('margin-top', value)
    return this
  }

  jsStyle.maxHeight = function (value) {
    this.convert('max-height', value)
    return this
  }

  jsStyle.maxWidth = function (value) {
    this.convert('max-width', value)
    return this
  }

  jsStyle.media = function (value) {
    this.convert('media', value)
    return this
  }

  jsStyle.minHeight = function (value) {
    this.convert('min-height', value)
    return this
  }

  jsStyle.minWidth = function (value) {
    this.convert('min-width', value)
    return this
  }

  jsStyle.objectFit = function (value) {
    this.convert('object-fit', value)
    return this
  }

  jsStyle.opacity = function (value) {
    this.convert('opacity', value)
    return this
  }

  jsStyle.order = function (value) {
    this.convert('order', value)
    return this
  }

  jsStyle.outline = function (value) {
    this.convert('outline', value)
    return this
  }

  jsStyle.outlineColor = function (value) {
    this.convert('outline-color', value)
    return this
  }

  jsStyle.outlineOffset = function (value) {
    this.convert('outline-offset', value)
    return this
  }

  jsStyle.outlineStyle = function (value) {
    this.convert('outline-style', value)
    return this
  }

  jsStyle.outlineWidth = function (value) {
    this.convert('outline-width', value)
    return this
  }

  jsStyle.overflow = function (value) {
    this.convert('overflow', value)
    return this
  }

  jsStyle.overflowX = function (value) {
    this.convert('overflow-x', value)
    return this
  }

  jsStyle.overflowY = function (value) {
    this.convert('overflow-y', value)
    return this
  }

  jsStyle.padding = function (value) {
    this.convert('padding', value)
    return this
  }

  jsStyle.paddingBottom = function (value) {
    this.convert('padding-bottom', value)
    return this
  }

  jsStyle.paddingLeft = function (value) {
    this.convert('padding-left', value)
    return this
  }

  jsStyle.paddingRight = function (value) {
    this.convert('padding-right', value)
    return this
  }

  jsStyle.paddingTop = function (value) {
    this.convert('padding-top', value)
    return this
  }

  jsStyle.pageBreakAfter = function (value) {
    this.convert('page-break-after', value)
    return this
  }

  jsStyle.pageBreakBefore = function (value) {
    this.convert('page-break-before', value)
    return this
  }

  jsStyle.pageBreakInside = function (value) {
    this.convert('page-break-inside', value)
    return this
  }

  jsStyle.perspective = function (value) {
    this.convert('perspective', value)
    return this
  }

  jsStyle.perspectiveOrigin = function (value) {
    this.convert('perspective-origin', value)
    return this
  }

  jsStyle.position = function (value) {
    this.convert('position', value)
    return this
  }

  jsStyle.quotes = function (value) {
    this.convert('quotes', value)
    return this
  }

  jsStyle.resize = function (value) {
    this.convert('resize', value)
    return this
  }

  jsStyle.right = function (value) {
    this.convert('right', value)
    return this
  }

  jsStyle.tabSize = function (value) {
    this.convert('tab-size', value)
    return this
  }

  jsStyle.tableLayout = function (value) {
    this.convert('table-layout', value)
    return this
  }

  jsStyle.textAlign = function (value) {
    this.convert('text-align', value)
    return this
  }

  jsStyle.textAlignLast = function (value) {
    this.convert('text-align-last', value)
    return this
  }

  jsStyle.textDecoration = function (value) {
    this.convert('text-decoration', value)
    return this
  }

  jsStyle.textDecorationColor = function (value) {
    this.convert('text-decoration-color', value)
    return this
  }

  jsStyle.textDecorationLine = function (value) {
    this.convert('text-decoration-line', value)
    return this
  }

  jsStyle.textDecorationStyle = function (value) {
    this.convert('text-decoration-style', value)
    return this
  }

  jsStyle.textIndent = function (value) {
    this.convert('text-indent', value)
    return this
  }

  jsStyle.textJustify = function (value) {
    this.convert('text-justify', value)
    return this
  }

  jsStyle.textOverflow = function (value) {
    this.convert('text-overflow', value)
    return this
  }

  jsStyle.textShadow = function (value) {
    this.convert('text-shadow', value)
    return this
  }

  jsStyle.textTransform = function (value) {
    this.convert('text-transform', value)
    return this
  }

  jsStyle.top = function (value) {
    this.convert('top', value)
    return this
  }

  jsStyle.transform = function (value) {
    this.convert('transform', value)
    return this
  }

  jsStyle.transformOrigin = function (value) {
    this.convert('transform-origin', value)
    return this
  }

  jsStyle.transformStyle = function (value) {
    this.convert('transform-style', value)
    return this
  }

  jsStyle.transition = function (value) {
    this.convert('transition', value)
    return this
  }

  jsStyle.transitionDelay = function (value) {
    this.convert('transition-delay', value)
    return this
  }

  jsStyle.transitionDuration = function (value) {
    this.convert('transition-duration', value)
    return this
  }

  jsStyle.transitionProperty = function (value) {
    this.convert('transition-property', value)
    return this
  }

  jsStyle.transitionTimingFunction = function (value) {
    this.convert('transition-timing-function', value)
    return this
  }

  jsStyle.unicodeBidi = function (value) {
    this.convert('unicode-bidi', value)
    return this
  }

  jsStyle.userSelect = function (value) {
    this.convert('user-select', value)
    return this
  }

  jsStyle.verticalAlign = function (value) {
    this.convert('vertical-align', value)
    return this
  }

  jsStyle.visibility = function (value) {
    this.convert('visibility', value)
    return this
  }

  jsStyle.whiteSpace = function (value) {
    this.convert('white-space', value)
    return this
  }

  jsStyle.width = function (value) {
    this.convert('width', value)
    return this
  }

  jsStyle.wordBreak = function (value) {
    this.convert('word-break', value)
    return this
  }

  jsStyle.wordSpacing = function (value) {
    this.convert('word-spacing', value)
    return this
  }

  jsStyle.wordWrap = function (value) {
    this.convert('word-wrap', value)
    return this
  }

  jsStyle.zIndex = function (value) {
    this.convert('z-index', value)
    return this
  }

return jsStyle
}

module.exports = jsStyle
