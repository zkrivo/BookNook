import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import templateStyles from "./template.module.scss"

export const query = graphql`
query (
    $slug: String!
  ) {
    markdownRemark (
      fields: {
        slug: {
          eq: $slug
        }
      }
    ) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const Blog = (props) => {
    return (
        <Layout>
            <h1 className={templateStyles.blogTitle}>{props.data.markdownRemark.frontmatter.title}</h1>
            <p className={templateStyles.paragraph}>{props.data.markdownRemark.frontmatter.date}</p>
            <div className={templateStyles.details} dangerouslySetInnerHTML={{ __html:props.data.markdownRemark.html }}></div>
        </Layout>
    )
}

export default Blog