import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
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
    <div className="mt-24">
      <div className="flex justify-center items-center text-center">
        <div className="w-10/12">
          <h1>{title}</h1>
          <div className="text-base font-normal text-gray-800">
            {documentToReactComponents(info.json)}
          </div>
          <Link
            to="/"
            className="font-serif font-normal bg-smileBlue text-white py-3 px-4 rounded uppercase text-sm tracking-widest hover:bg-smileDarkBlue transition duration-150 ease-in-out"
          >
            {link}
            <span
              className="ml-2 text-base
            "
            >
              &#8674;
            </span>
          </Link>
          <div className="mt-8">
            <img src={url} alt={title} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SmileTools
