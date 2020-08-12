import React from "react"
import Layout from "../components/Layout"
import logo from "../assets/img/logo-white.svg"
import bgImage from "../assets/img/bg-img-about.jpg"

export default function About() {
  return (
    <Layout bgImage={bgImage}>
      <img src={logo} alt="Logo" id="logo"/>
    </Layout>
  )
}
