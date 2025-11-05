// Login Form Validation and Animation
document.addEventListener('DOMContentLoaded', () => {
  const loginBtn = document.getElementById('loginBtn');
  const username = document.getElementById('username');
  const password = document.getElementById('password');
  const remember = document.getElementById('remember');

  // Input Focus Animation
  const inputs = document.querySelectorAll('.input-group input');
  inputs.forEach(input => {
    input.addEventListener('focus', () => {
      input.parentElement.style.transform = 'scale(1.02)';
    });
    
    input.addEventListener('blur', () => {
      input.parentElement.style.transform = 'scale(1)';
    });
  });

  // Login Button Click
  loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    // Validation
    if (usernameValue === '' || passwordValue === '') {
      shakeCard();
      showError('Please fill in all fields!');
      return;
    }

    // Success Animation
    loginBtn.innerHTML = '<span style="animation: spin 0.5s linear infinite;">⏳</span> Logging in...';
    loginBtn.disabled = true;

    // Simulate login delay
    setTimeout(() => {
      loginBtn.innerHTML = '✓ SUCCESS';
      loginBtn.style.background = 'rgba(46, 213, 115, 0.8)';
      
      setTimeout(() => {
        successAnimation();
      }, 800);
    }, 1500);
  });

  // Shake Animation for Error
  function shakeCard() {
    const card = document.querySelector('.login-card');
    card.style.animation = 'shake 0.5s ease';
    setTimeout(() => {
      card.style.animation = 'slideIn 0.6s ease-out';
    }, 500);
  }

  // Error Message
  function showError(message) {
    const existingError = document.querySelector('.error-message');
    if (existingError) existingError.remove();

    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.style.cssText = `
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(255, 71, 87, 0.9);
      color: white;
      padding: 12px 24px;
      border-radius: 8px;
      font-size: 14px;
      box-shadow: 0 4px 15px rgba(255, 71, 87, 0.4);
      z-index: 1000;
      animation: slideDown 0.3s ease;
    `;
    
    document.body.appendChild(errorDiv);
    
    setTimeout(() => {
      errorDiv.style.animation = 'slideUp 0.3s ease';
      setTimeout(() => errorDiv.remove(), 300);
    }, 3000);
  }

  // Success Animation
  function successAnimation() {
    const card = document.querySelector('.login-card');
    card.style.animation = 'zoomOut 0.5s ease forwards';
    
    setTimeout(() => {
      alert('🎉 Login Successful!\n\nWelcome back!');
      location.reload();
    }, 500);
  }

  // Enter Key Support
  [username, password].forEach(input => {
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        loginBtn.click();
      }
    });
  });
});

// Add Additional CSS Animations via JavaScript
const style = document.createElement('style');
style.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-10px); }
    75% { transform: translateX(10px); }
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translate(-50%, -20px);
    }
    to {
      opacity: 1;
      transform: translate(-50%, 0);
    }
  }

  @keyframes slideUp {
    from {
      opacity: 1;
      transform: translate(-50%, 0);
    }
    to {
      opacity: 0;
      transform: translate(-50%, -20px);
    }
  }

  @keyframes zoomOut {
    to {
      opacity: 0;
      transform: scale(0.8);
    }
  }
`;
document.head.appendChild(style);
