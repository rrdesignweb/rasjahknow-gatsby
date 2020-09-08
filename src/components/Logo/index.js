import React from "react"
import logoWhite from "../../assets/img/logo-white.svg"
import logoHighlight from "../../assets/img/logo-red-highlight.svg"
import "./index.scss"

const LogoGlitch = () => (
  <div className="logo-glitch">
    <img src={logoWhite} alt="Logo" id="logo" />
    <img src={logoHighlight} alt="Logo" id="logo" />
    <img src={logoWhite} alt="Logo" id="logo" />
  </div>
)

export default LogoGlitch
