import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import NewPosts from '../components/NewPosts'
import JoinEmail from '../components/JoinEmail'

const IndexPage = () => {

  return (
    <div style={{ backgroundColor: "#171a1e" }} className="text-white flex flex-col min-h-screen">
      <div className="flex-grow max-w-full">
        <Navbar />
        <Hero />
        <div className="mt-10 max-w-6xl lg:justify-between mx-auto lg:flex">
          <main className="lg:w-8/12 ml-4 lg:mr-8"><NewPosts display="hidden" isResponsive={true} width="max-w-2xl mx-auto" /></main>
          <aside>
            <JoinEmail display="hidden lg:block mr-4" />
          </aside>
        </div>
      </div>
      <footer className="bg-black text-white w-full text-center border-t border-grey p-4 pin-b">
        <JoinEmail display="block lg:hidden" />
        © {new Date().getFullYear()}
        {` `}
        <p>Teratomi</p>
      </footer>
    </div >
  )
}

export default IndexPage

