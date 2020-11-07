function lastInArrayIsEmptyString (arr) {
  return arr.slice(-1)[0] === ''
}

function separateLeftPaddingFromString (str) {
  const whiteSpaceLen = initialWhitespaceLength(str)
  return {
    padding: str.substring(0, whiteSpaceLen),
    text: str.substring(whiteSpaceLen)
  }
}

function initialWhitespaceLength (str) {
  return str.search(/\S|$/)
}

function detectArray (text) {
  // TODO
}

function randomInRange (low, high) {
  return low + Math.floor(Math.random() * (high - low + 1))
}

// This shuffles in place, meaning it mutates the input array.
// This one is very similar to how lo-dash does it.
// I avoid the work of copying the array which hopefully saves us some time
function shuffleArray (array) {
  let index = -1
  const length = array.length
  const lastIndex = length - 1

  while (++index < length) {
    const rand = randomInRange(index, lastIndex)
    const value = array[rand]
    array[rand] = array[index]
    array[index] = value
  }

  return array
}

// Might be worth switching this to perform shuffle without
// converting to an array first?
function shuffleString (str) {
  return shuffleArray([...str]).join('')
}

module.exports = {
  lastInArrayIsEmptyString,
  initialWhitespaceLength,
  shuffleArray,
  randomInRange,
  shuffleString,
  detectArray,
  separateLeftPaddingFromString
}
