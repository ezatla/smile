import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

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
      <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 lg:p-10 p-4">
        <div>
          <h1>{title}</h1>
          <div className="font-normal text-base leading-relaxed">
            {documentToReactComponents(info.json)}
          </div>
          <Link
            to="/"
            className="font-serif font-normal bg-smileBlue text-white py-3 px-4 rounded uppercase text-sm tracking-widest  hover:bg-smileDarkBlue transition duration-150 ease-in-out"
          >
            {link}
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 sm:mt-6 mt-8">
        <div>
          <img src={url} alt={title} />
        </div>
      </div>
    </div>
  )
}

export default Hero
