import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="Andrew Foster" style={{ width: '88px' }} />
          </figure>
          <h1>  Andrew Foster</h1>
        </Link>
      </div>
      <div className="navbar-start">
      </div>
      <div className="navbar-end">
        <a
          className="navbar-item"
          href="https://github.com/drewfoster/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={github} alt="Github" />
          </span>
        </a>
      </div>
    </div>
  </nav>
)

export default Navbar
