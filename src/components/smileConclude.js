import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const SmileConclude = () => {
  const data = useStaticQuery(graphql`
    query {
      # Fetching card title
      allContentfulSmileCardTitle(sort: { fields: createdAt, order: ASC }) {
        edges {
          node {
            title
          }
        }
      }
    }
  `)
  return (
    <div className="mt-16 mb-16">
      <div className="flex flex-wrap justify-center text-center">
        <div className="w-10/12">
          <h2>{data.allContentfulSmileCardTitle.edges[2].node.title}</h2>
        </div>
        <div className="w-full">
          <div>
            <Link
              to="/"
              className="font-serif font-normal bg-transparent text-smileBlueBtn py-3 px-4 rounded uppercase text-sm tracking-widest hover:bg-indigo-100 transition duration-150 ease-in-out m-2 border border-smileBlueBr"
            >
              Book A Demo
            </Link>
            <Link
              to="/"
              className="font-serif font-normal bg-smileBlue text-white py-3 px-4 rounded uppercase text-sm tracking-widest hover:bg-smileDarkBlue transition duration-150 ease-in-out m-2"
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SmileConclude
