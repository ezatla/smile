import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const SmileAdmin = () => {
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
  const renderHeroSection = data.allContentfulSmile.edges[2]
  const {
    title,
    link,
    slug,
    info,
    image: {
      file: { url },
    },
  } = renderHeroSection.node
  return (
    <div className="mt-24">
      <div className="flex flex-wrap items-center justify-between">
        <div className="w-full md:w-1/2">
          <div>
            <img src={url} alt={title} />
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <div className="mb-2 text-gray-700 font-normal text-sm">
            <span>{slug}</span>
          </div>
          <h1>{title}</h1>
          <div className="font-normal text-base leading-relaxed text-gray-800">
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
        </div>
      </div>
    </div>
  )
}

export default SmileAdmin
