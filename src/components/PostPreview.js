import React from 'react'
import { Link } from 'gatsby'

import './all.sass'

const PostPreview = ( {post} ) => (

      <div className="columns">
        <div className="column is-3">
          <img className="blog-post-image-preview"
            src={post.frontmatter.featuredImage.image}
            alt={post.frontmatter.featuredImage.alt}
            />
        </div>
        <div className="column is-9">
          <p>
            <Link className="is-size-4 has-text-primary" to={post.fields.slug}>
              {post.frontmatter.title}
            </Link>
          </p>
          <p>
            {post.excerpt}
            <br />
            <br />
            <Link className="button is-small" to={post.fields.slug}>
              Keep Reading →
            </Link>
          </p>
        </div>
      </div>


)

export default PostPreview
