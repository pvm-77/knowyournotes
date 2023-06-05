import React from 'react'
import Note from './Note'
import './notes.css'
const Notes = ({notes}) => {
  return (
    <div className='notes-wrapper'>
        {notes.map(note=><Note note={note} />)}
    </div>
  )
}

export default Notes