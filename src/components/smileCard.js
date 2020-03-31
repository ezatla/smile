import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const SmileCard = () => {
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
      # Fetching cards
      allContentfulSmileCard {
        edges {
          node {
            title
            info
            image {
              file {
                url
              }
            }
          }
        }
      }
      # Fetching image
      allContentfulSmileImage {
        edges {
          node {
            image {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)
  return (
    <div className="container mt-24">
      {/* Card Title */}
      <div className="flex flex-wrap justify-center mb-8">
        <div className="w-7/12 text-center">
          <h1>{data.allContentfulSmileCardTitle.edges[0].node.title}</h1>
        </div>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap -mx-2">
        {data.allContentfulSmileCard.edges.map(edge => {
          return (
            <div className="w-full md:w-1/3 px-2" key={edge.node.title}>
              <div className=" shadow-lg hover:shadow-2xl p-10 h-full transition duration-300 ease-in-out">
                <img src={edge.node.image.file.url} alt={edge.node.title} />
                <h3>{edge.node.title}</h3>
                <div className="text-base font-normal text-gray-700">
                  {edge.node.info}
                </div>
              </div>
            </div>
          )
        })}
      </div>
      {/* Client */}
      <div className="flex justify-center mt-40 ">
        <div className="w-10/12">
          <div className="text-center">
            <h2>{data.allContentfulSmileCardTitle.edges[1].node.title}</h2>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-12/12">
          <div className="text-center">
            <img
              src={data.allContentfulSmileImage.edges[0].node.image.file.url}
              alt={data.allContentfulSmileImage.edges[0].node.image.title}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SmileCard
