import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "./Navbar.js"
import "./layout.css"
 
const Layout = props => {

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
    <div style={{ backgroundColor: "#171a1e" }} className="flex flex-col min-h-screen">
      <div  className="flex-grow max-w-full">
        <Navbar />
        {props.hero}
        <main className="mt-10 max-w-4xl m-auto">{props.children}</main>
      </div>
      <footer className="bg-black text-white w-full text-center border-t border-grey p-4 pin-b">
        © {new Date().getFullYear()}, Built with
          {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
