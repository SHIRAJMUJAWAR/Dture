import React from 'react'

function SignIn() {
  return ( <div className='bg-green-500 p-25'>
     <div className="container  ">
    <div className=" actives font-semibold  actives font-semibold shadow-[0_0_25px_4px_rgba(134,239,172,0.4)]   hover:shadow-[0_0_35px_6px_rgba(134,239,172,0.7 transition-all duration-300 transform  login-card">
    
      <div className="trail trail-1"></div>
      <div className="trail trail-2"></div>
      
 
      <div className="avatar-container">
        <div className="avatar-icon">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 45H10C8.89543 45 8 44.1046 8 43V22C8 20.8954 8.89543 20 10 20H16L19 15H41L44 20H50C51.1046 20 52 20.8954 52 22V43C52 44.1046 51.1046 45 50 45Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="30" cy="32" r="8" stroke="currentColor" stroke-width="2.5"/>
          </svg>
        </div>
      </div>

   
      <div className="input-group">
        <div className="input-icon">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 10C12.7614 10 15 7.76142 15 5C15 2.23858 12.7614 0 10 0C7.23858 0 5 2.23858 5 5C5 7.76142 7.23858 10 10 10Z" fill="currentColor"/>
            <path d="M10 12.5C5 12.5 2.5 15 2.5 17.5V20H17.5V17.5C17.5 15 15 12.5 10 12.5Z" fill="currentColor"/>
          </svg>
        </div>
        <input type="text" placeholder="Username" id="username" />
      </div>

      
      <div className=" input-group">
        <div className="input-icon">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="9" width="14" height="10" rx="2" stroke="currentColor" stroke-width="2" fill="none"/>
            <path d="M6 9V6C6 3.79086 7.79086 2 10 2C12.2091 2 14 3.79086 14 6V9" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <circle cx="10" cy="14" r="1.5" fill="currentColor"/>
          </svg>
        </div>
        <input type="password" placeholder="Password" id="password"/>
      </div>

 
      <div className="options-row">
        <label className="remember-me">
          <input type="checkbox" id="remember"/>
          <span className="checkmark"></span>
          <span>Remember me</span>
        </label>
        <a href="#" className="forgot-password">Forgot Password?</a>
      </div>

 
      <button className="login-btn" id="loginBtn">LOGIN</button>
    </div>
  </div>

  <script src="script.js"></script>
    </div>
  )
}

export default SignIn
