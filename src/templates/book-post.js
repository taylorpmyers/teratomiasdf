import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/MyLayout"
import AmazonButton from '../img/amazonButton.png'
import SmashwordsButton from '../img/smashwordsButton.png'
// cover,title, author, pages, date, series,smashwords,amazon, tags
class BookPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    return (
      <Layout >
        <div className=" mx-8 mb-10 max-w-2xl">
          <h1 style={{ textDecorationColor: "#B83280" }} className="font-serif underline">{post.frontmatter.title}</h1>
          <h4 className=" font-serif text-teal-600">{post.frontmatter.date}</h4>
          <p>Pages: {post.frontmatter.pages}</p>
          <Img
            className="flex max-w-sm mx-auto"
            fluid={post.frontmatter.featuredimage.childImageSharp.fluid}
          />
          <p className = "mt-10">{post.frontmatter.description}</p>
          <div>
            <a href={post.frontmatter.amazonlink}><img alt="asdf" className = "mb-5 max-w-xs" src={AmazonButton} /></a>
            <a href={post.frontmatter.smashwordslink}><img alt="asdf" className = "mb-5 max-w-xs" src={SmashwordsButton} /></a>
          </div>
          <div className="mt-10">
            {post.frontmatter.tags.map(tag => (
              <span className="inline-block text-lg text-teal-600">{`#${tag}`}&nbsp;</span>
            ))}
          </div>
          <div className="netlifyContent"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

        </div>
      </Layout>
    )
  }
}

export default BookPostTemplate

export const pageQuery = graphql`
  query BookPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html  
      frontmatter {
        title
        date(formatString: "MMMM DD,YYYY")
        tags
        description
        pages
        smashwordslink
        amazonlink
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 240, maxHeight: 450, quality:100) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  }
`

