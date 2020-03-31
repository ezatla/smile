import { Link } from "gatsby"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="mt-12 text-gray-600">
    <div className="flex justify-between">
      <div className="text-left text-gray-800 px-4">
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>
      </div>
      <ul className="inline-flex flex-wrap p-2">
        <li className="mx-4 hover:text-gray-900">
          <Link to="/">Product</Link>
        </li>
        <li className="mx-4 hover:text-gray-900">
          <Link to="/">Customers</Link>
        </li>
        <li className="mx-4 hover:text-gray-900">
          <Link to="/">Integration</Link>
        </li>
        <li className="mx-4 hover:text-gray-900">
          <Link to="/">Pricing</Link>
        </li>
      </ul>
    </div>
  </header>
)

export default Header
