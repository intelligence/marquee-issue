import React from "react"
import { css } from "react-emotion"
import { Link, graphql } from "gatsby"
import Layout from '../components/layout';

//import { rhythm } from "../utils/typography"
//import Layout from "../components/layout"

export default ({ data }) => {

  return (
    <Layout title="News">
      <div>

        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              className={css`
                text-decoration: none;
                color: inherit;
              `
              }
            >

              <h3
                className={css`
                  margin-bottom:;
                `}
              >
                {node.frontmatter.title}{" "}
                <span
                  className={css`
                    color: #bbb;
                  `}
                >
                  — {node.frontmatter.date}
                </span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`