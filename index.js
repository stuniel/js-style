const jsStyle = function() {
  let state = []

  jsStyle.render = function(propName, value) {
    state.push(`  ${propName}: ${value};`)
  }

  jsStyle.selector = function(selector) {
    // Resetting state to an empty array
    state = []
    state.push(`${selector} {`)
    return this
  }

  jsStyle.close = function () {
    state.push('}')
    state.push('')
    state.forEach(line => console.log(line))
    return state
  }

  jsStyle.extend = function (arr) {
    arr.slice(1, -2).forEach(line => state.push(line))
    return this
  }

  jsStyle.alignContent = function (value) {
    this.render('align-content', value)
    return this
  }

  jsStyle.alignItems = function (value) {
    this.render('align-items', value)
    return this
  }

  jsStyle.alignSelf = function (value) {
    this.render('align-self', value)
    return this
  }

  jsStyle.all = function (value) {
    this.render('all', value)
    return this
  }

  jsStyle.animation = function (value) {
    this.render('animation', value)
    return this
  }

  jsStyle.animationDelay = function (value) {
    this.render('animation-delay', value)
    return this
  }

  jsStyle.animationDirection = function (value) {
    this.render('animation-direction', value)
    return this
  }

  jsStyle.animationDuration = function (value) {
    this.render('animation-duration', value)
    return this
  }

  jsStyle.animationFillMode = function (value) {
    this.render('animation-fill-mode', value)
    return this
  }

  jsStyle.animationIterationCount = function (value) {
    this.render('animation-iteration-count', value)
    return this
  }

  jsStyle.animationName = function (value) {
    this.render('animation-name', value)
    return this
  }

  jsStyle.animationPlayState = function (value) {
    this.render('animation-play-state', value)
    return this
  }

  jsStyle.animationTimingFunction = function (value) {
    this.render('animation-timing-function', value)
    return this
  }

  jsStyle.backfaceVisibility = function (value) {
    this.render('backface-visibility', value)
    return this
  }

  jsStyle.background = function (value) {
    this.render('background', value)
    return this
  }

  jsStyle.backgroundAttachment = function (value) {
    this.render('background-attachment', value)
    return this
  }

  jsStyle.backgroundBlendMode = function (value) {
    this.render('background-blend-mode', value)
    return this
  }

  jsStyle.backgroundClip = function (value) {
    this.render('background-clip', value)
    return this
  }

  jsStyle.backgroundColor = function (value) {
    this.render('background-color', value)
    return this
  }

  jsStyle.backgroundImage = function (value) {
    this.render('background-image', value)
    return this
  }

  jsStyle.backgroundOrigin = function (value) {
    this.render('background-origin', value)
    return this
  }

  jsStyle.backgroundPosition = function (value) {
    this.render('background-position', value)
    return this
  }

  jsStyle.backgroundRepeat = function (value) {
    this.render('background-repeat', value)
    return this
  }

  jsStyle.backgroundSize = function (value) {
    this.render('background-size', value)
    return this
  }

  jsStyle.border = function (value) {
    this.render('border', value)
    return this
  }

  jsStyle.borderBottom = function (value) {
    this.render('border-bottom', value)
    return this
  }

  jsStyle.borderBottomColor = function (value) {
    this.render('border-bottom-color', value)
    return this
  }

  jsStyle.borderBottomLeftRadius = function (value) {
    this.render('border-bottom-left-radius', value)
    return this
  }

  jsStyle.borderBottomRightRadius = function (value) {
    this.render('border-bottom-right-radius', value)
    return this
  }

  jsStyle.borderBottomStyle = function (value) {
    this.render('border-bottom-style', value)
    return this
  }

  jsStyle.borderBottomWidth = function (value) {
    this.render('border-bottom-width', value)
    return this
  }

  jsStyle.borderCollapse = function (value) {
    this.render('border-collapse', value)
    return this
  }

  jsStyle.borderColor = function (value) {
    this.render('border-color', value)
    return this
  }

  jsStyle.borderImage = function (value) {
    this.render('border-image', value)
    return this
  }

  jsStyle.borderImageOutset = function (value) {
    this.render('border-image-outset', value)
    return this
  }

  jsStyle.borderImageRepeat = function (value) {
    this.render('border-image-repeat', value)
    return this
  }

  jsStyle.borderImageSlice = function (value) {
    this.render('border-image-slice', value)
    return this
  }

  jsStyle.borderImageSource = function (value) {
    this.render('border-image-source', value)
    return this
  }

  jsStyle.borderImageWidth = function (value) {
    this.render('border-image-width', value)
    return this
  }

  jsStyle.borderLeft = function (value) {
    this.render('border-left', value)
    return this
  }

  jsStyle.borderLeftColor = function (value) {
    this.render('border-left-color', value)
    return this
  }

  jsStyle.borderLeftStyle = function (value) {
    this.render('border-left-style', value)
    return this
  }

  jsStyle.borderLeftWidth = function (value) {
    this.render('border-left-width', value)
    return this
  }

  jsStyle.borderRadius = function (value) {
    this.render('border-radius', value)
    return this
  }

  jsStyle.borderRight = function (value) {
    this.render('border-right', value)
    return this
  }

  jsStyle.borderRightColor = function (value) {
    this.render('border-right-color', value)
    return this
  }

  jsStyle.borderRightStyle = function (value) {
    this.render('border-right-style', value)
    return this
  }

  jsStyle.borderRightWidth = function (value) {
    this.render('border-right-width', value)
    return this
  }

  jsStyle.borderSpacing = function (value) {
    this.render('border-spacing', value)
    return this
  }

  jsStyle.borderStyle = function (value) {
    this.render('border-style', value)
    return this
  }

  jsStyle.borderTop = function (value) {
    this.render('border-top', value)
    return this
  }

  jsStyle.borderTopColor = function (value) {
    this.render('border-top-color', value)
    return this
  }

  jsStyle.borderTopLeftRadius = function (value) {
    this.render('border-top-left-radius', value)
    return this
  }

  jsStyle.borderTopRightRadius = function (value) {
    this.render('border-top-right-radius', value)
    return this
  }

  jsStyle.borderTopStyle = function (value) {
    this.render('border-top-style', value)
    return this
  }

  jsStyle.borderTopWidth = function (value) {
    this.render('border-top-width', value)
    return this
  }

  jsStyle.borderWidth = function (value) {
    this.render('border-width', value)
    return this
  }

  jsStyle.bottom = function (value) {
    this.render('bottom', value)
    return this
  }

  jsStyle.boxDecorationBreak = function (value) {
    this.render('box-decoration-break', value)
    return this
  }

  jsStyle.boxShadow = function (value) {
    this.render('box-shadow', value)
    return this
  }

  jsStyle.boxSizing = function (value) {
    this.render('box-sizing', value)
    return this
  }

  jsStyle.captionSide = function (value) {
    this.render('caption-side', value)
    return this
  }

  jsStyle.caretColor = function (value) {
    this.render('caret-color', value)
    return this
  }

  jsStyle.charset = function (value) {
    this.render('charset', value)
    return this
  }

  jsStyle.clear = function (value) {
    this.render('clear', value)
    return this
  }

  jsStyle.clip = function (value) {
    this.render('clip', value)
    return this
  }

  jsStyle.color = function (value) {
    this.render('color', value)
    return this
  }

  jsStyle.columnCount = function (value) {
    this.render('column-count', value)
    return this
  }

  jsStyle.columnFill = function (value) {
    this.render('column-fill', value)
    return this
  }

  jsStyle.columnGap = function (value) {
    this.render('column-gap', value)
    return this
  }

  jsStyle.columnRule = function (value) {
    this.render('column-rule', value)
    return this
  }

  jsStyle.columnRuleColor = function (value) {
    this.render('column-rule-color', value)
    return this
  }

  jsStyle.columnRuleStyle = function (value) {
    this.render('column-rule-style', value)
    return this
  }

  jsStyle.columnRuleWidth = function (value) {
    this.render('column-rule-width', value)
    return this
  }

  jsStyle.columnSpan = function (value) {
    this.render('column-span', value)
    return this
  }

  jsStyle.columnWidth = function (value) {
    this.render('column-width', value)
    return this
  }

  jsStyle.columns = function (value) {
    this.render('columns', value)
    return this
  }

  jsStyle.content = function (value) {
    this.render('content', value)
    return this
  }

  jsStyle.counterIncrement = function (value) {
    this.render('counter-increment', value)
    return this
  }

  jsStyle.counterReset = function (value) {
    this.render('counter-reset', value)
    return this
  }

  jsStyle.cursor = function (value) {
    this.render('cursor', value)
    return this
  }

  jsStyle.direction = function (value) {
    this.render('direction', value)
    return this
  }

  jsStyle.display = function (value) {
    this.render('display', value)
    return this
  }

  jsStyle.emptyCells = function (value) {
    this.render('empty-cells', value)
    return this
  }

  jsStyle.filter = function (value) {
    this.render('filter', value)
    return this
  }

  jsStyle.flex = function (value) {
    this.render('flex', value)
    return this
  }

  jsStyle.flexBasis = function (value) {
    this.render('flex-basis', value)
    return this
  }

  jsStyle.flexDirection = function (value) {
    this.render('flex-direction', value)
    return this
  }

  jsStyle.flexFlow = function (value) {
    this.render('flex-flow', value)
    return this
  }

  jsStyle.flexGrow = function (value) {
    this.render('flex-grow', value)
    return this
  }

  jsStyle.flexShrink = function (value) {
    this.render('flex-shrink', value)
    return this
  }

  jsStyle.flexWrap = function (value) {
    this.render('flex-wrap', value)
    return this
  }

  jsStyle.float = function (value) {
    this.render('float', value)
    return this
  }

  jsStyle.font = function (value) {
    this.render('font', value)
    return this
  }

  jsStyle.fontFace = function (value) {
    this.render('font-face', value)
    return this
  }

  jsStyle.fontFamily = function (value) {
    this.render('font-family', value)
    return this
  }

  jsStyle.fontKerning = function (value) {
    this.render('font-kerning', value)
    return this
  }

  jsStyle.fontSize = function (value) {
    this.render('font-size', value)
    return this
  }

  jsStyle.fontSizeAdjust = function (value) {
    this.render('font-size-adjust', value)
    return this
  }

  jsStyle.fontStretch = function (value) {
    this.render('font-stretch', value)
    return this
  }

  jsStyle.fontStyle = function (value) {
    this.render('font-style', value)
    return this
  }

  jsStyle.fontVariant = function (value) {
    this.render('font-variant', value)
    return this
  }

  jsStyle.fontWeight = function (value) {
    this.render('font-weight', value)
    return this
  }

  jsStyle.grid = function (value) {
    this.render('grid', value)
    return this
  }

  jsStyle.gridArea = function (value) {
    this.render('grid-area', value)
    return this
  }

  jsStyle.gridAutoColumns = function (value) {
    this.render('grid-auto-columns', value)
    return this
  }

  jsStyle.gridAutoFlow = function (value) {
    this.render('grid-auto-flow', value)
    return this
  }

  jsStyle.gridAutoRows = function (value) {
    this.render('grid-auto-rows', value)
    return this
  }

  jsStyle.gridColumn = function (value) {
    this.render('grid-column', value)
    return this
  }

  jsStyle.gridColumnEnd = function (value) {
    this.render('grid-column-end', value)
    return this
  }

  jsStyle.gridColumnGap = function (value) {
    this.render('grid-column-gap', value)
    return this
  }

  jsStyle.gridColumnStart = function (value) {
    this.render('grid-column-start', value)
    return this
  }

  jsStyle.gridGap = function (value) {
    this.render('grid-gap', value)
    return this
  }

  jsStyle.gridRow = function (value) {
    this.render('grid-row', value)
    return this
  }

  jsStyle.gridRowEnd = function (value) {
    this.render('grid-row-end', value)
    return this
  }

  jsStyle.gridRowGap = function (value) {
    this.render('grid-row-gap', value)
    return this
  }

  jsStyle.gridRowStart = function (value) {
    this.render('grid-row-start', value)
    return this
  }

  jsStyle.gridTemplate = function (value) {
    this.render('grid-template', value)
    return this
  }

  jsStyle.gridTemplateAreas = function (value) {
    this.render('grid-template-areas', value)
    return this
  }

  jsStyle.gridTemplateColumns = function (value) {
    this.render('grid-template-columns', value)
    return this
  }

  jsStyle.gridTemplateRows = function (value) {
    this.render('grid-template-rows', value)
    return this
  }

  jsStyle.hangingPunctuation = function (value) {
    this.render('hanging-punctuation', value)
    return this
  }

  jsStyle.height = function (value) {
    this.render('height', value)
    return this
  }

  jsStyle.justifyContent = function (value) {
    this.render('justify-content', value)
    return this
  }

  jsStyle.left = function (value) {
    this.render('left', value)
    return this
  }

  jsStyle.letterSpacing = function (value) {
    this.render('letter-spacing', value)
    return this
  }

  jsStyle.lineHeight = function (value) {
    this.render('line-height', value)
    return this
  }

  jsStyle.listStyle = function (value) {
    this.render('list-style', value)
    return this
  }

  jsStyle.listStyleImage = function (value) {
    this.render('list-style-image', value)
    return this
  }

  jsStyle.listStylePosition = function (value) {
    this.render('list-style-position', value)
    return this
  }

  jsStyle.listStyleType = function (value) {
    this.render('list-style-type', value)
    return this
  }

  jsStyle.margin = function (value) {
    this.render('margin', value)
    return this
  }

  jsStyle.marginBottom = function (value) {
    this.render('margin-bottom', value)
    return this
  }

  jsStyle.marginLeft = function (value) {
    this.render('margin-left', value)
    return this
  }

  jsStyle.marginRight = function (value) {
    this.render('margin-right', value)
    return this
  }

  jsStyle.marginTop = function (value) {
    this.render('margin-top', value)
    return this
  }

  jsStyle.maxHeight = function (value) {
    this.render('max-height', value)
    return this
  }

  jsStyle.maxWidth = function (value) {
    this.render('max-width', value)
    return this
  }

  jsStyle.media = function (value) {
    this.render('media', value)
    return this
  }

  jsStyle.minHeight = function (value) {
    this.render('min-height', value)
    return this
  }

  jsStyle.minWidth = function (value) {
    this.render('min-width', value)
    return this
  }

  jsStyle.objectFit = function (value) {
    this.render('object-fit', value)
    return this
  }

  jsStyle.opacity = function (value) {
    this.render('opacity', value)
    return this
  }

  jsStyle.order = function (value) {
    this.render('order', value)
    return this
  }

  jsStyle.outline = function (value) {
    this.render('outline', value)
    return this
  }

  jsStyle.outlineColor = function (value) {
    this.render('outline-color', value)
    return this
  }

  jsStyle.outlineOffset = function (value) {
    this.render('outline-offset', value)
    return this
  }

  jsStyle.outlineStyle = function (value) {
    this.render('outline-style', value)
    return this
  }

  jsStyle.outlineWidth = function (value) {
    this.render('outline-width', value)
    return this
  }

  jsStyle.overflow = function (value) {
    this.render('overflow', value)
    return this
  }

  jsStyle.overflowX = function (value) {
    this.render('overflow-x', value)
    return this
  }

  jsStyle.overflowY = function (value) {
    this.render('overflow-y', value)
    return this
  }

  jsStyle.padding = function (value) {
    this.render('padding', value)
    return this
  }

  jsStyle.paddingBottom = function (value) {
    this.render('padding-bottom', value)
    return this
  }

  jsStyle.paddingLeft = function (value) {
    this.render('padding-left', value)
    return this
  }

  jsStyle.paddingRight = function (value) {
    this.render('padding-right', value)
    return this
  }

  jsStyle.paddingTop = function (value) {
    this.render('padding-top', value)
    return this
  }

  jsStyle.pageBreakAfter = function (value) {
    this.render('page-break-after', value)
    return this
  }

  jsStyle.pageBreakBefore = function (value) {
    this.render('page-break-before', value)
    return this
  }

  jsStyle.pageBreakInside = function (value) {
    this.render('page-break-inside', value)
    return this
  }

  jsStyle.perspective = function (value) {
    this.render('perspective', value)
    return this
  }

  jsStyle.perspectiveOrigin = function (value) {
    this.render('perspective-origin', value)
    return this
  }

  jsStyle.position = function (value) {
    this.render('position', value)
    return this
  }

  jsStyle.quotes = function (value) {
    this.render('quotes', value)
    return this
  }

  jsStyle.resize = function (value) {
    this.render('resize', value)
    return this
  }

  jsStyle.right = function (value) {
    this.render('right', value)
    return this
  }

  jsStyle.tabSize = function (value) {
    this.render('tab-size', value)
    return this
  }

  jsStyle.tableLayout = function (value) {
    this.render('table-layout', value)
    return this
  }

  jsStyle.textAlign = function (value) {
    this.render('text-align', value)
    return this
  }

  jsStyle.textAlignLast = function (value) {
    this.render('text-align-last', value)
    return this
  }

  jsStyle.textDecoration = function (value) {
    this.render('text-decoration', value)
    return this
  }

  jsStyle.textDecorationColor = function (value) {
    this.render('text-decoration-color', value)
    return this
  }

  jsStyle.textDecorationLine = function (value) {
    this.render('text-decoration-line', value)
    return this
  }

  jsStyle.textDecorationStyle = function (value) {
    this.render('text-decoration-style', value)
    return this
  }

  jsStyle.textIndent = function (value) {
    this.render('text-indent', value)
    return this
  }

  jsStyle.textJustify = function (value) {
    this.render('text-justify', value)
    return this
  }

  jsStyle.textOverflow = function (value) {
    this.render('text-overflow', value)
    return this
  }

  jsStyle.textShadow = function (value) {
    this.render('text-shadow', value)
    return this
  }

  jsStyle.textTransform = function (value) {
    this.render('text-transform', value)
    return this
  }

  jsStyle.top = function (value) {
    this.render('top', value)
    return this
  }

  jsStyle.transform = function (value) {
    this.render('transform', value)
    return this
  }

  jsStyle.transformOrigin = function (value) {
    this.render('transform-origin', value)
    return this
  }

  jsStyle.transformStyle = function (value) {
    this.render('transform-style', value)
    return this
  }

  jsStyle.transition = function (value) {
    this.render('transition', value)
    return this
  }

  jsStyle.transitionDelay = function (value) {
    this.render('transition-delay', value)
    return this
  }

  jsStyle.transitionDuration = function (value) {
    this.render('transition-duration', value)
    return this
  }

  jsStyle.transitionProperty = function (value) {
    this.render('transition-property', value)
    return this
  }

  jsStyle.transitionTimingFunction = function (value) {
    this.render('transition-timing-function', value)
    return this
  }

  jsStyle.unicodeBidi = function (value) {
    this.render('unicode-bidi', value)
    return this
  }

  jsStyle.userSelect = function (value) {
    this.render('user-select', value)
    return this
  }

  jsStyle.verticalAlign = function (value) {
    this.render('vertical-align', value)
    return this
  }

  jsStyle.visibility = function (value) {
    this.render('visibility', value)
    return this
  }

  jsStyle.whiteSpace = function (value) {
    this.render('white-space', value)
    return this
  }

  jsStyle.width = function (value) {
    this.render('width', value)
    return this
  }

  jsStyle.wordBreak = function (value) {
    this.render('word-break', value)
    return this
  }

  jsStyle.wordSpacing = function (value) {
    this.render('word-spacing', value)
    return this
  }

  jsStyle.wordWrap = function (value) {
    this.render('word-wrap', value)
    return this
  }

  jsStyle.zIndex = function (value) {
    this.render('z-index', value)
    return this
  }

return jsStyle
}

module.exports = jsStyle
