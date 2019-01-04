import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'

const Navbar = () => (
  <nav className="navbar is-transparent has-text-centered">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="Andrew Foster" style={{ width: '88px', marginRight: '0.4em' }} />
          </figure>
          <h1>Andrew Foster | Financial Services Blog</h1>
        </Link>
      </div>
    </div>
  </nav>
)

export default Navbar
