import React from "react"
import BookRoll from './BookRoll'
import BlogRoll from './BlogRoll'
import FlashRoll from './FlashRoll'
import JoinEmail from './JoinEmail'


function NewPosts (props) {
    const rhombusClass = "bg-teal-600 text-center max-w-sm text-xl py-1 mx-5"
    const rhombusStyle = { transform: "skew(-30deg)" }
  return (
    <div className = {props.width}>
        <JoinEmail display = {props.display}/>
        <div style = {rhombusStyle} className={rhombusClass}>LATEST BOOK</div>
        <BookRoll isResponsive={props.isResponsive}num={1} />
        <div style = {rhombusStyle} className={rhombusClass}>NEWEST BLOGS</div>
        <BlogRoll isResponsive={props.isResponsive}num={2} />
        <div style = {rhombusStyle} className={rhombusClass}>FREE FLASH FICTION</div>
        <FlashRoll isResponsive={props.isResponsive}num={2} />
      </div>
  )
}

export default NewPosts
