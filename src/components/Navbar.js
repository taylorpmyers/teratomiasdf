  import React, { useState } from "react"
  import { Link } from 'gatsby'
  import patreon from '../img/patreon-icon.png'
  import twitter from '../img/twitter-icon.png'
  import amazon from '../img/amazon-icon.png'
  import smashwords from '../img/smashwords-icon.png'
  import teratomi from '../img/teratomi-icon.png'

  function Navbar({ siteTitle }) {

    const [isExpanded, toggleExpansion] = useState(false)
    return (
      <nav className="flex items-center justify-center flex-wrap bg-black py-3">
        <div className = "flex flex-wrap w-full md:max-w-4xl md:justify-between">
        <div className="flex items-center flex-shrink-0 text-white">
        <img className=" h-8 w-8 ml-2 mr-2" alt="teratomi logo" src={teratomi}></img>
          <span className="font-semibold text-xl text-pink-700 tracking-widest"><Link to="/">Teratomi</Link></span>
        </div>
        <div className="ml-auto block md:hidden">
          <button onClick={() => toggleExpansion(!isExpanded)} className="flex items-center px-3 py-2 border rounded text-pink-700 border-pink-700 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
          <div className={`${ isExpanded ? `block` : `hidden` } w-full md:block flex-wrap md:w-auto text-sm md:m-auto`}>
            <Link to="/about" activeClassName="text-pink-700" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-pink-700 ml-4">ABOUT</Link>
            <Link to="/books" activeClassName="text-pink-700" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-pink-700 ml-4">BOOKS</Link>
            <Link to="/blog" activeClassName="text-pink-700"className="block mt-4 md:inline-block md:mt-0 text-white hover:text-pink-700 ml-4">BLOG</Link>
            <Link to="/flashfic" activeClassName="text-pink-700"className="block mt-4 md:inline-block md:mt-0 text-white hover:text-pink-700 ml-4">FLASH FIC</Link>
          </div>
          <div style = {{width: "179px"}} className={`${ isExpanded ? `block` : `hidden` } md:block mt-2 flex md:items-center w-full md:w-auto `}>
            <a className="inline-block text-sm leading-none ml-2 md:mt-0" href="https://www.twitter.com/"><img alt="twitter logo" src={twitter} width="32" height="32"></img></a>
            <a className="inline-block text-sm leading-none ml-2 md:mt-0" href="https://www.amazon.com/"><img alt="amazon logo" src={amazon} width="32" height="32"></img></a>
            <a className="inline-block text-sm leading-none ml-2 md:mt-0" href="https://www.patreon.com/"><img alt="patreon logo" src={patreon} width="32" height="32"></img></a>
            <a className="inline-block text-sm leading-none ml-2 mr-2 md:mt-0" href="https://www.smashwords.com/"><img alt="smashwords logo" src={smashwords} width="32" height="32"></img></a>
          </div>
        </div>
      </nav>
    )
  }


  export default Navbar
