import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const SmileTools = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulSmile(sort: { fields: createdAt, order: ASC }) {
        edges {
          node {
            title
            slug
            link
            image {
              file {
                url
              }
            }
            info {
              json
            }
          }
        }
      }
    }
  `)
  const renderHeroSection = data.allContentfulSmile.edges[3]
  const {
    title,
    link,
    info,
    image: {
      file: { url },
    },
  } = renderHeroSection.node
  return (
    <div className="mt-16">
      <h1>{title}</h1>
      <p>{documentToReactComponents(info.json)}</p>
      <a>{link}</a>
      <div>
        <img src={url} alt={title} />
      </div>
    </div>
  )
}

export default SmileTools
