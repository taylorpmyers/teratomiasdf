import React from "react"
import gradient from '../img/gradient.png'
import HeroImg from './HeroImg'
import Logo from '../img/teratomi-icon.png'

const Hero = () => {

  return (
    <div className="flex flex-wrap w-full mx-auto" style = {{maxWidth: "2400px"}}>
          <HeroImg />
          <div style = {{backgroundImage: `url(${gradient})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}className="w-full sm:w-1/2">
            <h2 className="flex text-4xl md:text-5xl lg:text-6xl font-bold mb-2 mt-4 sm:mt-10 lg:mt-20 xl:mt-32 font-serif text-white">
              <img className = "mx-4 w-20"alt = "dragon head" src = {Logo}></img>
              <span className = "mt-4 tracking-widest md:mt-2 lg:mt-0 text-pink-700">Teratomi</span>
            </h2>
            <h3 className="text-xl md:text-2xl font-serif mb-8 text-gray-200 ml-6">Erotica blog for author{" "}
            <span style = {{textDecorationColor: "#B83280"}}className = "underline whitespace-no-wrap">Naomi Spicer</span></h3>
          </div>
        </div>
  )
}



export default Hero
