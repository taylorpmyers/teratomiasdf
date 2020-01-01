import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import CatPic from '../img/cat.jpg'
import amazon from '../img/amazonButton.png'
import smashwords from '../img/smashwordsButton.png'


export const AboutPageTemplate = ({ content, contentComponent }) => {
  const PageContent = contentComponent || Content
  return (
    <section>
      <h3 className = "text-center font-serif text-pink-500 mt-20">About</h3>
      <h1 style = {{textDecorationColor: "#ED64A6"}}className = "text-center font-serif underline">Naomi Spicer</h1>
      <div className = "md:flex flex-row mt-12">
        <img alt="cartoon cat in a T-shirt" className="rounded-full mx-auto md:mx-4 md:w-56" src={CatPic}></img>
        <PageContent className="content mx-6" content={content} />
      </div>
      <div className = "flex flex-wrap justify-around">
        <img className = "w-full sm:w-1/2 max-w-xs" alt = "link to amazon store" src = {amazon}/>
        <img className = "w-full sm:w-1/2 max-w-xs" alt = "link to smashwords store" src = {smashwords} />
        <img className = "w-full sm:w-1/2 max-w-xs" alt = "link to amazon store" src = {amazon}/>
        <img className = "w-full sm:w-1/2 max-w-xs" alt = "link to smashwords store" src = {smashwords} />
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
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
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
