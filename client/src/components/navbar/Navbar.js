import React from 'react'
// import { CgMenuRound } from 'react-icons/cg';
import { Link } from 'react-router-dom';

import './navbar.css'
const Navbar = ({ user }) => {

    return (
        <div className='nav-wrapper'>
            <div className='_2y'>
                <div className='Ft_'></div>
                <div className='IMy50w a6f7yQ'>
                    <div className='theme light'>
                        <header className='_Vxb'>
                            {/* hambergur */}
                            <div className='JR Y2kvUA'>
                                <div className='_8'>
                                    <div className='someclassformenu'>
                                        <button
                                            type='button'
                                            aria-label='Main menu'
                                            className='menu-btn'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M5.75 5.25h12.5a.75.75 0 1 1 0 1.5H5.75a.75.75 0 0 1 0-1.5zm0 6h12.5a.75.75 0 1 1 0 1.5H5.75a.75.75 0 1 1 0-1.5zm0 6h12.5a.75.75 0 1 1 0 1.5H5.75a.75.75 0 1 1 0-1.5z"></path></svg>
                                        </button>
                                    </div>
                                </div>
                                <div className='theme-light'></div>
                            </div>

                            {/* brand logo or name */}
                            <div className="_0TczQQ">
                                <div className="IDdBMg">
                                    <Link className="ovm4pQ qN_0PQ" to="/"
                                        draggable="false">
                                        <div className="_pFsfA">
                                            notes Home
                                        </div>
                                        <span className="_8aslVA">
                                            {/* <img src="" alt="brand" role="presentation" /> */}
                                            <p style={{fontSize:'20px'}}>yNotes</p>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            {/* navbar  */}
                            <div className='B74wyQ DwB3TQ mRLVxw'>
                                <nav className='XPqG4Q'>
                                    <ul className='an_NAA'>
                                        <li className='_0dchRA'>
                                            <Link  className='nav-link-main'>home</Link>
                                        </li>
                                        <li className='_0dchRA'>
                                            <Link className='nav-link-main'>about</Link>
                                        </li>
                                        <li className='_0dchRA'>
                                            <Link  className='nav-link-main'>Notes</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            {/* {
                                <>
                                    {user ?
                                        <div className="auth-wrapper1">
                                            <div className='user-profile'>
                                                <p className='user-name'>{(user.username).charAt(0)}</p>
                                            </div>
                                            <div className='auth-item'>
                                                <Link className='auth-link' to='/logout'>
                                                    logout
                                                </Link>
                                            </div>

                                        </div> :
                                        <div className='auth-wrapper2'>
                                            <div className='auth-item'>
                                                <Link className='auth-link' to='/signup'>

                                                    signup

                                                </Link>

                                            </div>
                                            <div className='auth-item'>
                                                <Link className='auth-link' to='/login'>

                                                    signin

                                                </Link>
                                            </div>
                                        </div>}


                                </>
                            } */}
                            {/* auth buttons */}
                            <div className='PYoGFg DwB3TQ'>
                                <Link className='au-link' to='/login'>
                                <span  className='_38oWvQ'>Log in</span>
                                </Link>
                                <Link className='au-link' to='/signup'>
                                <span className='_38oWvQ'>Sign up</span>
                                
                                </Link>
                            </div>

                        </header>
                    </div>
                </div>






            </div>
        </div>
    )
}

export default Navbar