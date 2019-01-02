import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Biography from '../components/Biography'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Andrew Foster | Financial Services Blog" />
    <Navbar />
    <div>{children}</div>
    <Biography />
  </div>
)

export default TemplateWrapper
