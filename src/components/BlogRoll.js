import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    console.log(posts)
    return (
      <div>
        {posts &&
          posts.map(({ node: post }) => (
            <div key={post.id} class="max-w-sm rounded overflow-hidden shadow-2xl">
              {post.frontmatter.featuredimage ? (
                <PreviewCompatibleImage
                  imageInfo={{
                    image: post.frontmatter.featuredimage,
                    alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                  }}
                />
              ) : null}
              <div class="px-6 py-4">
                <p>
                  <Link
                    className="title has-text-primary text-lg"
                    to={post.fields.slug}
                  >
                    {post.frontmatter.title}
                  </Link>
                  <span> &bull; </span>
                </p>
                <p className="text-sm">
                  {post.excerpt}
                  <br />
                  <span className="flex justify-between">
                  <Link className="button bg-purple-400 rounded-full px-3 py-1 text-lg font-semibold text-white" to={post.fields.slug}>
                    Keep Reading →
                  </Link>
                  <span className="subtitle text-md is-block text-right">
                    {post.frontmatter.date}
                  </span>
                </span>
                </p>
                <span class="inline-block bg-red-800 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">#vampire</span>
                <span class="inline-block bg-black rounded-full px-3 py-1 text-sm font-semibold text-white">#bdsm</span>
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

export default () => (
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
