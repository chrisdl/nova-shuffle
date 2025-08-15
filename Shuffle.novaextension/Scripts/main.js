/* globals nova */

const utils = require('utils')

exports.activate = function () {
  // Do work when the extension is activated
}

exports.deactivate = function () {
  // Clean up state before the extension is deactivated
}

nova.commands.register('shuffle.lines', (editor) => {
  const ranges = editor.selectedRanges
  for (const range of ranges) {
    const text = editor.getTextInRange(range)
    const lines = text.split('\n')
    const isLastLineANewline = utils.lastInArrayIsEmptyString(lines)

    // Remove trailing newline before shuffling (so it doesn't end up in middle)
    if (isLastLineANewline) {
      lines.pop()
    }
    const shuffledLines = utils.shuffleArray(lines)
    editor.edit(e => {
      if (isLastLineANewline) {
        shuffledLines.push('')
      }
      e.replace(range, shuffledLines.join('\n'))
    })
  }
})

// TODO
// - Allow some sort of options to control whether whitespace and newlines
//   are added or removed etc? Or is that overthinking it?
// - Detect array and keep the separator.
nova.commands.register('shuffle.content', (editor) => {
  const ranges = editor.selectedRanges
  for (const range of ranges) {
    const text = editor.getTextInRange(range)
    const lines = text.split('\n')
    const isLastLineANewline = utils.lastInArrayIsEmptyString(lines)

    // Remove trailing newline before shuffling (so it doesn't end up in middle)
    if (isLastLineANewline) {
      lines.pop()
    }
    const linesOfShuffledContent = lines.map(line => {
      const { padding, text } = utils.separateLeftPaddingFromString(line)
      return padding + utils.shuffleString(text)
    })
    if (isLastLineANewline) {
      linesOfShuffledContent.push('')
    }
    editor.edit(e => {
      e.replace(range, linesOfShuffledContent.join('\n'))
    })
  }
})
