import React from 'react'
import './note.css'
const Note = ({ note }) => {
  return (

    <div key={note.id} class="note-card">
      <div class="note-content">
        {note.content}
      </div>
      <div class="card-footer">
        <button>Edit</button>
        <button class="delete-button">Delete</button>
      </div>
    </div>

  )
}

export default Note