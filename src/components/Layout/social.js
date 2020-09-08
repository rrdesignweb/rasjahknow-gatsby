import React from "react"
import "./index.scss"

import data from "../../data/content"

const Social = () => {
  const socialItems = data.social.map((item, i) => (
    <li key={i}>
      <a href={item.href} target={item.target} title={item.title}>
        <img src={item.icon} alt={item.alt} />
      </a>
    </li>
  ))
  return (
    <div className="Social">
      <div className="social-wrapper">
        <ul>{socialItems}</ul>
      </div>
    </div>
  )
}

export default Social
