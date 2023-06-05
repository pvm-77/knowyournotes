import React from 'react'
import { Link } from 'react-router-dom'
import { GrNotes, GrAdd } from 'react-icons/gr'
// import {BiSolidHelpCircle} from 'react-icons/bi'
import { TfiHelpAlt } from 'react-icons/tfi';
import { MdOutlineImageSearch, MdOutlineColorLens } from 'react-icons/md';
import { CiUser, CiGrid41 } from 'react-icons/ci';
import './noteeditor.css'
const NoteEditor = () => {
    return (
        <div className='note-editor-wrapper'>
            <div className='note-editor-header'>
                <p>Notes</p>
                <div>
                    <MdOutlineColorLens />
                </div>
                <div>
                    <CiGrid41 />
                </div>
            </div>

            <img src='s' alt='note-editor-img' />
            <p>create your first note</p>

            <div className='bottom-nav'>
                <div className='note-btn'>
                    <div className='ellipse'>
                        <GrAdd />
                    </div>
                </div>
                <div className='bottom-nav-list'>
                    <div className='nav-item-mobile'>
                        <GrNotes  style={{width:'24px',height:'24px'}}  />
                        <p className='mobile-text'>notes</p>
                    </div>
                    <div className='nav-item-mobile'>
                        <MdOutlineImageSearch style={{width:'24px',height:'24px'}}   />
                        <p className='mobile-text'>ocr</p>
                    </div>
                    <div className='nav-item-mobile'>
                        {/* <BiSolidHelpCircle /> */}
                        <TfiHelpAlt  style={{width:'24px',height:'24px'}}  />
                        <p className='mobile-text'>help</p>
                    </div>
                    <div className='nav-item-mobile'>
                        <CiUser  style={{width:'24px',height:'24px'}}  />
                        <p>me</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default NoteEditor