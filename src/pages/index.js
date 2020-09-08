import React from "react"
import Layout from "../components/Layout"
import LogoGlitch from "../components/Logo"
import bgImage from "../assets/img/bg-img-bw.jpg"

export default function Home() {
  return (
    <Layout bgImage={bgImage}>
      <LogoGlitch />
    </Layout>
  )
}
