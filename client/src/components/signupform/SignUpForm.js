import React from 'react'

const SignUpForm = () => {
    return (
        <div>
            <div>
                <span>arrow icon here</span>
                <p>create account</p>
                <p>enter your details to continue</p>
            </div>
            <div>
                <p>Let's get to know you</p>
            </div>
            <form>
                <input type='text' id='username' name='username' className='' placeholder='Display Name' />
                <input type='email' id='email' name='email' className='' placeholder='Email Address' />
                <input type='password' id='password' name='password' className='' placeholder='password' />
                <input type='confirmPassword' id='confirmPassword' name='confirmPassword' className='' placeholder='confirm password' />
                <div>
                    <p>already have an account</p>
                    <p>login here</p>
                </div>
                <div>
                    <p>By clicking the 'CREATE ACCOUNT' button you are agree to <a>Terms of use</a> and <a>privacy policy</a></p>
                </div>
                <div>
                    <button>create account</button>
                </div>
            </form>

        </div>
    )
}

export default SignUpForm