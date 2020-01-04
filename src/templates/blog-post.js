import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import MyLayout from "../components/MyLayout"
import './postStyle.module.css'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    return (
      <MyLayout>
        <div className=" mx-8 mb-10">
          <h1 style={{ textDecorationColor: "#B83280" }} className="font-serif underline">{post.frontmatter.title}</h1>
          <h4 className=" font-serif text-teal-600">{post.frontmatter.date}</h4>
          <Img
            className="flex max-w-3xl mx-auto"
            fluid={post.frontmatter.featuredimage.childImageSharp.fluid}
          />
          <div className="netlifyContent"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <div className="mt-10">
            {post.frontmatter.tags.map(tag => (
              <span className="inline-block text-lg text-teal-600">{`#${tag}`}&nbsp;</span>
            ))}
          </div>
        </div>

      </MyLayout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD,YYYY")
        tags
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