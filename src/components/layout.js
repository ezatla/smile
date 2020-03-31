import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main className="container">{children}</main>
        <footer className="text-right py-4 px-6 bg-gray-300 font-light text-sm">
          © {new Date().getFullYear()}, Built by
          {` `}
          <a href="https://www.gatsbyjs.org">Ezzat</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
