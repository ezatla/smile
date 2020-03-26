import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Link } from "gatsby"

const Hero = () => {
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
  const renderHeroSection = data.allContentfulSmile.edges[0]
  const {
    title,
    link,
    info,
    image: {
      file: { url },
    },
  } = renderHeroSection.node
  return (
    <div className="flex flex-wrap justify-between items-center">
      <div className="w-full sm:w-1/1 md:w-1/2 lg:w-1/2 xl:w-1/2 lg:p-10 p-4">
        <div>
          <h1 className="font-sans text-4xl font-semibold">{title}</h1>
          <div className="font-normal text-base leading-relaxed">
            {documentToReactComponents(info.json)}
          </div>
          <Link
            to="/"
            className="font-serif font-normal bg-smileBlue text-white py-3 px-4 rounded uppercase text-sm tracking-widest"
          >
            {link}
          </Link>
        </div>
      </div>
      <div className="w-full sm:w-1/1 md:w-1/2 lg:w-1/2 xl:w-1/2 sm:mt-6 mt-8">
        <div>
          <img src={url} alt={title} />
        </div>
      </div>
    </div>
  )
}

export default Hero
