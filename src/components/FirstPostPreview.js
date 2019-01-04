import React from 'react'
import { Link } from 'gatsby'

import './all.sass'

const FirstPostPreview = ( {post} ) => (

      <div>
        <div>
          <img className="blog-post-image-preview"
            src={post.frontmatter.featuredImage.image}
            alt={post.frontmatter.featuredImage.alt}
            />
        </div>
        <div style={{margin: '2em 0'}}>
          <p>
            <Link className="has-text-primary is-size-4" to={post.fields.slug}>
              {post.frontmatter.title}
            </Link>
          </p>
          <p>
            {post.frontmatter.description}
            <br />
            <br />
            <Link className="button is-small" to={post.fields.slug}>
              Keep Reading →
            </Link>
          </p>
        </div>
      </div>


)

export default FirstPostPreview
