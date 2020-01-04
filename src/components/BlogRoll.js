import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    let { edges: posts } = data.allMarkdownRemark
    const shortenText = (text, lng) => { return text.length < lng ? text : text.slice(0, lng).concat("...") }
    const isResponsive = style => {return this.props.isResponsive ? style : ""} 
    if(this.props.num && this.props.num < posts.length){
      let temp = posts.slice(0,this.props.num)
      posts = temp
    }
    return (
      <div className="flex flex-wrap">
        {posts &&
          posts.map(({ node: post }) => (
            <div key={post.id} className="m-5 rounded inline-block w-full max-w-2xl">
              <div className="w-md flex">
                <Link to={post.fields.slug} className={`w-32 h-auto  flex-none rounded-none overflow-hidden ${isResponsive("sm:w-48 md:w-64")}`} >
                  {post.frontmatter.featuredimage ? (
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                      }}
                    />
                  ) : null}
                </Link>
                <div className="ml-2 w-full flex-wrap leading-tight border-t-2 border-b-2 border-teal-600 h-full">
                  <div className="ml-2 mt-1 w-md">
                    <p className="text-sm text-white mb-0">Blogs / {post.frontmatter.date}</p>
                    <Link className={`text-xl w-auto mb-0 text-pink-700 inline-block ${isResponsive("sm: text-2xl md:text-3xl")}`} to={post.fields.slug}>
                      {shortenText(post.frontmatter.title, 30)}
                    </Link>
                    <div >
                      <p className={`hidden text-white text-sm my-0 ${isResponsive("sm:inline-block md:text-base")}`}>{shortenText(post.excerpt, 155)}</p>
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

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default props => (
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
                tags
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 750, maxHeight: 500, quality: 100) {
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
    render={(data, count) => <BlogRoll data={data} count={count} num={props.num} isResponsive={props.isResponsive} />}
  />
)
