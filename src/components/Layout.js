import React from "react"
import PropTypes from "prop-types"
import Navbar from "./Navbar.js"
import NewPosts from './NewPosts'
import JoinEmail from './JoinEmail'
const Layout = props => {

  return (
    <div style={{ backgroundColor: "#171a1e" }} className="text-white flex flex-col min-h-screen">
      <div className="flex-grow max-w-full">
        <Navbar />
        {props.hero}
        <div className="mt-10 max-w-6xl lg:justify-between mx-auto lg:flex">
          <main className="lg:w-7/12 ml-4 lg:mr-8">{props.children}</main>
          <aside className={"hidden lg:block lg:w-4/12"}><NewPosts isResponsive={false} width="min-w-xs" /></aside>
        </div>
      </div>
      <footer className="bg-black text-white w-full text-center border-t border-grey p-4 pin-b">
        <JoinEmail display = "lg:hidden"/>
        © {new Date().getFullYear()}
        {" "}
        Teratomi
      </footer>
    </div>
  )
}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
