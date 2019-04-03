const fs = require('fs')

// const book = {
//     name:'The cursed child',
//     author:'J.K Rowling'
// }

// const book_str = JSON.stringify(book)

// fs.writeFileSync('1-json.json',book_str)

const file_buffer = fs.readFileSync('1-json.json')
data = JSON.parse(file_buffer.toString())
data.name = 'The Philosophers stone'
fs.writeFileSync('1-json.json',JSON.stringify(data))