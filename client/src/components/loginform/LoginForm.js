import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../../assets';
import './loginform.css'
import Button from '../button/Button';
import * as Yup from 'yup';
import { AiOutlineMail, AiOutlineEyeInvisible, AiOutlineEye, AiOutlineLock } from 'react-icons/ai'

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({})
    const toggle = () => {
        setShowPassword(!showPassword);
    }
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().required('Password is required'),
    });

    const handleSubmit = async () => {
        try {
            await validationSchema.validate({ email, password }, { abortEarly: false });
        } catch (error) {
            console.log(error)
            if (error instanceof Yup.ValidationError) {
                const validationErrors = {};
                error.inner.forEach((err) => {
                    validationErrors[err.path] = err.message
                });
                setErrors(validationErrors)

            }
        }

    }
    const handleTogglePassword = () => {
        setShowPassword(!showPassword)
    }
    return (
        <div className='signup-form-wrapper'>
            <div className='signup-form-container'>
                <div className='signup-form-header' >
                    <Link to='/' className='item back-arrow-animation'>
                        <img className='arrow' src={arrow} alt='arrow' />
                    </Link>
                    <p className='signup-header-title'><b>login</b></p>
                </div>


                <div>
                    <p><b>welcome back!</b></p>
                    <p className='small-text'>please login with your credentials</p>
                </div>


                <form className='signup-form'>
                    {/*                     
                    <div className='input-group'>
                        <input
                            type='text'
                            value={email}
                            onChange={({ target }) => setEmail(target.value)}
                            id='email'
                            name='email'
                            className=''
                            placeholder='Email Address' />
                        <svg className='input-icon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="#640146" d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,4c4.41,0,8,3.59,8,8s-3.59,8-8,8 s-8-3.59-8-8S7.59,4,12,4z M18,10.59l1.41-1.41l1.42,1.42L19.41,12l1.42,1.41L18,14.83l-1.41-1.42L15.17,14l-1.42-1.41L16.59,12 l-1.42-1.42L18,10.59z M4,12c0-3.31,2.69-6,6-6s6,2.69,6,6s-2.69,6-6,6S4,15.31,4,12z" />
                        </svg>



                    </div>
                    <div className='input-group'>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                            id='password' name='password' 
                            className='' placeholder='password' />
                        <svg className='input-icon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="#640146" d="M18,8H6V6c0-2.76,2.24-5,5-5s5,2.24,5,5v2h1c0.55,0,1,0.45,1,1v10c0,0.55-0.45,1-1,1H6c-0.55,0-1-0.45-1-1V9 c0-0.55,0.45-1,1-1h12V8z M12,15c0.55,0,1-0.45,1-1v-2c0-0.55-0.45-1-1-1s-1,0.45-1,1v2C11,14.55,11.45,15,12,15z M15,8H9V6 c0-1.65,1.35-3,3-3s3,1.35,3,3V8z" />
                        </svg>
                        <span onClick={handleTogglePassword}>
                            {showPassword ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="24" height="24">
                                <ellipse cx="50" cy="50" rx="40" ry="25" fill="white" stroke="#640146" stroke-width="2" />
                                <circle cx="50" cy="50" r="15" fill="#640146" />
                                <line x1="20" y1="80" x2="80" y2="20" stroke="#640146" stroke-width="4" />
                            </svg> : <svg className='eye-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="24" height="24">
                                <ellipse cx="50" cy="50" rx="40" ry="25" fill="#640146" stroke="#640146" stroke-width="2" />
                                <circle cx="50" cy="50" r="15" />
                            </svg>}

                        </span>







                    </div> */}
                    <div className='signup-input-group'>
                        <AiOutlineMail className='input-control-icon' style={{ color: '#640146', width: '24px', height: '24px' }} />
                        <input onChange={({ target }) => setEmail(target.value)} value={email} type='email' id='email' name='email'
                            className='input-control'
                            placeholder={errors.name || 'Email Address'} />
                    </div>
                    <div className='signup-input-group'>
                        <AiOutlineLock className='input-control-icon' style={{ color: '#640146', width: '24px', height: '24px' }} />
                        <input onChange={({ target }) => setPassword(target.value)}
                            value={password} type={showPassword ? 'text' : 'password'} id='password' name='password'
                            className='input-control'
                            placeholder={errors.name || 'password'} />
                        <span className='password-visibility' onClick={toggle}>
                            {showPassword ? <AiOutlineEyeInvisible style={{ width: '24px', height: '24px' }} /> : <AiOutlineEye style={{ width: '24px', height: '24px' }} />}

                        </span>

                    </div>

                    <div className='forgot-password'>
                        <Link to='/forgotPassword' className='small-text'>Forgot Password</Link>
                    </div>

                    <div className='account-info'>
                        <p className='small-text'>don't have an account yet?</p>
                        <Link className='account-info-link ' to='/signup'>
                            create an account here
                        </Link>
                    </div>

                    <div className='create-account'>
                        <button type='submit'>login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm