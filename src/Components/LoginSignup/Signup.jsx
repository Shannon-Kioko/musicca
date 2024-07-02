import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import email_icon from '../Assets/email.png'
import user_icon from '../Assets/user.png' 
import password_icon from '../Assets/padlock.png'

export const Signup = () => {
    const [action, setAction] = useState("Sign Up");
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

  return (

    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>

        <div className='inputs'>
            {action === "Login" ? <div></div>:<div className='input'>
                <img src={user_icon} className='icon' alt='User Icon'/>
                <input
                type='text'
                placeholder='Username'
                value={userName}
                onChange={e => setUserName(e.target.value)}/>
            </div>}
            
            <div className='input'>
                <img src={email_icon} className='icon' alt='Email icon'/>
                <input
                type='email'
                placeholder='Email'
                value={email}
                onChange={e => setPassword(e.target.value)}/>
            </div>
            <div className='input'>
                <img src={password_icon} className='icon' alt='Password icon'/>
                <input type='password'
                placeholder='Password'
                value={password}
                onChange={e => setPassword(e.target.value)}/>
            </div>
            </div>
            <div className="forgot-password">Already have an account?
                <span>
                    <Link to={'/login'}> Login! </Link>
                    </span>
                    </div>
                    
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=> {setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=> {setAction("Login")}}>Login</div>
        </div>
    </div>
)
}
export default Signup;