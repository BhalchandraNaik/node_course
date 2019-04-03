const chalk = require('chalk')
const yargs = require('yargs')
const notes =require('./notes.js')

// Create add
yargs.command({
  command:'add',
  describe:'Add a new note',
  builder:{
    title:{
      describe:'Note title',
      demandOption:true,
      type:'string'
    },
    body:{
      describe:'Note Body',
      demandOption:true,
      type:'string'
    }
  },
  handler: function(argv){
    notes.addNote(argv.title, argv.body)
  }
})

// Create remove
yargs.command({
  command:'remove',
  describe:'Remove the note',
  builder:{
    title:{
      describe:'the title of he book',
      type:'string',
      demandOption:true
    }
  },
  handler:function(argv){
    notes.removeNote(argv.title)
  }
})

// Create list
yargs.command({
  command:'list',
  describe:'Lists all the notes',
  handler:function(){
    notes.listNotes()
  }
})

// Create read
yargs.command({
  command:'read',
  describe:'Reads all the files',
  builder:{
    title:{
      describe:'Title of the book',
      type:'string',
      demandOption:true
    }
  },
  handler:function(argv){
    notes.readNote(argv.title)
  }
})

// console.log(yargs.argv);

yargs.parse()
