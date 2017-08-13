/**
 * check the suspicous words in your codes: e.g. debugger, todo, foo, bar etc.
 */
import * as fs from 'fs'
export default function wordcheck(filename = '.github/WORDCHECK.txt') {
  let promises = []
  let word_list = fs.readFileSync(filename).toString().split('\n').filter(e => {
    return e !== ''
  })

  let modifiedFiles = danger.git.modified_files
  let createdFiles = danger.git.created_files
  word_list.forEach(word => {
    let regex = new RegExp(word)
    createdFiles.forEach(file => {
      let content = fs.readFileSync(file).toString()
      if (content.match(regex)) {
        fail(word + ' is included in file: ' + file)
      }
    })

    modifiedFiles.forEach(file => {
      promises.push(
        danger.git
          .diffForFile(file)
          .then(diffContent => {
            let addedLines = diffContent.diff
              .split('\n')
              .filter(e => {
                return e.match(/^\+/)
              })
              .join('\n')
            if (addedLines.match(regex)) {
              fail(word + ' is included in file: ' + file)
            }
          })
          .catch(error => {
            console.log(error)
          }),
      )
    })
  })
  return Promise.all(promises)
}
