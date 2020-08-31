
let numberOfNotes;

const noteText = document.querySelector('#formNoteText')
const addButton = document.querySelector('#formAddButton')
const color = document.querySelector('#formColor')
const notes = document.querySelector('#notes')
noteText.focus()

function addNote () {
  const text = noteText.value
  const note = document.createElement('div')
  const deleteButton = document.createElement('button')

  note.classList.add('note')
  note.classList.add(color.value)
  note.innerHTML = `<i class="fas fa-thumbtack"></i> <div class='note-text'>${text} </div>`
  deleteButton.innerHTML = 'Delete'
  deleteButton.classList.add('delButton')

  note.appendChild(deleteButton)
  notes.appendChild(note)

  noteText.value = ''
  noteText.focus()
}

addButton.addEventListener('click', function (event) {
  event.preventDefault()
  if (noteText.value !== '') {
    const body = {
      title: '',
      body: noteText.value,
      color: color.value
    }
    addNote()
    console.log(body)
    postNote(body)
  }
})

async function loadNotes () {
  const response = await fetch('http://localhost:3000/notes/', {
    method: 'GET'
  })
    .then(res => {
      return res.json() })
  numberOfNotes = response.length
  for (let i = 0; i < response.length; i++) {
    displayNote(response[i])
  }
}

function postNote(note) {
  fetch('http://localhost:3000/notes/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(note)
  })
    .then(res => console.log(res))
}

window.addEventListener('load', loadNotes())

function displayNote (pageNote) {
  console.log(pageNote)
  const text = pageNote.body
  const note = document.createElement('div')
  const deleteButton = document.createElement('button')

  note.classList.add('note')
  note.classList.add(pageNote.color)
  note.innerHTML = `<i class="fas fa-thumbtack"></i> <div class='note-text'>${text} </div>`
  deleteButton.innerHTML = 'Delete'
  deleteButton.classList.add('delButton')

  note.appendChild(deleteButton)
  notes.appendChild(note)

  noteText.value = ''
  noteText.focus()

  deleteButton.addEventListener('click', function () {
    fetch('http://localhost:3000/notes/' + pageNote.id, {
      method: 'DELETE'
    })
  })

  
}
