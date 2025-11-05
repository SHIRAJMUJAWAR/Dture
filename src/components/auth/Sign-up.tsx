import React, { useState, useRef } from "react";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";
 

const AuthPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [buttonText, setButtonText] = useState("SIGN UP");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [email ,setEmail] = useState('')

  const cardRef = useRef(null);
  const loginBtnRef = useRef(null);

  // Input animations
  const handleFocus = (e) => {
    e.target.parentElement.style.transform = "scale(1.02)";
  };
  const handleBlur = (e) => {
    e.target.parentElement.style.transform = "scale(1)";
  };

  // Login button click
  const handleLogin = (e) => {
    e.preventDefault();

    if (username.trim() === "" || password.trim() === "") {
      shakeCard();
      showError("Please fill in all fields!");
      return;
    }

    setIsLoading(true);
    setButtonText("⏳ Logging in...");

    setTimeout(() => {
      setButtonText("✓ SUCCESS");
      loginBtnRef.current.style.background = "rgba(46, 213, 115, 0.8)";

      setTimeout(() => successAnimation(), 800);
    }, 1500);
  };

  // Error animation
  const shakeCard = () => {
    const card = cardRef.current ;
    card.style.animation = "shake 0.5s ease";
    setTimeout(() => {
      card.style.animation = "slideIn 0.6s ease-out";
    }, 500);
  };

  // Show error message
  const showError = (msg) => {
    setError(msg);
    setTimeout(() => setError(""), 3000);
  };

  // Success animation
  const successAnimation = () => {
    const card = cardRef.current;
    card.style.animation = "zoomOut 0.5s ease forwards";

    setTimeout(() => {
      alert("🎉 Login Successful!\n\nWelcome back!");
      window.location.reload();
    }, 500);
  };

  return (
    <div className="body-auth">
      <div className=" container ">
        <div ref={cardRef} className=" login-card">
          {/* Trails */}
          <div className="trail trail-1"></div>
          <div className="trail trail-2"></div>

          {/* Avatar */}
          <div className="avatar-container">
            <div className="avatar-icon">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50 45H10C8.89543 45 8 44.1046 8 43V22C8 20.8954 8.89543 20 10 20H16L19 15H41L44 20H50C51.1046 20 52 20.8954 52 22V43C52 44.1046 51.1046 45 50 45Z"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="30"
                  cy="32"
                  r="8"
                  stroke="currentColor"
                  strokeWidth="2.5"
                />
              </svg>
            </div>
          </div>

          {/* Error message */}
          {error && <div className="error-message">{error}</div>}

          {/* Username */}
      
          <div className="input-group">
            <div className="input-icon">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 10C12.7614 10 15 7.76142 15 5C15 2.23858 12.7614 0 10 0C7.23858 0 5 2.23858 5 5C5 7.76142 7.23858 10 10 10Z"
                  fill="currentColor"
                />
                <path
                  d="M10 12.5C5 12.5 2.5 15 2.5 17.5V20H17.5V17.5C17.5 15 15 12.5 10 12.5Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <input
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>
          {/* email */}
          <div className="input-group">
            <div className="input-icon">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 10C12.7614 10 15 7.76142 15 5C15 2.23858 12.7614 0 10 0C7.23858 0 5 2.23858 5 5C5 7.76142 7.23858 10 10 10Z"
                  fill="currentColor"
                />
                <path
                  d="M10 12.5C5 12.5 2.5 15 2.5 17.5V20H17.5V17.5C17.5 15 15 12.5 10 12.5Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={ email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>

          {/* Password */}
          <div className="input-group">
            <div className="input-icon">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="3"
                  y="9"
                  width="14"
                  height="10"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M6 9V6C6 3.79086 7.79086 2 10 2C12.2091 2 14 3.79086 14 6V9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="10" cy="14" r="1.5" fill="currentColor" />
              </svg>
            </div>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>

          

          {/* Options */}
          <div className="options-row">
            <label className="remember-me">
              <input type="checkbox" id="remember" />
              <span className="checkmark"></span>
              <span>Remember me</span>
            </label>
            <a href="#" className="forgot-password">
              Forgot Password?
            </a>
          </div>

          {/* Button */}
          <button
            ref={loginBtnRef}
            className="login-btn"
            id="loginBtn"
            onClick={handleLogin}
            disabled={isLoading}
          >
            {buttonText}
          </button>
            <div className="ml-25 text-red-500 text-xl">  
           <Link to='/sign-in' > <button className=" text-blue-500 bold no-underline flex flex-row rounded-5 p-2  "> Create new one</button></Link> 
              </div>
                
        </div>
 
      </div>
    </div>
  );
};

export default AuthPage;
