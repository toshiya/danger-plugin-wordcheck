import wordcheck from '../src/index'

let failCallCount = 0
let diffContent
global.danger = {
  git: {
    created_files: ['./src/index.js'],
    modified_files: [],
    diffForFile: (file) => {
      return new Promise((resolve, reject) => {
        resolve(diffContent)
      })
    }
  }
}
global.fail = (message) => {
  failCallCount += 1
}

describe('wordcheck()', () => {
  let wordcheckFile = "./test/WORDCHECK.txt" 
  beforeEach(() => {
    failCallCount = 0
  })
  it('fail when words in WORDCHECK.txt included', (done) => {
    diffContent = "test\n"
    let promises = wordcheck(wordcheckFile)
    Promise.all(promises).then(() => {
      expect(failCallCount).toBe(1)
      done()
    })
  })

  it('pass when words in WORDCHECK.txt are not included', (done) => {
    diffContent = "+let a=0\n+console.log(a)\n"
    let promises = wordcheck(wordcheckFile)
    Promise.all(promises).then(() => {
      expect(failCallCount).toBe(0)
      done()
    })
  })
})
