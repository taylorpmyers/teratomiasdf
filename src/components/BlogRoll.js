import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const shortenText = (text, lng) => { return text.length < lng ? text : text.slice(0, lng).concat("...") }
    console.log(data)
    return (
      <div>
        {posts &&
          posts.map(({ node: post }) => (
            <div key={post.id} className="max-w-xs rounded overflow-hidden shadow-2xl">
              {post.frontmatter.featuredimage ? (
                <PreviewCompatibleImage
                  imageInfo={{
                    image: post.frontmatter.featuredimage,
                    alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                  }}
                />
              ) : null}
              <div className="px-6 py-4">
                <p className="m-0">
                  <Link
                    className="font-semibold text-purple-400 text-lg"
                    to={post.fields.slug}
                  >
                    {shortenText(post.frontmatter.title, 25)}
                  </Link>
                  <span className="block subtitle italic text-blue-800">
                    {post.frontmatter.date}
                  </span>
                  <span className="text-sm p-0 mt-0">
                    {shortenText(post.excerpt, 80)}
                  </span>
                </p>
                <div className="my-1 text-right">
                  <Link className="text-purple-400 rounded-full px-3 py-1 text-lg font-semibold" to={post.fields.slug}>
                    Keep Reading →
                  </Link>
                </div>
                <span style = {{padding: ".05rem .75rem"}} className="inline-block bg-red-800 rounded-full text-xs font-semibold text-white mr-2">#vampire</span>
                <span style = {{padding: ".05rem .75rem"}} className="inline-block bg-black rounded-full text-xs font-semibold text-white">#bdsm</span>
              </div>
            </div>
          ))}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default arg => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")

                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 1000, maxHeight: 400, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
