const fs = require('fs')

const notes = {
    description:'list of notes',
    notes: function(){
        console.log(this.description)
        notes_buf = fs.readFileSync('../notes-node/notes.json')
        books = JSON.parse(notes_buf.toString())
        return books
    }
}

console.log(notes.notes())