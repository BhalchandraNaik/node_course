const fs = require('fs')
const chalk = require('chalk')

const getNotes = function(){
  return 'Your Notes...'
}

const addNote = function(title, body){
  const notes = loadNotes()
  notes.push({
    title:title,
    body:body
  })
  saveNote(JSON.stringify(notes))
}

const saveNote = function(notes){
  fs.writeFileSync('notes.json',notes)
}

const loadNotes = function(){
  try {
    data_buffer = fs.readFileSync('notes.json')
    data_str = data_buffer.toString()
    return JSON.parse(data_str)
  } 
  catch (error) {
    return []
  }
}

const removeNote = function(title){
  const notes = loadNotes()
  var others = notes.filter(function(note){
    return note.title !== title
  })

  if(others.length < notes.length){
    fs.writeFileSync('notes.json', JSON.stringify(others))
    console.log(chalk.green.inverse('Note Has been removed.'))
  }else{
    console.log(chalk.red.inverse('Note doesnt exists!'))
  }
}

const listNotes = ()=>{
  notes = loadNotes()
  notes.forEach(note => {
    console.log('Title: ', note.title,', Author: ',note.body)
  });
}

const readNote = (title)=>{
  notes = loadNotes()
  found = notes.find((note)=>{
    return note.title==title
  })
  console.log(JSON.stringify(found))
}

module.exports = {
  getNotes:getNotes,
  addNote:addNote,
  loadNotes:loadNotes,
  saveNote:saveNote,
  removeNote:removeNote,
  listNotes:listNotes,
  readNote:readNote
}