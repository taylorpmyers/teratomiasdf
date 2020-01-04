import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import amazon from '../img/amazonButton.png'
import smashwords from '../img/smashwordsButton.png'

class BookRoll extends React.Component {
  render() {
    const { data } = this.props
    let { edges: posts } = data.allMarkdownRemark
    const shortenText = (text, lng) => { return text.length < lng ? text : text.slice(0, lng).concat("...") }
    const isResponsive = style => {return this.props.isResponsive ? style : ""}
    if (this.props.num && this.props.num < posts.length) {
      let temp = posts.slice(0, this.props.num)
      posts = temp
    }  
    return (
      <div className="flex flex-wrap">
        {posts &&
          posts.map(({ node: post }) => (
            <div key={post.id} className="m-5 rounded w-full inline-block ">
              <div className="w-full max-w-2xl flex">
                <Link to={post.fields.slug} className={`w-20 h-auto flex-none rounded-none overflow-hidden ${isResponsive("md:w-32")}`} >
                  {post.frontmatter.featuredimage ? (
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                      }}
                    />
                  ) : null}
                </Link>
                <div className="ml-4 w-full flex-wrap leading-tight border-t-2 border-b-2 border-teal-600 h-full">
                  <div className="ml-2 mt-1 w-md">
                    <p className="text-sm text-white mb-0">Books / {post.frontmatter.date}</p>
                    <Link className={`text-xl mb-0 w-auto text-pink-700 inline-block ${isResponsive("sm:text-2xl md:text-3xl")}`} to={post.fields.slug}>
                      {shortenText(post.frontmatter.title, 50)}
                    </Link>
                    <div className={`hidden ${isResponsive("sm:inline-block")}`}>
                      <a className="mt-0" href={post.frontmatter.amazonlink}><img className="m-1 inline-block" alt="amazon logo" src={amazon} width="200" height="auto"></img></a>
                      <a className="mt-0" href={post.frontmatter.smashwordslink}><img className="m-1 inline-block" alt="smashwords logo" src={smashwords} width="200" height="auto"></img></a>
                    </div>
                    <div >
                      <p className={`text-white my-0 pb-1 hidden ${isResponsive("sm:inline-block")}`}>{shortenText(post.frontmatter.description, 155)}</p>
                      {post.frontmatter.tags.map(tag => (
                        <span className={`inline-block text-lg text-teal-600 ${isResponsive("sm:text-pink-700")}`}>{`#${tag}`}&nbsp;</span>
                      ))}
                    </div>

                  </div>
                </div>
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

export default props => (
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
                tags
                description
                smashwordslink
                amazonlink
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 240, maxHeight: 450, quality: 100) {
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
    render={(data, count) => <BookRoll data={data} count={count} num={props.num} isResponsive={props.isResponsive} />}
  />
)
