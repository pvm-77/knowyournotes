import React, { useState } from 'react'
import { arrow } from '../../assets'
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { AiOutlineMail } from 'react-icons/ai';
const ForgotPassword = () => {
    const [email,setEmail]=useState('');
    const [errors,setErrors]=useState({});

    const handleSubmit=()=>{

    }
    return (
        <div className='signup-form-wrapper'>
            <div className='signup-form-container'>
                <div className='signup-form-header'>
                    <Link to='/' className='item back-arrow-animation'>
                        <img className='arrow' src={arrow} alt='back' />
                    </Link>
                    <p className='signup-header-title'><b>Forgot Password</b></p>
                </div>

                <form className='signup-form' onSubmit={handleSubmit}>
                    <div className='signup-input-group'>
                        <AiOutlineMail className='input-control-icon' style={{ color: '#640146', width: '24px', height: '24px' }} />
                        <input onChange={({ target }) => setEmail(target.value)} value={email} type='email' id='email' name='email'
                            className='input-control'
                            placeholder={errors.name || 'Email Address'} />


                    </div>
                    <div className='create-account'>
                        <button type='submit'>submit</button>
                    </div>
                </form>
            </div>




        </div >
    )
}

export default ForgotPassword