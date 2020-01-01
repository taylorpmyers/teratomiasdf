import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import amazon from '../img/amazonButton.png'
import smashwords from '../img/smashwordsButton.png'

class BookRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const shortenText = (text, lng) => { return text.length < lng ? text : text.slice(0, lng).concat("...") }
    return (
      <div>
        {posts &&
          posts.map(({ node: post }) => (
            <div key={post.id} className="m-5 bg-white rounded inline-block shadow-2xl">
              <div className="max-w-sm flex">
                <div className="w-24 h-auto md:w-24 flex-none text-center overflow-hidden" >
                  {post.frontmatter.featuredimage ? (
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                      }}
                    />
                  ) : null}
                </div>
                <div className="ml-2 mr-2 flex-wrap leading-normal">
                  <Link className="font-semibold text-lg" to={post.fields.slug}>
                    {shortenText(post.frontmatter.title, 25)}
                  </Link>
                  <p className="text-sm text-gray-600 mb-0 items-center">{post.frontmatter.date}</p>
                  <a className="inline-block m-0" href="https://www.amazon.com/"><img className = "m-0 md:mb-2 md:mt-2" alt="amazon logo" src={amazon} width="200" height="auto"></img></a>
                  <a className="inline-block mt-0" href="https://www.smashwords.com/"><img className = "m-0" alt="smashwords logo" src={smashwords} width="200" height="auto"></img></a>
                </div>
              </div>
              <div className="max-w-sm ml-2 mr-2 ">
                <p className="text-gray-700 text-base mb-0 ">{shortenText(post.excerpt, 95)} <br></br><Link className="text-purple-400 rounded-full px-3 py-1 text-lg font-semibold" to={post.fields.slug}> More Info →</Link></p>
              </div>
              <span style = {{padding: ".05rem .75rem"}} className="inline-block bg-red-800 rounded-full text-xs font-semibold text-white m-2">#vampire</span>
                <span style = {{padding: ".05rem .75rem"}} className="inline-block bg-black rounded-full text-xs font-semibold text-white">#bdsm</span>
                <span style = {{padding: ".05rem .75rem"}} className="inline-block bg-red-800 rounded-full text-xs font-semibold text-white m-2">#vampire</span>
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
