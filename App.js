import React from "react";
import "./App.css";

function App() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        {/* Logo */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Three_logo.svg"
          alt="Logo"
          className="logo"
        />
        {/* Menu Items */}
        <div className="nav-item">
          <span className="icon">
            <span role="img" aria-label="bag">🛍️</span>
          </span>
          XtraMAll
        </div>
        <div className="divider" />
        <div className="nav-item">
          <span className="icon">
            <span role="img" aria-label="briefcase">💼</span>
          </span>
          3Business
        </div>
        <div className="divider" />
        <div className="nav-item">
          <span className="icon">
            <svg width="22" height="20" viewBox="0 0 22 20">
              <polyline points="2,10 10,18 20,2" fill="none" stroke="black" strokeWidth="2"/>
            </svg>
          </span>
          Care
        </div>
      </div>
      <div className="navbar-right">
        <span className="user-icon">
          <svg width="32" height="32" viewBox="0 0 32 32">
            <defs>
              <linearGradient id="userGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#8e2de2"/>
                <stop offset="100%" stopColor="#4a00e0"/>
              </linearGradient>
            </defs>
            <circle cx="16" cy="12" r="6" fill="url(#userGradient)" />
            <ellipse cx="16" cy="24" rx="10" ry="6" fill="url(#userGradient)" />
          </svg>
        </span>
        <span className="login-text">Login</span>
        <span className="lang">EN</span>
        <input className="search" type="text" placeholder="Search" />
        <button className="search-btn">
          <span role="img" aria-label="search">🔍</span>
        </button>
      </div>
    </div>
  );
}

export default App;
