import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../../assets';
import { BiUserPin } from 'react-icons/bi';
const NewNote = () => {
const [newNote,setNewNote]=useState('');

    const addNote=(e)=>{
        e.preventDefault();

    }
    return (
        <div className='signup-form-wrapper'>
            <div className='signup-form-container'>
                <div className='signup-form-header'>
                    <Link to='/' className='item back-arrow-animation'>
                        <img className='arrow' src={arrow} alt='back' />
                    </Link>
                    <p className='signup-header-title'><b>add new note</b></p>
                </div>

                <div>
                    <p><i>what's up in your mind</i></p>

                    <p className='small-text'>enter your note</p>
                </div>

                <form className='signup-form' onSubmit={addNote}>
                    <div className='signup-input-group'>
                        <BiUserPin className='input-control-icon' style={{ color: '#640146', width: '24px', height: '24px' }} />
                        <input
                            onChange={({ target }) => setNewNote(target.value)}
                            value={newNote} type='text'
                            id='username'
                            name='username'
                            className='input-control'
                            placeholder='enter note' />
                    </div>
                    <div className='create-account'>
                        <button type='submit'>add</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default NewNote