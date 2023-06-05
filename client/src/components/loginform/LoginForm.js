import React, { useState,useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { arrow } from '../../assets';
import './loginform.css'
// import Button from '../button/Button';
import * as Yup from 'yup';
import { AiOutlineMail, AiOutlineEyeInvisible, AiOutlineEye, AiOutlineLock } from 'react-icons/ai';
import loginService from '../../API/login';
import UserContext from './UserContext';


const LoginForm = (props) => {
    const navigate=useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
   
  
    const toggle = () => {
        setShowPassword(!showPassword);
    }
    const validationSchema = Yup.object().shape({
        email: Yup.string().required('Email is required'),

        password: Yup.string().required('Password is required'),
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await validationSchema.validate({ email, password }, { abortEarly: false });
            console.log('email', email);
            console.log('password', password);
            const user = await loginService.login({ username: email, password });
            // console.log('user is', user);
            props.onLogin(user);
            
            navigate('/');
          

        } catch (error) {
            console.log(error)
            if (error instanceof Yup.ValidationError) {
                const validationErrors = {};
                error.inner.forEach((err) => {
                    validationErrors[err.path] = err.message
                });
                console.log('validation errors are', validationErrors)
                setErrors(validationErrors)
            }
        }

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
                    <form onSubmit={handleSubmit} className='signup-form'>
                        <div className='signup-input-group'>
                            <AiOutlineMail className='input-control-icon' style={{ color: '#640146', width: '24px', height: '24px' }} />
                            <input
                                onChange={({ target }) => setEmail(target.value)}
                                value={email}
                                type='text'
                                id='email'
                                name='email'
                                className={`input-control ${errors.email ? 'error' : ''}`}
                                placeholder={errors.email || 'enter email here'} />
                        </div>
                        <div className='signup-input-group'>
                            <AiOutlineLock className='input-control-icon' style={{ color: '#640146', width: '24px', height: '24px' }} />
                            <input onChange={({ target }) => setPassword(target.value)}
                                value={password} type={showPassword ? 'text' : 'password'} id='password' name='password'
                                className={`input-control ${errors.password ? 'error' : ''}`}
                                placeholder={errors.password || 'enter password here'} />
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