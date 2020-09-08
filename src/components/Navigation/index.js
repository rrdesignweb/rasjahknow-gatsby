import React from "react"
import close from "../../assets/icons/close.svg"
import data from "../../data/content"

import "./index.scss"

const Navigation = ({ open, setToggleNav }) => {
  const listItems = data.navigation.map((item, i) => (
    <li key={i}>
      <a href={item.href} target={item.target} title={item.title}>
        {item.link}
      </a>
    </li>
  ))
  return (
    <div className={`Navigation ${open ? "visible" : ""}`}>
      <a
        onClick={() => {
          setToggleNav(!open)
        }}
      >
        <img src={close} alt="Close" className="close-menu" />
      </a>
      <div className="navigation-wrapper">
        <ul>{listItems}</ul>
      </div>
    </div>
  )
}

export default Navigation
