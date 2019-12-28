  import React, { useState } from "react"
  import { Link } from 'gatsby'
  import patreon from '../img/patreon-icon.png'
  import twitter from '../img/twitter-icon.png'
  import amazon from '../img/amazon-icon.png'



  function Navbar({ siteTitle }) {

    const [isExpanded, toggleExpansion] = useState(false)
    return (
      <nav className="flex items-center justify-center flex-wrap bg-purple-500">
        <div className = "flex flex-wrap w-full md:max-w-4xl md:justify-between">
        <div className="flex items-center flex-shrink-0 text-white">
          <svg className="fill-current h-8 w-8 ml-2 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
          <span className="font-semibold text-xl tracking-tight"><Link to="/">Teratomi</Link></span>
        </div>
        <div className="ml-auto block md:hidden">
          <button onClick={() => toggleExpansion(!isExpanded)} className="flex items-center px-3 py-2 border rounded text-purple-200 border-purple-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
          <div className={`${ isExpanded ? `block` : `hidden` } w-full md:block flex-wrap md:w-auto text-sm md:m-auto`}>
            <Link to="/about" className="block mt-4 md:inline-block md:mt-0 text-purple-200 hover:text-white ml-4 mr-4">ABOUT</Link>
            <Link to="/books" className="block mt-4 md:inline-block md:mt-0 text-purple-200 hover:text-white ml-4 mr-4">BOOKS</Link>
            <Link to="/blog" className="block mt-4 md:inline-block md:mt-0 text-purple-200 hover:text-white ml-4 mr-4">BLOG</Link>
            <Link to="/flashfic" className="block mt-4 md:inline-block md:mt-0 text-purple-200 hover:text-white ml-4">FLASH FIC</Link>
          </div>
          <div style = {{width: "157px"}}className={`${ isExpanded ? `block` : `hidden` } md:block mt-4 flex md:items-center w-full md:w-auto `}>
            <a className="inline-block text-sm leading-none ml-2 md:mt-0" href="https://www.twitter.com/"><img alt="twitter logo" src={twitter} width="32" height="32"></img></a>
            <a className="inline-block text-sm leading-none ml-2 md:mt-0" href="https://www.amazon.com/"><img alt="amazon logo" src={amazon} width="32" height="32"></img></a>
            <a className="inline-block text-sm leading-none ml-2 md:mt-0" href="https://www.patreon.com/"><img alt="patreon logo" src={patreon} width="32" height="32"></img></a>
          </div>
        </div>
      </nav>
    )
  }


  export default Navbar
