import React from 'react';
import { StaticQuery, graphql } from "gatsby";
import Malarquee from 'react-malarquee';
// import { Link } from 'gatsby';

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC } limit: 10) {
          totalCount
          edges {
            node {
              id
              frontmatter {
                title
                date(formatString: "YYYY.MM.DD")
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <div>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <span key={node.id}>
                {node.frontmatter.date} {node.frontmatter.title}
              </span>
            ))}
        </div>
        <div>
          <Malarquee><span>We Are </span><span>Inline, so we </span><span>don't stack</span></Malarquee>
        </div>
      </div>
    )}
  />
)