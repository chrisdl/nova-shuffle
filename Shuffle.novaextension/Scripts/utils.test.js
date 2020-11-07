const {
  shuffleArray,
  separateLeftPaddingFromString,
  initialWhitespaceLength,
  randomInRange,
  shuffleString
} = require('./utils.js')

describe('shuffleArray', () => {
  test('input !== output', () => {
    const input = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const inputCopy = [...input]
    expect(shuffleArray(input)).not.toEqual(inputCopy)
  })

  test('Length should not change', () => {
    const input = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const output = shuffleArray(input)
    expect(output.length).toBe(11)
  })

  test('Same content that went in is still present after shuffling', () => {
    const input = ['a', 'b', 'c', 'd', 1, 2, 3]
    const inputCopy = [...input]
    shuffleArray(input)
    for (const each of input) {
      expect(inputCopy).toContain(each)
    }
  })

  // The takeaway being that the shuffling goes really fast actually.
  // The bigger issue is writing it back into the editor probably.
  describe('timing tests', () => {
    const tenK = []
    const oneHundredK = []
    const oneMillion = []

    beforeAll(() => {
      for (let i = 10000; i > 0; i--) {
        const randStr = Math.random().toString(36).substring(2)
        tenK.push(randStr)
      }
      for (let i = 10; i > 0; i--) {
        oneHundredK.push(...tenK)
      }
      for (let i = 10; i > 0; i--) {
        oneMillion.push(...oneHundredK)
      }
    })

    test('generated test arrays have correct lengths', () => {
      expect(tenK.length).toBe(10e3)
      expect(oneHundredK.length).toBe(100e3)
      expect(oneMillion.length).toBe(1e6)
    })

    test('shuffle 10k array items', () => {
      shuffleArray(tenK)
      expect(true).toBe(true)
    })

    test('shuffle 100k array items', () => {
      shuffleArray(oneHundredK)
      expect(true).toBe(true)
    })

    test('shuffle one million array items', () => {
      shuffleArray(oneMillion)
      expect(true).toBe(true)
    })
  })
})

describe('shuffleString', () => {
  test('shuffles a string', () => {
    const input = 'abcdefghijklmn'
    expect(shuffleString(input)).not.toBe('abcdefghijklmn')
  })
  test('should output a string', () => {
    const input = 'abcdefghijklmn'
    expect(typeof shuffleString(input)).toBe('string')
  })
  test('Same content in as out', () => {
    const input = 'abcdefghijklmn'
    const output = shuffleString(input)
    for (const each of [...output]) {
      expect(input).toContain(each)
    }
    expect(input.length).toBe(output.length)
  })
})

describe('initialWhitespaceLength', () => {
  test('correctly detects length of spaces', () => {
    expect(initialWhitespaceLength('  oof  hello')).toBe(2)
    expect(initialWhitespaceLength('oof  hello  ')).toBe(0)
  })
  test('correctly detects length of tabs', () => {
    expect(initialWhitespaceLength('	oof  hello  ')).toBe(1) // eslint-disable-line
    expect(initialWhitespaceLength('			oof  hello')).toBe(3) // eslint-disable-line
  })
  test('correctly detects length mixed tabs/spaces', () => {
    expect(initialWhitespaceLength('		  oof  hello')).toBe(4) // eslint-disable-line
  })
})

describe('separateLeftPaddingFromString', () => {
  test('Does the thing', () => {
    expect(
      separateLeftPaddingFromString('  hello')
    ).toEqual({ padding: '  ', text: 'hello' })

    expect(
      separateLeftPaddingFromString('hello  ')
    ).toEqual({ padding: '', text: 'hello  ' })

    expect(
      separateLeftPaddingFromString('"timezone": "SAO_PAULO",')
    ).toEqual({ padding: '', text: '"timezone": "SAO_PAULO",' })

    expect(
      separateLeftPaddingFromString('		hello  ') // eslint-disable-line
    ).toEqual({ padding: '		', text: 'hello  ' }) // eslint-disable-line
  })
})

describe('randomInRange', () => {
  test('Generated numbers are within the bounds', () => {
    for (let i = 100; i > 0; i--) {
      const nr = randomInRange(1, 15)
      expect(nr).toBeGreaterThanOrEqual(1)
      expect(nr).toBeLessThanOrEqual(15)
      // Manual expection of a run confirmed that 1 and 15 were present as well.
    }
  })
})
