/**
 * check the suspicous words in your codes: e.g. debugger, todo, foo, bar etc.
 */
import * as fs from 'fs'
export default function wordcheck(filename = '.github/WORDCHECK.txt') {
  let promises = []
  let word_list = fs.readFileSync(filename).toString().split('\n').filter((e) => { return e !== ''})

  let filesToCheck = danger.git.created_files.concat(danger.git.modified_files)
  word_list.forEach((word) => {
    filesToCheck.forEach((file) => {
      promises.push(danger.git.diffForFile(file).then((diffContent) => {
        let regex = new RegExp(word)
        if(diffContent.match(regex)) {
          fail(word + ' is included in file: ' + file)
        }
      }).catch()
      )
    })
  })
  return promises
}
