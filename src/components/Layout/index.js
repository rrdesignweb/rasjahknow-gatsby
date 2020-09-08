import React, { useState } from "react"
import PropTypes from "prop-types"
import Navigation from "../Navigation"
import Social from "./social"
import hamburger from "../../assets/icons/hamburger.svg"
import "../../styles/global.scss"
import "../../styles/mixins.scss"
import "./index.scss"

const Layout = ({ children, bgImage }) => {
  const [open, setToggleNav] = useState(false)
  return (
    <div className="Layout" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="Menu">
        <div className="menu-icon">
          <a onClick={() => setToggleNav(!open)}>
            <img src={hamburger} className="menu" alt="Menu" />
            <span className="menu-label">MENU</span>
          </a>
        </div>
      </div>
      <div className="Bookings">
        <a href="mailto:rasjahknowband@gmail.com?subject=Ras Jahknow Website Booking Enquiry" title="Bookings link">
          <span className="bookings-label">BOOKINGS</span>
        </a>
      </div>

      <Social />
      <Navigation open={open} setToggleNav={setToggleNav} />
      <main>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
