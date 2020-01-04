import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import MyLayout from '../components/MyLayout'
import Content, { HTMLContent } from '../components/Content'
import CatPic from '../img/cat.jpg'
import amazon from '../img/amazonProfileButton.png'
import smashwords from '../img/smashwordsProfileButton.png'
import twitter from '../img/twitterButton.png'
import patreon from '../img/patreonButton.png'


export const AboutPageTemplate = ({ content, contentComponent }) => {
  const PageContent = contentComponent || Content
  return (
    <section className = "max-w-4xl mx-auto">
      <h3 className = "text-center text-4xl font-serif text-pink-700 mt-20">About</h3>
      <h1 style = {{textDecorationColor: "#B83280"}}className = "text-center text-6xl font-serif underline">Naomi Spicer</h1>
      <div className = "md:flex flex-row mt-4">
        <img alt="cartoon cat in a T-shirt" className="rounded-full w-40 h-40 mx-auto md:m-4" src={CatPic}></img>
        <PageContent className="content mx-6 md:mt-8" content={content} />
      </div>
      <div className = "flex flex-wrap justify-around mt-6">
        <img className = "w-full sm:w-1/2 max-w-xs mt-2" alt = "link to amazon store" src = {amazon}/>
        <img className = "w-full sm:w-1/2 max-w-xs mt-2" alt = "link to smashwords store" src = {smashwords} />
        <img className = "w-full sm:w-1/2 max-w-xs mt-2" alt = "link to twitter profile" src = {twitter}/>
        <img className = "w-full sm:w-1/2 max-w-xs mt-2" alt = "link to patreon" src = {patreon} />
        </div>      
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <MyLayout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </MyLayout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
