import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PostPreview from '../components/PostPreview'
import FirstPostPreview from '../components/FirstPostPreview'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    let featured = posts[0].node
    let otherPosts = posts.slice(1)

    return (
      <Layout>
        <section className="section">
          <div className="container">
              <div className="content">
                <h1 className="has-text-weight-bold is-size-2">Latest Posts</h1>
              </div>
                <div
                  className="content firstPost-preview"
                  style={{ border: '1px solid #eaecee', padding: '2em 2em' }}
                  key={featured.id}
                >
                  <FirstPostPreview post={featured}/>
                </div>
                {otherPosts
                  .map(({ node: post }) => (
                    <div
                      className="content post-preview"
                      style={{ border: '1px solid #eaecee', padding: '2em 2em' }}
                      key={post.id}
                    >
                      <PostPreview post={post} />
                    </div>
                  ))}
          </div>
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            description
            featuredImage {
              image
              alt
            }
          }
        }
      }
    }
  }
`
