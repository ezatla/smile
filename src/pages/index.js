import React from "react"
import Hero from "../components/hero"
import Layout from "../components/layout"
import SmileCard from "../components/smileCard"
import SmileUI from "../components/smileUI"
import SmileAdmin from "../components/smileAdmin"
import SmileTools from "../components/smileTools"
import SmileConclude from "../components/smileConclude"

const IndexPage = () => {
  return (
    <div className="container overflow-hidden">
      <Layout>
        <Hero></Hero>
        <SmileCard></SmileCard>
        <SmileUI></SmileUI>
        <SmileAdmin></SmileAdmin>
        <SmileTools></SmileTools>
        <SmileConclude></SmileConclude>
      </Layout>
    </div>
  )
}

export default IndexPage
