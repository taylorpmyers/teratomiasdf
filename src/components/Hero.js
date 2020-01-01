import React from "react"
import gradient from '../img/gradient.png'
import HeroImg from './HeroImg'
 
const Hero = props => {

  return (
    <div className="flex flex-wrap w-full mx-auto" style = {{maxWidth: "2400px"}}>
          <HeroImg />
          <div style = {{backgroundImage: `url(${gradient})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}className="w-full sm:w-1/2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 mt-4 sm:mt-10 lg:mt-20 xl:mt-32 font-serif text-white"></h2>
            <h3 className="text-xl md:text-2xl font-serif mb-8 text-gray-200"></h3>
          </div>
        </div>
  )
}


export default Hero
