import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

class FlashficPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    return (
      <Layout location={this.props.location} >
        <h1>{post.frontmatter.title}</h1>
        <h6>{post.frontmatter.date}</h6>
        <Img
          className="flex max-w-2xl mx-auto"
          fluid={post.frontmatter.featuredimage.childImageSharp.fluid}
        />
        <div
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </Layout>
    )
  }
}

export default FlashficPostTemplate

export const pageQuery = graphql`
  query FlashficPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD,YYYY")
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 756) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  }
`
