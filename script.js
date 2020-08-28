const noteDiv = document.querySelector('#notes')
const addButton = document.querySelector('#formAddButton')
const delButton = document.querySelector('#formDelButton')
const newNote = document.querySelector('#formNoteText')


fetch('http://localhost:3000/notes/')
.then(res => res.json())
.then(mood)
