import React from 'react'

import './all.sass'

const Biography = () => (

    <footer className="bioFooter section">
      <div className="bioWrap display-flex">
        <a className="bioWrapLink display-flex" href="/">
          <div className="avatarWrapper display-flex">
            <img src="https://media.licdn.com/dms/image/C5603AQH6W5-nLgE_8g/profile-displayphoto-shrink_100_100/0?e=1551916800&amp;v=beta&amp;t=a2ahsS-A3lKtxZsifrVjeY_F44aH7YvRcV9_gGZQCQg" className="avatar" alt="Andrew Foster" />
          </div>
        </a>
        <div className="display-flex justify-center">
          <h2 className="hero">Andrew Foster</h2>
        </div>
        <div className="display-flex justify-center">
          <p className="align-center">I've worked in Financial Services for the last 10 years, across Wealth Management, Insurance and Banking. I currently work with companies across Financial Services, to assist them in understanding how technology can be used as a tool for growth and for transformation into a customer centric organisation.</p>
        </div>
      </div>
    </footer>

)

export default Biography
