import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const SmileConclude = () => {
  const data = useStaticQuery(graphql`
    query {
      # Fetching card title
      allContentfulSmileCardTitle {
        edges {
          node {
            title
          }
        }
      }
    }
  `)
  return (
    <div className="mt-16">
      <h2>{data.allContentfulSmileCardTitle.edges[2].node.title}</h2>
    </div>
  )
}

export default SmileConclude
