import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class BookRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const shortenText = (text, lng) => { return text.length < lng ? text : text.slice(0, lng).concat("...") }
    return (
      <div>
        {posts &&
          posts.map(({ node: post }) => (
            <div key={post.id} className = "border border-gray-400 bg-white rounded inline-block">
              <div  className="max-w-sm flex">
                <div className="w-24 h-auto md:w-40 flex-none text-center overflow-hidden" >
                  {post.frontmatter.featuredimage ? (
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                      }}
                    />
                  ) : null}
                </div>
                <div className="p-4 justify-between leading-normal">
                  <div className="">
                    <p className="text-sm text-gray-600 mb-0 flex items-center">{post.frontmatter.date}</p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">
                      Kindle
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">
                      Smashwords
                    </button>
                    
                    {/* <p className="text-gray-700 text-base">{shortenText(post.excerpt, 80)}</p> */}
                    <Link className="text-purple-400 rounded-full px-3 py-1 text-lg font-semibold" to={post.fields.slug}>
                      More Info →
                        </Link>
                  </div>
                </div>
              </div>
              <div className="bg-pink-500 text-white font-bold text-xl p-1 rounded-b">
                      <Link className="font-semibold text-white text-lg" to={post.fields.slug}>
                        {shortenText(post.frontmatter.title, 25)}
                      </Link>
                    </div>
            </div>
          ))}
      </div>
    )
  }
}

BookRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default arg => (
  <StaticQuery
    query={graphql`
      query BookRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "book-post" } } }
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
                    fluid(maxWidth: 660, maxHeight: 1000, quality: 100) {
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
    render={(data, count) => <BookRoll data={data} count={count} />}
  />
)
