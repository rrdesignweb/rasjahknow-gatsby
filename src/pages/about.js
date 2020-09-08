import React from "react"
import Layout from "../components/Layout"
import AboutComp from "../components/About"
import bgImage from "../assets/img/bg-img-bandshot.jpg"

export default function About() {
  return (
    <Layout bgImage={bgImage}>
      <AboutComp />
    </Layout>
  )
}
